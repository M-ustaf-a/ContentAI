"use client";

import React from "react";
import Image from "next/image";
import { FileClock, Home, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Side navigation component
function SideNav() {
  // List of menu items
  const MenuList = [
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
      name: "Setting",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  // Get the current pathname
  const path = usePathname();

  return (
    <div className="h-screen relative p-5 shadow-sm border-b">
      {/* Logo */}
      <div className="flex justify-center">
        <Image src={"/logo.svg"} alt="logo" width={50} height={50} />
      </div>
      <hr className="my-6 border" />
      
      {/* Menu items */}
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <div
              className={`flex gap-2 mb-2 p-3
                hover:bg-primary hover:text-white rounded-lg
                cursor-pointer items-center
                ${path === menu.path ? "bg-primary text-white" : ""}
              `}
            >
              <menu.icon className="h-6 w-6" />
              <h2 className="text-lg">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
