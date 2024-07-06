import Templates from '@/app/(data)/Templates';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { currentUser } from '@clerk/nextjs/server';
import { desc, eq } from 'drizzle-orm';
import Image from 'next/image';
import React from 'react';
import { TEMPLATE } from '../_components/TemplateListSection';
import CopyButton from './_components/CopyButton';

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string | null;  // Allow null values
  templateSlug: string;
  createdBy: string;
  createdAt: string | null;  // Allow null values
}

async function History() {
  const user = await currentUser();

  // Ensure user is defined
  if (!user || !user.primaryEmailAddress || !user.primaryEmailAddress.emailAddress) {
    console.error("User is not properly defined");
    return null;
  }

  // Perform database query
  const HistoryList: HISTORY[] = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress))
    .orderBy(desc(AIOutput.id));

  const GetTemplateName = (slug: string) => {
    const template: TEMPLATE | undefined = Templates.find((item) => item.slug === slug);
    return template;
  };

  return (
    <div className='m-5 p-5 border rounded-lg bg-white'>
      <h2 className='font-bold text-3xl'>History</h2>
      <p className='text-gray-500'>Search your previously generated AI content</p>
      <div className='grid grid-cols-1 sm:grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3'>
        <h2 className='col-span-2'>TEMPLATE</h2>
        <h2 className='col-span-2'>AI RESP</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>
      {HistoryList.map((item) => (
        <React.Fragment key={item.id}>
          <div className='grid grid-cols-1 sm:grid-cols-7 my-5 py-3 px-3'>
            <h2 className='col-span-2 flex gap-2 items-center'>
              <Image src={GetTemplateName(item?.templateSlug)?.icon || '/default-icon.png'} width={25} height={25} alt='icon' />
              {GetTemplateName(item.templateSlug)?.name}
            </h2>
            <h2 className='col-span-2 line-clamp-3 mr-3'>{item?.aiResponse || 'No response available'}</h2>
            <h2>{item.createdAt || 'N/A'}</h2>
            <h2>{item?.aiResponse ? item.aiResponse.length : 0}</h2>
            <h2>
              <CopyButton aiResponse={item.aiResponse || ''} />
            </h2>
          </div>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
}

export default History;
