import iconCross from "../../assets/icons/icon-cross.svg";
import { motion } from "motion/react";
const TodoItem = ({
  desc,
  checked,
  onRemoveTodo,
  onToggleTodo,
  handleDragStart,
  handleDrop,
  handleTouchStart,
  handleTouchEnd,
  dataId,
}) => {
  return (
    <motion.li
      layout
      draggable
      className={`w-full flex justify-between items-center pr-5 h-16 border-b dark:border-slate-700/50 border-zinc-300 text-slate-500 text-sm `}
      onDragStart={handleDragStart}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}

      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      data-id={dataId}
    >
      <button
        className={`w-9 h-14 rounded-l-md relative after:w-7 after:h-7 lg:after:h-5.5 lg:after:w-5.5 lg:after:top-4 lg:after:left-5 after:absolute after:left-3.5 after:top-3 after:flex after:justify-center after:items-center 
          after:dark:border-gray-700 after:border-slate-300 after:transition-all after:duration-300 after:rounded-full cursor-pointer 
          
          ${
            checked
              ? "after:bg-linear-to-br after:from-cyan-500 after:to-fuchsia-500 after:border-transparent after:content-[url('../icon-check.svg')]"
              : "after:bg-transparent after:border-[.1rem] hover:after:border-blue-500"
          }`}

        onClick={onToggleTodo}
      />

      <p
        className={`text-left w-full mx-8 transition-all duration-150  ${checked ? "line-through text-gray-500 dark:text-gray-700" : "text-gray-700 dark:text-gray-500"} select-none`}
      >
        {desc}
      </p>
      <img
        src={iconCross}
        alt="icon-cross"
        className="cursor-pointer hover:text-black"
        onClick={onRemoveTodo}
      />
    </motion.li>
  );
};

export default TodoItem;
