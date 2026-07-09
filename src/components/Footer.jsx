import { useTodoStore } from "../store/useTodo";

const Footer = () => {
  const { todos, isActive, setCategory } = useTodoStore();

  return (
    <>
      <div
        className={`h-14 flex justify-center items-center gap-10  mx-4 mt-5 dark:bg-slate-800 bg-zinc-50 rounded-md relative text-slate-600 select-none shadow-xl lg:hidden`}
      >
        {["All", "Active", "Completed"].map((item) => (
          <button
            key={item}
            className={`transition-all duration-150 ${isActive === item && "text-blue-500"} cursor-pointer`}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <span className="flex text-center pt-10 justify-center text-slate-700 select-none">
        Drag and drop to render list
      </span>
    </>
  );
};

export default Footer;
