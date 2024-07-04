

import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm';
import { element } from 'prop-types';
import React, { useContext, useEffect, useState } from 'react'
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';

function UsageTrack() {
    const {user} = useUser();
    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext)
    const result= db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress));
    
    useEffect(()=>{
        user&&GetData();
    },[user])


    const GetData=async()=>{
        const result:HISTORY[]=await db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress));
        GetTotalUsage(result);
    }
    const GetTotalUsage=(result:HISTORY[])=>{
        let total:number=0;
        result.forEach(element=>{
            total=total+Number(element.aiResponse?.length)
        });
        setTotalUsage(total);
    }
  return (
    <div className='m-5'>
        <div className='bg-primary text-white p-3 rounded-lg'>
            <h2 className='font-medium'>Credits</h2>
            <div className='h-2 bg-white w-full rounded-full mt-3'>
                <div className="h-2 bg-gray-400 rounded-full" style={{width:(totalUsage/10000)*100+"%"}}></div>
            </div>
            <h2 className='text-sm my-2'>{totalUsage}/10,000 credit used</h2>
            <Button variant={'secondary'} className='w-full my-3'>Upgrade</Button>
        </div>
    </div>
  )
}

export default UsageTrack