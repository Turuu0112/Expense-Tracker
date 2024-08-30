"use client";

import { IoEye } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";

import { Amountrange } from "./Amount";
import { Slider } from "./ui/slider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SelectScroll } from "./select";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { api } from "@/lib/axios";

export const Categories = () => {
  const [category, setCategory] = useState([]);
  const [logo, setlogo] = useState("");
  const [name, setname] = useState("");
  const myRef = useRef(null);
  console.log(logo, name);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get("/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setCategory(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  const createCategories = async () => {
    const newCategory = {
      logo,
      name,
    };

    try {
      await api.post("/database", newCategory, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCategory([...category, newCategory]);
    } catch (e) {
      console.error(e);
    }
  };
  const deleteCategory = async () => {
    try {
      await api.delete(`/database/${category.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCategory(category.filter((cat) => cat.id !== category.id));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div
      className="h-fit border ml-[120px] w-[282px]"
      ref={myRef}
      id="unique-id"
    >
      <div className="flex flex-col gap-3  w-[282px] ">
        <div className="flex justify-between py-3">
          <h1 className="font-semibold">Category</h1>
          <button className="text-gray-400" onClick={() => setCategory([])}>
            clear
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {category.map((category, index) => (
            <div
              key={index}
              className="flex border items-center gap-3 justify-between"
            >
              <div className="flex border items-center gap-1">
                <IoEye />
                <p>{category.name}</p>
              </div>

              <div>
                <IoMdArrowDropright />
              </div>
            </div>
          ))}
        </div>
        <Dialog>
          <DialogTrigger className="px-3">
            <div className="bg-blue-600 rounded-full  text-white">
              + Add Category
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <h1 className="border-b pb-2"> Add Category</h1>
              <DialogTitle></DialogTitle>
              <DialogDescription className="flex justify-center gap-4 ">
                <SelectScroll
                  onchange={(value) => {
                    setlogo(value);
                  }}
                />
                <input
                  value={name}
                  className="border bg-slate-50 p-1"
                  onChange={(event) => setname(event.target.value)}
                />
              </DialogDescription>
            </DialogHeader>
            <Button className="bg-green-600" onClick={createCategories}>
              {" "}
              Add{" "}
            </Button>
          </DialogContent>
        </Dialog>
        <Amountrange />
        <Slider defaultValue={[0]} max={100} step={1} />
      </div>
    </div>
  );
};
