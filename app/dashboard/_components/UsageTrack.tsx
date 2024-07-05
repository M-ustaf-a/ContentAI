// "use client"
// import { Button } from '@/components/ui/button'
// import { db } from '@/utils/db';
// import { useUser } from '@clerk/nextjs';

// import { eq } from 'drizzle-orm';
// import React, { useContext, useEffect, useState } from 'react'
// import { HISTORY } from '../history/page';
// import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
// import { AIOutput } from '@/utils/schema';

//  function UsageTrack() {

//     const {user}=useUser();
//     const {totalUsage,setTotalUsage}=useContext(TotalUsageContext)
//     const [maxWords,setMaxWords]=useState(10000)
//     useEffect(()=>{
//         user&&GetData();
//         user
//     },[user]);


//     useEffect(()=>{
//         user&&GetData();
//     },[user]);

//     const GetData=async()=>{
//          {/* @ts-ignore */}
//         const result:HISTORY[]=await db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress));
        
//         GetTotalUsage(result)
//     }

//     const IsUserSubscribe=async()=>{
//          {/* @ts-ignore */}
//          const result:HISTORY[]=await db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress));
//         if(result.length>0)
//             {
//                 setMaxWords(500000);
//             }
//     }



//     const GetTotalUsage=(result:HISTORY[])=>{
//         let total:number=0;
//         result.forEach(element => {
//             total=total+Number(element.aiResponse?.length) 
//         });

//         setTotalUsage(total)
//         console.log(total);
//     }


//   return (
//     <div className='m-5'>
//         <div className='bg-primary text-white p-3 rounded-lg'>
//             <h2 className='font-medium'>Credits</h2>
//             <div className='h-2 bg-black w-full rounded-full mt-3'>
//                 <div className='h-2 bg-white rounded-full'
//                 style={{
//                     width:totalUsage/maxWords>1?100+"%":(totalUsage/maxWords)*100+"%"
//                 }}
//                 ></div>
//             </div>
//             <h2 className='text-sm my-2'>{totalUsage}/{maxWords} credit used</h2>
//         <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
//         </div>
//     </div>
//   )
// }

// export default UsageTrack