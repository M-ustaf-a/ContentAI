"use client"

import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

interface PROPS {
  selectedTemplates?: TEMPLATE;
  userFormInput:any
  loading:boolean
}
function FormSection({ selectedTemplates, userFormInput,loading }: PROPS) {
    const onSubmit=(e:any)=>{
      e.preventDefault();
      userFormInput(formData);
    }

    const [formData,setFormData] = useState<any>();
    const handleInputChange=(event:any)=>{
       const {name,value} = event.target;
       setFormData({...formData,[name]:value})
    }
  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      <Image src={selectedTemplates?.icon} alt="icon" width={70} height={70} />
      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplates?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplates?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplates?.form?.map((item, index) => (
          <div className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field == "input" ? (
              <Input name={item.name} required={item?.required} onChange={handleInputChange}/>
            ) : item.field == "textarea" ? (
              <Textarea name={item.name} required={item?.required} onChange={handleInputChange}/>
            ) : null}
          </div>
        ))}
        <Button type="submit" className="w-full py-6" disabled={loading}>
          {loading&&<Loader2Icon className="animate-spin"/>}Generate Content
          </Button>
      </form>
    </div>
  );
}

export default FormSection;
