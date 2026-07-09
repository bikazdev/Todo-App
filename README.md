# Frontend Mentor - Todo App Solution

This is my solution to the **Todo App** challenge on Frontend Mentor. The project focuses on building a responsive and interactive todo application with theme switching, filtering, and global state management using React and Zustand.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [Features](#features)
  - [Project Structure](#project-structure)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Getting Started](#getting-started)
- [Author](#author)

---

# Overview

## The Challenge

Users should be able to:

- View the optimal layout depending on their device's screen size.
- Add new todos.
- Mark todos as completed.
- Delete todos.
- Filter todos by:
  - All
  - Active
  - Completed
- Clear completed todos.
- Toggle between Light and Dark mode.
- View hover states for interactive elements.

---

## Screenshot

![](./screenshot.jpg)

> Replace the image above with your project screenshot.

---

## Links

- **Solution URL:** https://www.frontendmentor.io/your-solution
- **Live Site:** https://your-live-demo.com

---

# My Process

## Built With

- React 19
- Vite 8
- Zustand
- Tailwind CSS v4
- JavaScript (ES6 Modules)
- React Icons

---

## Features

- ✅ Add new todos
- ✅ Remove todos
- ✅ Toggle completed status
- ✅ Filter todos (All, Active, Completed)
- ✅ Clear completed todos
- ✅ Light/Dark theme toggle
- ✅ Responsive design
- ✅ Global state management using Zustand
- ✅ Clean component-based architecture

---

## Project Structure

```text
src
│
├── assets
│   ├── design
│   ├── fonts
│   └── icons
│
├── components
│   ├── Todo
│   │   ├── TodoItem.jsx
│   │   ├── TodoList.jsx
│   │   └── TodoMain.jsx
│   │
│   ├── Footer.jsx
│   ├── Header.jsx
│   └── Input.jsx
│
├── store
│   └── useTodo.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx

public
│
└── images
    ├── bg-desktop-dark.jpg
    ├── bg-desktop-light.jpg
    ├── bg-mobile-dark.jpg
    ├── bg-mobile-light.jpg
    ├── favicon-32x32.png
    ├── favicon.svg
    ├── icon-check.svg

```

---

## What I Learned

Building this project helped me gain practical experience with several important React concepts.

### Zustand for Global State Management

Instead of prop drilling, I managed the application's state using Zustand. This made the code cleaner and easier to maintain.

```javascript
const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();
```

---

### Filtering Data Dynamically

I learned how to create different views of the same data by filtering based on the selected category.

```javascript
const filteredTodos = todos.filter((todo) => {
  if (isActive === "Active") return !todo.checked;
  if (isActive === "Completed") return todo.checked;
  return true;
});
```

---

### Theme Switching

I implemented a light/dark theme by toggling the `dark` class on the root HTML element.

```javascript
const root = document.documentElement;

if (theme) root.classList.add("dark");
else root.classList.remove("dark");
```

---

### Component-Based Design

Breaking the application into reusable components made the project easier to organize and maintain.

Components include:

- Header
- Footer
- Input
- TodoList
- TodoItem
- TodoMain

---

### Responsive Layout

Using Tailwind CSS allowed me to build a mobile-first responsive layout with minimal custom CSS.

---

## Continued Development

For future improvements, I plan to add:

- Drag and Drop reordering
- Local Storage persistence
- Keyboard accessibility improvements
- Better animations and transitions
- Unit testing
- Edit existing todos
- Custom categories
- Due dates

---

## AI Collaboration

AI tools were used as a learning assistant during development.

They helped with:

- Debugging React components
- Improving code structure
- Understanding Zustand patterns
- Explaining Tailwind CSS utilities
- Reviewing implementation ideas

All implementation decisions, integration, and testing were completed manually.

---

# Getting Started

## Install dependencies

```bash
npm install
```

## Start the development server

```bash
npm run dev
```

## Build for production

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

---

# Author

- GitHub - https://github.com/bikazdev
- Frontend Mentor - https://www.frontendmentor.io/profile/bikazdev
