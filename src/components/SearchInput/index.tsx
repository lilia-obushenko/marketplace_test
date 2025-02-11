import Image from "next/image";
import React from "react";

interface SearchInputProps {
  query: string;
  setQuery: (value: string) => void;
}

export const SearchInput = ({ query, setQuery }: SearchInputProps) => {
  return (
    <div className="relative w-full">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="outline-0 rounded-[50px] w-full pl-[20px] pr-[24px] py-[12px] 
      text-[18px] text-[#5B6647] placeholder:text-[#8B9280] border-[#E7E7DA] border-[2px]
      [@media(max-width:1280px)]:text-[14px]"
        autoComplete="off"
      />
      <Image
        src={
          query ? "/assets/icons/cross.svg" : "/assets/icons/search_icon.svg"
        }
        alt="Search"
        height={20}
        width={20}
        className="absolute right-[12px] top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={() => setQuery("")}
      />
    </div>
  );
};
