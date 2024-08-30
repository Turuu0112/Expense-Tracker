
export const Amountrange = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h1 className="font-semibold">Amount Range</h1>
      <div className="flex gap-3 w-full justify-center ">
        <input className="p-4 w-[114px]  h-[48px] border rounded"></input>
        <input
          type="number"
          className="p-4 w-[114px] h-[48px] border rounded"
        ></input>
      </div>
    </div>
  );
};
