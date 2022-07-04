// Test -------------------------- Importing the Packages ---------------------------------
import { useState, useContext } from "react";

// Test -------------------------- Importing the styles / other components ----------------
import classes from "./InputField.module.css";
import TodosContext from "../../context/TodosContext";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ---------------------------------
const InputField = () => {
  // For extracting the name from the <input> in the Todo
  const [todoName, setTodoName] = useState<string>("");

  // Context for Todos used for ID
  const todosCtx = useContext(TodosContext);

  // For extracting the TODO written on the <input>
  const inputTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoName(event.target.value);
  };

  // Function for Handling Form Submission
  const formSubmitHandler = (
    event: React.MouseEvent<HTMLFormElement, MouseEvent>
  ) => {
    event.preventDefault();
    todosCtx.addTodo({
      id: todosCtx.todoList?.length || 0,
      todo: todoName,
      isDone: false,
    });
    console.log(todosCtx.todoList);
    setTodoName("");
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes["input"]}>
      <input
        type="text"
        placeholder="Enter a Task"
        className={classes["input-box"]}
        onChange={inputTodo}
        value={todoName}
      ></input>
      <button type="submit" className={classes["input-submit"]}>
        Go
      </button>
    </form>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default InputField;
