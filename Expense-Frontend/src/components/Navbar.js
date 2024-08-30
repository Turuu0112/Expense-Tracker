import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";


export const Navbar = () => {
  return (
    <div className="w-full border py-4">
      <div className=" w-full flex justify-between px-[120px]">
        <div className="flex flex-row text-center gap-3">
          <div>
            <img src="/Vector.png"></img>
          </div>
          <div className="flex gap-2 ml-3">
            <span>Dashboard</span>
            <span className="font-semibold">Record</span>
          </div>
        </div>
        <div className="flex  gap-2">
          <Button className="bg-blue-500 rounded-full">+Record</Button>
          <Avatar>
            <AvatarImage src="/Placeholder.png"></AvatarImage>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};
