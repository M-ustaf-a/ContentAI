import { Search } from 'lucide-react';
import React from 'react';

// Component for the search section
function SearchSection({ onSearchInput }:any) {
  return (
    <div className="p-10 bg-gradient-to-br bg-black flex flex-col justify-center items-center text-white">
      <h2 className="text-xl font-bold">Browse All Templates</h2>
      <p className="text-gray-200">What would you like to search for?</p>
      
      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center p-2 border rounded-md my-5 w-[50%]">
          <Search />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent placeholder:text-gray-400 w-full outline-none"
            onChange={(event) => onSearchInput(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
