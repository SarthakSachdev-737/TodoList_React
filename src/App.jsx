import Heading from "./components/heading";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css";
import TodoListContextProvider from "./store/TodoListContext";

function App() {
  return (
    <TodoListContextProvider>
      <center>
        <Heading />
        <div className="container s-container">
          <AddTodo />
          <WelcomeMsg />
          <TodoItems></TodoItems>
        </div>
      </center>
    </TodoListContextProvider>
  );
}

export default App;
