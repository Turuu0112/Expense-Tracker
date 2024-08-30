"use client";

import { UserContext } from "@/components/Context";
import { useAuth } from "@/components/providers/AuthProvider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useContext, useState } from "react";

export default function Home() {
  const { userInfo, setuserInfo } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwords, setPasswords] = useState("");
  console.log(username, email, passwords);
  const { register } = useAuth();
  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/2 h-full flex flex-col mr-auto justify-center items-center gap-2">
        <div className="flex gap-1">
          <img src="/Vector.jpg"></img>
          <span className="font-semibold">Geld</span>
        </div>
        <h1 className="mt-10 font-semibold">Create Geld account</h1>
        <p>Sign up below to create your Wallet account</p>
        <div className="mt-10 flex flex-col gap-2 ">
          <input
            onChange={(event) => {
              setUsername(event.target.value);
              setuserInfo({ ...userInfo, firstname: event.target.value });
            }}
            type="text"
            placeholder="Name"
            className="w-[384px] h-[48px] border rounded  px-2 bg-slate-50"
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-[384px] h-[48px] border rounded  px-2 bg-slate-50"
          />
          <input
            type="password"
            placeholder="Password"
            value={passwords}
            onChange={(e) => {
              setPasswords(e.target.value);
            }}
            className="w-[384px] h-[48px] border rounded px-2 bg-slate-50"
          />
          <input
            type="password"
            placeholder="RePassword"
            className="w-[384px] h-[48px] border rounded px-2 bg-slate-50"
          />
          <Link href="/selectbase">
            <Button
              className="rounded-full bg-blue-400 w-full "
              onClick={() => register(username, email, passwords)}
            >
              Sign up
            </Button>
          </Link>
        </div>
        <div className="mt-10">
          Don’t have account?
          <Link href="/">
            <span className="text-blue-400 px-2">Log in</span>{" "}
          </Link>
        </div>
      </div>
      <div className="w-1/2 h-full bg-blue-600"></div>
    </div>
  );
}
