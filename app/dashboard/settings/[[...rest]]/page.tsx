import { UserButton, UserProfile } from "@clerk/nextjs";
import React from "react";

function Settings() {
  return (
    <div>
      <div className="flex flex-row-reverse m-3">
        <UserButton />
      </div>
      <div className="flex items-center justify-center h-full">
        <UserProfile />
      </div>
    </div>
  );
}

export default Settings;
