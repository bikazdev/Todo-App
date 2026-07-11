import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodoStore = create(
  persist(
    (set) => ({
      todos: [
        {
          id: 1,
          description: "Complete online JavaScript course",
          checked: true,
        },
        {
          id: 2,
          description: "Jog around the park 3x",
          checked: false,
        },
        {
          id: 3,
          description: "10 minutes meditation",
          checked: false,
        },
        {
          id: 4,
          description: "Read for 1 hour",
          checked: false,
        },
        {
          id: 5,
          description: "Pick up groceries",
          checked: false,
        },
        {
          id: 6,
          description: "Complete Todo App on Frontend Mentor",
          checked: false,
        },
      ],
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
      clearTodo: () =>
        set((state) => ({
          todos: state.todos.filter((todo) => !todo.checked),
        })),
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
