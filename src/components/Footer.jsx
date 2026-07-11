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
      <span className="text-xs dark:text-white text-slate-800 mx-5 absolute left-0 bottom-5 ">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/solutions/todo-app--CMwl6I1z_"
          className="text-blue-400 hover:text-blue-200"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/bikazdev"
          className="text-fuchsia-400 hover:text-fuchsia-200"
        >
          bikazDev
        </a>
        .
      </span>
    </>
  );
};

export default Footer;
