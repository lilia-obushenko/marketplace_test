"use client";

import { DropDownOption } from "@/types";
import Image from "next/image";
import React, { useState } from "react";

interface DropdownProps {
  options: DropDownOption[];
  selectedOption: DropDownOption;
  onSelectOption: (value: DropDownOption) => void;
}

export const Dropdown = ({
  onSelectOption,
  options,
  selectedOption,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionClick = (option: { value: string; label: string }) => {
    onSelectOption(option);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0" onClick={() => setIsOpen(false)} />
      )}
      <div className="relative border-[2px] border-[#E7E7DA] rounded-[10px] w-full transition-all ease-in-out duration-300 max-w-[300px] h-fit">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-[15px] py-[13px] text-[16px] leading-5 font-mont font-semibold text-[#424531] rounded-[10px]"
        >
          {selectedOption.label}
          <span className="flex justify-center items-center gap-3">
            <div className="h-[20px] w-[2px] bg-[#C0C2B0]"></div>
            <Image
              src="/assets/icons/arrow-down.svg"
              alt="arrow"
              width={25}
              height={25}
              className={`${isOpen ? "rotate-[180deg]" : "rotate-0"}`}
            />
          </span>
        </button>
        {isOpen && (
          <ul className="absolute left-0 right-0 top-full bg-white border border-[#E7E7DA] rounded-[10px] mt-2 max-h-60 overflow-auto z-20">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className="px-[15px] py-[12px] text-[16px] text-[#424531] leading-5 font-mont font-semibold hover:bg-[#E7E7DA] cursor-pointer"
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
