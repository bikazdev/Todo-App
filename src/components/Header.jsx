import sunIcon from "../assets/icons/icon-sun.svg";
import moonIcon from "../assets/icons/icon-moon.svg";
import { useTodoStore } from "../store/useTodo";
import { useEffect } from "react";

const Header = () => {
  const { theme, toggleTheme } = useTodoStore();
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  return (
    <header
      className={`w-full h-34 flex justify-between items-center item px-6 lg:mt-8 lg:w-2/4 xl:w-3/8 lg:mx-auto lg:p-0 transition-all duration-100`}
    >
      <h1 className="text-zinc-50 text-4xl font-bold">T O D O</h1>
      <button onClick={toggleTheme} className="cursor-pointer">
        {theme ? (
          <img src={sunIcon} alt="sun-icon" className="w-7 h-7" />
        ) : (
          <img src={moonIcon} alt="sun-icon" className="w-7 h-7" />
        )}
      </button>
    </header>
  );
};

export default Header;
