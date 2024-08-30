"use client";

import { UserContext } from "@/components/Context";
import { User } from "lucide-react";
import { useContext } from "react";

export default function Loading() {
  const { userInfo } = useContext(UserContext);
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen gap-4 ">
      <div className="flex gap-2">
        <img src="/Vector.jpg" alt="Vector" className="w-10 h-10" />
        <span className="font-semibold text-[30px]">Geld</span>
      </div>
      <div className="border-4 rounded-full w-11 h-11 border-x-blue-500"></div>
      <p>
        Welcome back,{" "}
        <span className="text-blue-600 text-[20px] font-mono">
          {userInfo.firstname}
        </span>{" "}
      </p>
      <p>Түр хүлээнэ үү ....</p>
    </div>
  );
}
