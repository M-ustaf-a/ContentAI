import React, { useEffect } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FileClock, Home, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DeblurIcon from '@mui/icons-material/Deblur';
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";


function MobileNav() {

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
 
const path = usePathname();
useEffect(()=>{
    console.log(path)
},[])

  return (
    <div>
      <Sheet>
        <SheetTrigger>
           {/* <DeblurIcon/> */}
           <Image src="/logo.svg" alt="toggle" width={30} height={30} className="ml-3 mt-3"/>
          </SheetTrigger>
        <SheetContent>
          <SheetClose asChild>
          <nav className="flex h-full flex-col gap-6 text-white-1 mt-5">
          {MenuList.map((menu,index)=>(
                <Link href={menu.path}>
                    <div className={`flex gap-2 mb-2 p-3
                    hover:bg-primary hover:text-white rounded-lg
                    cursor-pointer items-center
                    ${path==menu.path&&'bg-primary text-white'}
                    `}>
                        <menu.icon className='h-6 w-6'/>
                        <h2 className='text-lg'>{menu.name}</h2>
                    </div>
                </Link>
            ))}
          </nav>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav;
