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
  aiResponse: string | null; // Allow null values
  templateSlug: string;
  createdBy: string;
  createdAt: string | null; // Allow null values
}

async function History() {
  const user = await currentUser();

  // Ensure user is defined
  if (!user || !user.primaryEmailAddress?.emailAddress) {
    console.error("User is not properly defined");
    return null;
  }

  // Fetch history from the database
  const historyList: HISTORY[] = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress))
    .orderBy(desc(AIOutput.id));

  // Helper function to get template name by slug
  const getTemplate = (slug: string): TEMPLATE | undefined => {
    return Templates.find((item) => item.slug === slug);
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
      {historyList.map((item) => {
        const template = getTemplate(item.templateSlug);
        const iconSrc = template?.icon || '/default-icon.png';
        const responseText = item.aiResponse || 'No response available';
        const responseLength = responseText.length;

        return (
          <React.Fragment key={item.id}>
            <div className='grid grid-cols-1 sm:grid-cols-7 my-5 py-3 px-3'>
              <h2 className='col-span-2 flex gap-2 items-center'>
                <Image src={iconSrc} width={25} height={25} alt='icon' />
                {template?.name}
              </h2>
              <h2 className='col-span-2 line-clamp-3 mr-3'>{responseText}</h2>
              <h2>{item.createdAt || 'N/A'}</h2>
              <h2>{responseLength}</h2>
              <h2>
                <CopyButton aiResponse={responseText} />
              </h2>
            </div>
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default History;
