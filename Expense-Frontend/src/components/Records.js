"use client";

import { CheckboxWithText } from "./CheckboxWithText";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SelectScrollable, Writehere } from "./select";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { Categories } from "./Category";

export const Records = () => {
  const [record, setRecord] = useState([]);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [pay, setPay] = useState("");
  const [time, setTime] = useState("");
  const [selectedType, setSelectedType] = useState("Expense");

  const createRecord = async () => {
    const newRecord = {
      note,
      category,
      amount,
      date,
      pay,
      time,
      type: selectedType,
    };

    await api.post("/records", newRecord, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setRecord([...record, newRecord]);
  };

  useEffect(() => {}, []);

  return (
    <div className="h-fit border ml-[120px] w-[282px] py-3">
      <div className="flex flex-col gap-3 w-[282px] border">
        <h1 className="font-semibold">Records</h1>
        <Dialog>
          <DialogTrigger className="px-3">
            <div className="bg-blue-600 rounded-full w-full text-white">
              + Add
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <h1 className="border-b pb-2"> Add Record</h1>
              <DialogTitle></DialogTitle>
              <DialogDescription>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-3">
                    <div className="relative">
                      <div className="flex items-center rounded-full w-fit h-fit bg-slate-200 relative">
                        <div
                          className={`absolute bottom-0 left-0 h-full transition-transform duration-300 ${
                            selectedType === "Expense"
                              ? "w-1/2 translate-x-0"
                              : "w-1/2 translate-x-full"
                          }`}
                        ></div>
                        <Button
                          className={`rounded-full px-4 ${
                            selectedType === "Expense"
                              ? "bg-blue-600 text-white"
                              : "bg-transparent"
                          }`}
                          onClick={() => setSelectedType("Expense")}
                        >
                          Expense
                        </Button>
                        <Button
                          className={`rounded-full px-4 ${
                            selectedType === "Income"
                              ? "bg-green-500 text-white"
                              : "bg-transparent"
                          }`}
                          onClick={() => setSelectedType("Income")}
                        >
                          Income
                        </Button>
                      </div>
                    </div>
                    <div className="w-fit h-fit flex flex-col border pt-2 px-3 gap-3 rounded pb-2 bg-slate-50">
                      Amount
                      <input
                        type="number"
                        className="p-2 bg-slate-50"
                        placeholder="₮ 000.0"
                        onChange={(event) => setAmount(event.target.value)}
                      />
                    </div>
                    <label>Category</label>
                    <SelectScrollable
                      value={category}
                      onchange={(value) => setCategory(value)}
                    />
                    <div className="flex gap-1">
                      <div>
                        <label>Date</label>
                        <input
                          onChange={(event) => setDate(event.target.value)}
                          type="date"
                          className="w-fit h-fit p-2 bg-slate-50 rounded"
                        />
                      </div>
                      <div>
                        <label>Time</label>
                        <input
                          value={time}
                          onChange={(event) => setTime(event.target.value)}
                          type="time"
                          className="w-fit h-fit p-2 bg-slate-50 rounded"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col gap-4">
                      <label>Payee</label>
                      <Writehere
                        value={pay}
                        onchange={(value) => setPay(value)}
                        className="w-fit h-fit p-2 bg-slate-50 rounded"
                      />
                      <label>Note</label>
                      <textarea
                        value={note}
                        onChange={(event) => setNote(event.target.value)}
                        placeholder="Write here"
                        className="w-[250px] h-[100px] bg-slate-50 rounded p-1"
                      />
                    </div>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
            <Button className="bg-green-600" onClick={createRecord}>
              Add Record
            </Button>
          </DialogContent>
        </Dialog>

        <div>
          <input
            type="search"
            placeholder="Search"
            className="p-2 border rounded w-full bg-slate-50"
          />
        </div>
        <CheckboxWithText />
      </div>
    </div>
  );
};
