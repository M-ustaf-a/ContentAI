"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import {FileClock, Home, Settings, User2Icon, WalletCards} from 'lucide-react'
import { usePathname } from 'next/navigation'
// import UsageTrack from './UsageTrack'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

function SideNav(){

    const MenuList=[ 
        {
            name:'Home',
            icon: Home,
            path:'/dashboard'
        },
        {
            name:'History',
            icon: FileClock,
            path:'/dashboard/history'
        },
        // {
        //     name:'Billing',
        //     icon: WalletCards,
        //     path:'/dashboard/billing'
        // },
        {
            name:'Setting',
            icon: Settings,
            path:'/dashboard/settings'
        },
        
    ]

    const Path = usePathname();
    // useEffect(()=>{
        // console.log(path)
    // },[])
  return (
    <div className='h-screen relative p-5 shadow-sm border'>
        <div className="flex justify-center">
           <Image src={'/logo.svg'} alt='logo' width={50} height={50}/>
        </div>
        <hr className='my-6 border'/>
        <div className='mt-3'>
        {MenuList.map((menu)=>(
                <Link href={menu.path}>
                    <div className={`flex gap-2 mb-2 p-3
                    hover:bg-primary hover:text-white rounded-lg
                    cursor-pointer items-center
                    ${Path==menu.path&&'bg-primary text-white'}
                    `}>
                        <menu.icon className='h-6 w-6'/>
                        <h2 className='text-lg'>{menu.name}</h2>
                    </div>
                </Link>
            ))}
        </div>
        <div className='absolute bottom-10 left-0 w-full'>
            {/* <UsageTrack/> */}
        </div>
    </div>
  )
}

export default SideNav