import React, { useEffect, useState } from "react";

const Header = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set the isClient state to true after the component is mounted
    setIsClient(true);
  }, []);

  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex gap-1 items-center p-2 rounded-lg max-w-md">
        {isClient && (
          <>
            {/* Load Google Custom Search Engine script */}
            <script
              async
              src="https://cse.google.com/cse.js?cx=a770a4337355f42d0"
            ></script>
            <div className="gcse-search"></div>
          </>
        )}
      </div>
      <div className="flex gap-5 items-center">
        {isClient && <div className="md:w-64 hidden md:block fixed "></div>}
      </div>
    </div>
  );
};

export default Header;
