import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex gap-1 items-center p-2 rounded-md max-w-md">
        <Search />
        <input
          type="text"
          placeholder="Search.."
          className="outline-none bg-transparent"
        />
      </div>
      <div className="flex gap-5 items-center">
        {/* <h1 className='bg-black p-5 rounded-md text-xs text-white px-4 cursor-pointer '>Join Membership just for $9.99/Month</h1> */}
        {/* <div className="md:w-64 hidden md:block fixed"><UserButton/></div> */}
      </div>
    </div>
  );
};

export default Header;
