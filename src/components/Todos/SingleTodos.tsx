// Test -------------------------- Importing the Packages ---------------------------------
import { useContext, useRef, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";

// Test -------------------------- Importing the styles / other components ----------------
import classes from "./todos.module.css";
import TodosContext from "../../context/TodosContext";

// Test -------------------------- Structure of Props ----------------------------------
import { Todo } from "../../types/Todos.type";

type SingleTodosProps = {
  key: number;
  singleTodo: Todo;
};

// Test -------------------------- The current component ----------------------------------
const SingleTodos = (props: SingleTodosProps) => {
  const [edit, setEdit] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const todosCtx = useContext(TodosContext);
  const spanRef = useRef<HTMLSpanElement>(null);

  const removeTodo = () => {
    todosCtx.removeTodo(props.singleTodo);
  };

  const doneTodo = () => {
    todosCtx.doneTodo(props.singleTodo);
  };

  const editTodo = () => {
    setEdit(true);
  };

  const doneEdit = (event: React.FormEvent) => {
    event.preventDefault();
    setEdit(false);
    todosCtx.updateTodo({
      todo: newTodo,
      id: props.singleTodo.id,
      isDone: props.singleTodo.isDone,
    });
  };

  const enterNewTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  return (
    <form className={classes["todos-single"]} onSubmit={doneEdit}>
      {edit ? (
        <input onChange={enterNewTodo}></input>
      ) : (
        <span
          className={`${classes["todos-single-text"]} ${
            props.singleTodo.isDone && classes["done"]
          }`}
          ref={spanRef}
        >
          {props.singleTodo.todo}
        </span>
      )}

      <div>
        <span className={classes["icon"]}>
          <AiFillEdit onClick={editTodo}></AiFillEdit>
        </span>

        <span className={classes["icon"]}>
          <AiFillDelete onClick={removeTodo}></AiFillDelete>
        </span>

        <span className={classes["icon"]}>
          <MdOutlineDone onClick={doneTodo}></MdOutlineDone>
        </span>
      </div>
    </form>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default SingleTodos;
