import { IoEye } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";

export const AddCategories = () => {
  const arr = [
    {
      svg: <IoEye />,
      name: "Food & Drink",
      logo: <IoMdArrowDropright />,
    },
    {
      svg: <IoEye />,
      name: "Shopping",
      logo: <IoMdArrowDropright />,
    },
    {
      svg: <IoEye />,
      name: "Housing",
      logo: <IoMdArrowDropright />,
    },
    {
      svg: <IoEye />,
      name: "Transportation",
      logo: <IoMdArrowDropright />,
    },
    {
      svg: <IoEye />,
      name: "Vehicle",
      logo: <IoMdArrowDropright />,
    },
    {
      svg: <IoEye />,
      name: "Life & Entertaiment",
      logo: <IoMdArrowDropright />,
    },
    {
      svg: <IoEye />,
      name: "Communication, PC",
      logo: <IoMdArrowDropright />,
    },
    {
      svg: <IoEye />,
      name: "Financial expence",
      logo: <IoMdArrowDropright />,
    },
    {
      svg: <IoEye />,
      name: "Investment",
      logo: <IoMdArrowDropright />,
    },
    {
      svg: <IoEye />,
      name: "Income",
      logo: <IoMdArrowDropright />,
    },
    {
      svg: <IoEye />,
      name: "Others",
      logo: <IoMdArrowDropright />,
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {arr.map((item, index) => (
        <div
          key={index}
          className="flex border items-center gap-3 justify-between"
        >
          <div className="flex border items-center gap-1">
            {item.svg}
            <p>{item.name}</p>
          </div>

          <div>{item.logo}</div>
        </div>
      ))}
    </div>
  );
};
