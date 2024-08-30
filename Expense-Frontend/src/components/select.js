"use client";

import { FaPiggyBank } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";

import { IconName } from "react-icons/fa6";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdHome } from "react-icons/md";
import { FaRegIdCard } from "react-icons/fa6";

export function SelectScrollable({ value, onchange }) {
  const selectIcon = [
    {
      icon: <FaHouse />,
      value: "FaHouse",
    },
    {
      icon: <FaRegIdCard />,
      value: "FaregIdCard",
    },
  ];
  return (
    <Select value={value} onValueChange={onchange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Name" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="Home ">
            <MdHome /> Home{" "}
          </SelectItem>
          <SelectItem value="Gift">Gift</SelectItem>
          <SelectItem value="Food">Drink</SelectItem>
          <SelectItem value="Taxi"> </SelectItem>
          <SelectItem value="Drink">Life & Entertaiment</SelectItem>
          <SelectItem value="Shopping">Communication,PC</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export function SelectScroll({ value, onchange }) {
  return (
    <Select value={value} onValueChange={onchange}>
      <SelectTrigger className="w-[84px]">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent >
        <SelectGroup className="flex flex-col h-fit" >
          <div className="grid grid-cols-6 grid-rows-5 w-full">
          <SelectItem value="FaHouse">
            <FaHouse />
          </SelectItem>
          <SelectItem value="Shopping">
            <FaRegIdCard />
          </SelectItem>
          <SelectItem value="Shopping">
            <FaRegIdCard />
          </SelectItem>
          <SelectItem value="Shopping">
            <FaRegIdCard />
          </SelectItem>
          </div>
          <div className="flex border-t-gray-300 gap-0">
          <SelectItem value="#FF4545">
            <div
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: "red",
                borderRadius: "50%",
              }}
            ></div>
          </SelectItem>
          <SelectItem value="#16A34A">
            <div
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: "green",
                borderRadius: "50%",
              }}
            ></div>
          </SelectItem>
          <SelectItem value="#0166FF">
            <div
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: "blue",
                borderRadius: "50%",
              }}
            ></div>
          </SelectItem>
          <SelectItem value="#F9D100">
            <div
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: "yellow",
                borderRadius: "50%",
              }}
            ></div>
          </SelectItem>
          <SelectItem value="#FF7B01">
            <div
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: "orange",
                borderRadius: "50%",
              }}
            ></div>
          </SelectItem>
          <SelectItem value="#AE01FF">
            <div
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: "indigo",
                borderRadius: "50%",
              }}
            ></div>
          </SelectItem>
          <SelectItem value="#41CC00">
            <div
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: "#41CC00",
                borderRadius: "50%",
              }}
            ></div>
          </SelectItem>
          </div>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function Writehere({ value, onchange }) {
  return (
    <Select value={value} onValueChange={onchange}>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Write here" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Write</SelectLabel>
          <SelectItem value="Card">
            {" "}
            Card
            <FaCcMastercard className="text-yellow-400" />
          </SelectItem>
          <SelectItem value="Bank app">
            Bank App
            <FaPiggyBank className="text-green-400" />
          </SelectItem>
          <SelectItem value="paypal">
            PayPal
            <FaCcPaypal className="text-blue-400" />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export function Base({ value, onchange }) {
  return (
    <Select value={value} onValueChange={onchange}>
      <SelectTrigger className="w-[384px] h-[64px] bg-slate-50">
        <SelectValue placeholder="Select-Base" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel></SelectLabel>
          <SelectItem value="MNT-Mongolian Tugrik">
            MNT-Mongolian Tugrik
          </SelectItem>
          <SelectItem value="USA-Usa Dollar">USA-Usa Dollar</SelectItem>
          <SelectItem value="JPN-Japanese-Yen">JPN-Japanese-Yen</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
