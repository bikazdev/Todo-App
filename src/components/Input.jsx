import { useTodoStore } from "../store/useTodo";

const Input = ({ onAddTodo }) => {
  const { inputTodo, setInputTodo } = useTodoStore();

  return (
    <>
      <button
        className="w-9 h-14 dark:bg-slate-800 bg-zinc-50 rounded-l-md relative after:w-7 after:h-7 lg:after:w-5.5 lg:after:h-5.5 after:content-[''] after:border-[.1rem]
          after:dark:border-gray-700 after:border-slate-300 after:rounded-full after:absolute after:left-3.5 after:top-3 lg:after:top-4 lg:after:left-5 cursor-pointer"

        onClick={onAddTodo}
      />

      <input
        type="text"
        className="w-full dark:bg-slate-800 bg-zinc-50 pl-8 h-14 rounded-r-md outline-none dark:placeholder:text-slate-600 dark:text-zinc-400 text-zinc-600"
        placeholder="Create a new todo"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
    </>
  );
};

export default Input;
