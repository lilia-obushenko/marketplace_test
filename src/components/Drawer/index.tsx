"use client";

import { ReactNode } from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export const Drawer = ({ isOpen, onClose, children }: DrawerProps) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9999]"
          onClick={onClose}
        />
      )}

      <div
        className={`w-[350px] md:w-[370px] bg-black rounded-l-[35px] pb-[20px] 
          fixed top-0 right-0 h-full shadow-md flex flex-col  z-[9999]
          items-center transition-transform duration-300 overflow-hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {children}
      </div>
    </>
  );
};
