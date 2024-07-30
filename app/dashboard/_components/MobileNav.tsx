import React, { useEffect } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FileClock, Home, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const MobileNav = () => {
  // Menu items for the navigation
  const menuItems = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  // Get current pathname
  const currentPath = usePathname();

  useEffect(() => {
    console.log(currentPath);
  }, [currentPath]);

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Image
            src="/logo.svg"
            alt="toggle"
            width={30}
            height={30}
            className="ml-3 mt-3"
          />
        </SheetTrigger>
        <SheetContent>
          <SheetClose asChild>
            <nav className="flex h-full flex-col gap-6 text-white-1 mt-5">
              {menuItems.map((menu, index) => (
                <Link href={menu.path} key={index}>
                  <div
                    className={`flex gap-2 mb-2 p-3
                    hover:bg-primary hover:text-white rounded-lg
                    cursor-pointer items-center
                    ${currentPath === menu.path ? "bg-primary text-white" : ""}
                    `}
                  >
                    <menu.icon className="h-6 w-6" />
                    <h2 className="text-lg">{menu.name}</h2>
                  </div>
                </Link>
              ))}
            </nav>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
