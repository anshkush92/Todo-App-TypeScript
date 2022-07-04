// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";

// Test -------------------------- Importing the styles / other components ----------------
import { Todo } from "../types/Todos.type";

// Test -------------------------- Structure of Props ----------------------------------
type Context = {
  todoList: Todo[] | null;
  addTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  doneTodo: (todo: Todo) => void;
};

// Test -------------------------- The current component ----------------------------------
const TodosContext = React.createContext({} as Context);

// Test -------------------------- Exporting the current component ------------------------
export default TodosContext;
