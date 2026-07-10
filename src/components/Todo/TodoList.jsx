import { useState } from "react";
import { useTodoStore } from "../../store/useTodo";
import Input from "../Input";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const {
    todos,
    addTodo,
    clearInput,
    inputTodo,
    removeTodo,
    toggleTodo,
    clearTodo,
    isActive,
    setCategory,
    reorderTodo,
  } = useTodoStore();

  const [dragIndex, setDragIndex] = useState(null);
  const [dragId, setDragId] = useState(null);

  const handleTouchStart = (id) => {
    setDragId(id);
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);

    const li = element.closest("[data-id]");

    if (!li) return;

    const dropId = Number(element.dataset.id);

    reorderTodo(dragId, dropId);

    setDragId(null);
  };

  const handleAddTodo = (e) => {
    if (e) e.preventDefault();
    if (!inputTodo.trim()) return;
    addTodo(inputTodo);
    clearInput();
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (isActive === "Active") return !todo.checked;
    if (isActive === "Completed") return todo.checked;
    return true;
  });

  const handleDrop = (dragIndex, index) => {
    reorderTodo(dragIndex, index);
    setDragIndex(null);
  };

  return (
    <div className="flex flex-col lg:items-center transition-all">
      <form
        className="flex justify-center mx-4 lg:mx-auto lg:w-2/4 xl:w-3/8 transition-all duration-100"
        onSubmit={handleAddTodo}
      >
        <Input onAddTodo={handleAddTodo} />
      </form>

      <ul className="transition-all duration-100 mt-5 mx-4 lg:w-2/4 xl:w-3/8 shadow-[0_6rem_6rem_rgba(0,0,0,0.5)] dark:bg-slate-800 bg-zinc-50 rounded-t-md ">
        {filteredTodos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            dataId={todo.id}
            desc={todo.description}
            checked={todo.checked}
            onRemoveTodo={() => removeTodo(todo.id)}
            onToggleTodo={() => toggleTodo(todo.id)}
            handleDragStart={() => setDragIndex(todo.id)}
            handleDrop={() => handleDrop(dragIndex, todo.id)}
            handleTouchStart={() => handleTouchStart(todo.id)}
            handleTouchEnd={(e) => handleTouchEnd(e)}
          />
        ))}
      </ul>
      <div
        className={`h-16 dark:bg-slate-800 bg-zinc-50 mx-4 flex justify-between items-center px-5 font-bold lg:gap-5  rounded-b-md dark:text-slate-600 text-zinc-400 text-sm z-10 select-none lg:w-2/4 xl:w-3/8 transition-all duration-100 ${!filteredTodos.length && "rounded-md shadow-xl"}`}
      >
        <span>{filteredTodos.length} items left</span>
        <div className="hidden lg:flex lg:gap-5">
          {["All", "Active", "Completed"].map((item) => (
            <button
              key={item}
              className={`transition-all flex duration-150 ${isActive === item && "text-blue-500"} cursor-pointer hidden lg:block`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <button
          onClick={clearTodo}
          className="active:text-blue-500 transition-colors duration-100 cursor-pointer"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoList;
