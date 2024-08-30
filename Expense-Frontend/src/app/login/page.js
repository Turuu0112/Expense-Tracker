"use client";

import { useAuth } from "@/components/providers/AuthProvider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/2 h-full flex flex-col mr-auto justify-center items-center gap-2">
        <div className="flex gap-1">
          <img src="/Vector.jpg"></img>
          <span className="font-semibold">Geld</span>
        </div>
        <h1 className="mt-10">Welcome back</h1>
        <p>Welcome back, Please enter your details</p>
        <div className="mt-10 flex flex-col gap-2 ">
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
            type="text"
            placeholder="Email"
            className="w-[384px] h-[48px] border rounded  px-2 bg-slate-50"
          />
          <input
            value={password}
            type="password"
            placeholder="Password"
            className="w-[384px] h-[48px] border rounded px-2 bg-slate-50"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />

          <Button
            className="rounded-full bg-blue-400 w-full "
            onClick={() => login(email, password)}
          >
            Login
          </Button>
        </div>
        <div className="mt-10">
          Don’t have account?
          <Link href="/register">
            <span className="text-blue-400 px-2">Sign up</span>{" "}
          </Link>
        </div>
      </div>
      <div className="w-1/2 h-full bg-blue-600"></div>
    </div>
  );
};
export default Page;
