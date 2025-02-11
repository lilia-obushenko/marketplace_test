"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDrawer } from "@/hooks";
import { Drawer } from "../Drawer";

export const Header = () => {
  const { openDrawer, isOpenDrawer, closeDrawer } = useDrawer();

  return (
    <header className="bg-black shadow-xl fixed top-0 right-0 left-0 py-[4px] lg:px-[80px] px-[20px] flex justify-center z-[100]">
      <div className="max-w-[1440px] flex justify-between items-center w-full">
        <Link href="/#home">
          <p className="text-white text-[34px]">Store</p>
        </Link>

        <Image
          src="/assets/icons/menu.svg"
          alt="Menu"
          height={40}
          width={40}
          onClick={openDrawer}
          className="sm:hidden block"
        />

        <Drawer isOpen={isOpenDrawer} onClose={closeDrawer}>
          <div className="flex justify-between w-full px-[8px] pt-[8px]">
            <Link href="/#home" onClick={closeDrawer}>
              <p className="text-white text-[24px]">Store</p>
            </Link>

            <Image
              src="/assets/icons/close.svg"
              alt="Close"
              width={25}
              height={25}
              onClick={closeDrawer}
              className="mr-[20px]"
            />
          </div>

          <div className="h-[0.5px] w-full bg-[#ffecb3] my-[8px]" />
        </Drawer>
      </div>
    </header>
  );
};
