import "./App.css";
import Heading from "./components/Heading/Heading";
import InputField from "./components/InputField/InputField";
import TodoList from "./components/Todos/TodoList";

const App = () => {
  return (
    <div className="App">
      <Heading className="heading">Taskify</Heading>
      <InputField></InputField>
      <TodoList></TodoList>
    </div>
  );
};

export default App;
