import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/Todo/TodoList";
import TodoMain from "./components/Todo/TodoMain";

const App = () => {
  return (
    <div
      className="w-full z-50 dark:bg-gray-900 bg-zinc-50 dark:bg-[url('./images/bg-mobile-dark.jpg')] bg-[url('./images/bg-mobile-light.jpg')] bg-size-[100%_250px] lg:bg-size-[100%_330px] bg-no-repeat min-h-screen overflow-y-auto pb-10 lg:bg-[url('./images/bg-desktop-light.jpg')] lg:dark:bg-[url('./images/bg-desktop-dark.jpg')] transition-colors 
  duration-500 
  ease-in-out"
    >
      <Header />
      <TodoMain>
        <TodoList />
      </TodoMain>
      <Footer />
    </div>
  );
};

export default App;
