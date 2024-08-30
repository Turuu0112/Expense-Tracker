import { Checkbox } from "./ui/checkbox";

export function CheckboxWithText() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-semibold">Types</h1>
      <div className=" flex flex-col gap-3">
        <div className="items-top flex space-x-2  ">
          <Checkbox id="terms1" className="rounded-full"  />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              All
            </label>
          </div>
        </div>
        <div className="items-top flex  space-x-2 ">
          <Checkbox id="terms1"  className="rounded-full"/>
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Income
            </label>
          </div>
        </div>
        <div className="items-top flex  space-x-2 ">
          <Checkbox id="terms1" className="rounded-full" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Expence
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
