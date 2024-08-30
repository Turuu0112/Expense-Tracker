"use client";

import { MdOutlineRestaurant } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";

import { Checkbox } from "./ui/checkbox";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

export const CheckTable = () => {
  const [record, setRecord] = useState([]);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setdate] = useState("");
  const [note, setNote] = useState("");
  const [time, settime] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(amount, record, category, date, note, time, color);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get("/records", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setRecord(response.data);
      } catch (err) {
        setError("Failed to axios records");
      } finally {
        setLoading(false);
      }
    };
    

    getData()
    getData();
  }, []);
  if (record.length === 0) return <p>No records found</p>;

  

  return (
    <div className="flex flex-col gap-4 ">
      {record.map((record, item) => (
        <div
          key={item.id}
          className="flex border items-center gap-3 justify-between rounded"
        >
          <div className="flex border items-center gap-16 p-2">
            <Checkbox />
            {record.category}
            <div className="flex flex-col items-center text-[12px] border px-2">
              <div className="text-[8px]">{record.date}</div>
              <div className="text-[8px]">{record.time}</div>
            </div>

            <div>{record.pay}</div>
            <div>{record.note}</div>
            <div>{record.color}</div>
          </div>

          <div className="px-3">-{record.amount}₮</div>
        </div>
      ))}
    </div>
  );
};
