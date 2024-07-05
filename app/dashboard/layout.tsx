"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import MobileNav from './_components/MobileNav'

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){

    const [totalUsage,setTotalUsage] = useState<Number>(0);
  return (
    <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
    <div className='h-screen'>
        <div className='md:w-64 hidden md:block fixed'>
            <SideNav/>
        </div>
        <div className="flex h-10 items-center justify-between md:hidden ">
          <MobileNav/>
        </div>
        <div className='md:ml-64'>
            <Header/>
       {children}
        </div>
    </div>
    </TotalUsageContext.Provider>
  )
}

export default layout