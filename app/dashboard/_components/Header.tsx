import { UserButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 shadow-sm  flex justify-between ">
      <div className="flex gap-2 items-center p-2  rounded-md max-w-md">
        {/* <Search/> 
            {/* <input type="text" placeholder='Search..' className='outline-none bg-transparent'/> */}
      </div>
      <div className="flex gap-5 items-center">
        {/* <h1 className='bg-black p-5 rounded-md text-xs text-white px-4 cursor-pointer '>Join Memebership just for $9.99/Month</h1> */}
        {/* <div className="md:w-64 hidden md:block fixed"><UserButton/></div> */}
      </div>
    </div>
  );
};

export default Header;
