"use client";

import { UserContext } from "@/components/Context";
import { Base } from "@/components/select";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Input } from "postcss";
import { useContext } from "react";

export default function Balance() {
  const { userInfo, setuserInfo } = useContext(UserContext);
  console.log(userInfo);
  return (
    <div className="w-screen h-screen flex flex-col  items-center gap-[141px] ">
      <div>
        <div className="flex gap-2 pt-4 items-center justify-center">
          <img src="/Vector.jpg" alt="Vector" className="w-8 h-8" />
          <span className="font-semibold text-[30px]">Geld</span>
        </div>

        <div className="flex items-center mt-12 ">
          <div className="flex flex-col  w-6 h-6">
            <Skeleton className="border-transparent rounded-full w-6 h-6 bg-blue-600  flex justify-center items-center text-white">
              1
            </Skeleton>
            <span className="font-light text-[14px]">Currency</span>
          </div>

          <Skeleton className="w-[92px] h-[4px] border-[4px] rounded-full border-blue-600" />
          <div className="flex flex-col  w-6 h-6">
            <Skeleton className="border-transparent rounded-full w-6 h-6 bg-blue-600  flex justify-center items-center text-white">
              2
            </Skeleton>
            <span className="font-light text-[14px]">Balance</span>
          </div>
          <Skeleton className="w-[92px] h-[4px] border-[4px] rounded-full" />
          <div className="flex flex-col  w-6 h-6">
            <div className="border-transparent rounded-full w-6 h-6 bg-gray-400  flex justify-center items-center">
              3
            </div>
            <span className="font-light text-[14px]">Finish</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center w-[384px]">
        <div className="w-[48px] h-[48px] rounded-full bg-blue-600 p-2">
          <img src="/Coins.png" />
        </div>

        <h1 className="font-semibold text-[24px]">Select base Currency</h1>
        <input
          type="mail"
          className="w-full h-[48px] rounded-md p-2 border bg-slate-50"
          placeholder="Email"
        />
        <span className="text-[12px]">
          How much cash do you have in your wallet?
        </span>
        <Link href="/finish" className="w-full ">
          <Button className="w-full rounded-full bg-blue-600"> Confirm</Button>
        </Link>
      </div>
    </div>
  );
}
