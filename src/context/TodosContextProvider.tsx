// Test -------------------------- Importing the Packages ---------------------------------
import { useState } from "react";

// Test -------------------------- Importing the styles / other components ----------------
import TodosContext from "./TodosContext";
import { Todo } from "../types/Todos.type";

// Test -------------------------- Structure of Props ----------------------------------
type TodosContextProviderProps = {
  children: React.ReactNode;
};

// Test -------------------------- The current component ----------------------------------
const TodosContextProvider = ({ children }: TodosContextProviderProps) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodoList([...todoList, todo]);
  };

  const removeTodo = (todo: Todo) => {
    const { id } = todo;
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const updateTodo = (todo: Todo) => {
    const { id } = todo;
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    const newTodo = { todo: todo.todo, id: todo.id || 0, isDone: todo.isDone };

    setTodoList([...newTodoList, newTodo]);
  };

  const doneTodo = (todo: Todo) => {
    const { id } = todo;
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    const newTodo = { todo: todo.todo, id: todo.id || 0, isDone: true };

    setTodoList([...newTodoList, newTodo]);
  };

  return (
    <TodosContext.Provider
      value={{ todoList, addTodo, removeTodo, updateTodo, doneTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;

// Test -------------------------- Exporting the current component ------------------------
