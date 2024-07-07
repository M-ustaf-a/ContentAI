"use client"
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { useRouter } from 'next/navigation'

interface PROPS{
    params:{
        'template-slug':string
    }
}

function CreateContent(props:PROPS) {
  const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug'])
  const [loading,setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('')
  const {user} = useUser();
  const router = useRouter();
  // const {totalUsage,setTotalUsage} = useContext(TotalUsageContext);

    const GenerateAIContent = async(formData:any)=>{
      // if(totalUsage>=10000){
      //    router.push('/dashboard/billing')
      //   return;
      // }
      setLoading(true);
      const SelectedPrompt=selectedTemplate?.aiPrompt;
      const FinalAIPrompt=JSON.stringify(formData)+", "+SelectedPrompt;
      const result = await chatSession.sendMessage(FinalAIPrompt);
      
      setAiOutput(result?.response.text());
      await SaveInDb(JSON.stringify(formData),selectedTemplate?.slug,result?.response.text())
      setLoading(false);
    }  
    // const SaveInDb = async(formData:any,slug:any,aiResp:string)=>{
    //   const result=await db.insert(AIOutput).values({
    //     formData:formData,
    //     templateSlug:slug,
    //     aiResponse:aiResp,
    //     createdBy:user?.primaryEmailAddress?.emailAddress,
    //     createdAt:moment().format('DD/MM/yyyy'),
    // });

    // console.log(result);
    // }
    const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
      // Ensure required fields are defined
      const createdBy = user?.primaryEmailAddress?.emailAddress;
      const createdAt = moment().format('DD/MM/yyyy');
    
      if (!formData || !slug || !aiResp || !createdBy) {
        console.error('One or more required fields are undefined');
        return;
      }
    
      const result = await db.insert(AIOutput).values({
        formData: formData,
        templateSlug: slug,
        aiResponse: aiResp,
        createdBy: createdBy,
        createdAt: createdAt,
      });
    
      console.log(result);
    }
    

  return (
    <div className="p-3">
      <Link href={"/dashboard"}>
          <div className='w-7 text-gray-400 hover:text-black'><ArrowLeft/></div>
      </Link>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
        {/* FormSection */}
        <FormSection selectedTemplates={selectedTemplate} userFormInput={(v:any)=>GenerateAIContent(v)} loading={loading}/>
        {/* OutputSection */}
        <div className='col-span-2'>
           <OutputSection aiOutput={aiOutput}/>
        </div>
    </div>
    </div>
  )
}

export default CreateContent