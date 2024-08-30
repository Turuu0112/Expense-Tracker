import { Menu } from "./Navigationmenu";
import { Pagi, Pagination } from "./Pagination";

export const Menubar= () => {
  return (
    <div className="flex justify-between  h-fit border">
      <Pagi />
      <Menu />
    </div>
  );
};
