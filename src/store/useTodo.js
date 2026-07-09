import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [
    {
      id: 0,
      description: "Lorem ipsum dolor sit amet ",
      checked: false,
    },
    { id: 1, description: "Lorem ipsum dolor sit amet", checked: true },
    { id: 2, description: "Lorem ipsum dolor sit amet", checked: false },
    { id: 3, description: "Lorem ipsum dolor sit amet", checked: true },
  ],
  inputTodo: "",
  setInputTodo: (value) => set({ inputTodo: value }),
  clearInput: () => set({ inputTodo: "" }),
  isActive: "All",
  setCategory: (value) => set({ isActive: value }),
  addTodo: (value) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: Date.now(), description: value, checked: false },
      ],
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    })),
  clearTodo: () => set(() => ({ todos: [] })),
  theme: false,
  toggleTheme: () => set((state) => ({ theme: !state.theme })),
}));
