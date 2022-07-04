// Test -------------------------- Importing the Packages ---------------------------------
import { useContext } from "react";

// Test -------------------------- Importing the styles / other components ----------------
import classes from "./todos.module.css";
import TodosContext from "../../context/TodosContext";
import SingleTodos from "./SingleTodos";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const TodoList = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes["todos"]}>
      {todosCtx.todoList?.map((todoElement) => (
        <SingleTodos key={todoElement.id} singleTodo={todoElement}></SingleTodos>
      ))}
    </ul>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default TodoList;
