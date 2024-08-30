"use client";

import { Categories } from "@/components/Category";
import { CheckTable } from "@/components/Checktable";
import { Menubar } from "@/components/Menubar";

import { Navbar } from "@/components/Navbar";
import { Records } from "@/components/Records";

export default function recordHome() {
  return (
    <div>
      <Navbar />
      <div className="flex w-full ">
        <div>
          <Records />
          <Categories />
        </div>
        <div className="w-full pl-5 pr-[120px]">
          <Menubar />
          <CheckTable />
        </div>
      </div>
    </div>
  );
}
