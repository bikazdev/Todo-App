import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],
      inputTodo: "",
      isActive: "All",
      setInputTodo: (value) => set({ inputTodo: value }),
      clearInput: () => set({ inputTodo: "" }),
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

      reorderTodo: (dragId, dropId) =>
        set((state) => {
          const copyTodo = [...state.todos];
          const dragIndex = copyTodo.findIndex((todo) => todo.id === dragId);
          const dropIndex = copyTodo.findIndex((todo) => todo.id === dropId);

          if (dragIndex === -1 || dropIndex === -1) {
            return state;
          }

          const dragged = copyTodo.splice(dragIndex, 1)[0];
          copyTodo.splice(dropIndex, 0, dragged);

          return { todos: copyTodo };
        }),
    }),
    {
      name: "app-storage",
      partialize: (state) => ({
        todos: state.todos,
        theme: state.theme,
      }),
    },
  ),
);
