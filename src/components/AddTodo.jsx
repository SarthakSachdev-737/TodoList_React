import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { useContext } from "react";
import { TodoListContext } from "../store/TodoListContext";


function AddTodo() {
  let TodoTaskElement = useRef();
  let TodoDateElement = useRef();
  const  {HandleAddButton} = useContext(TodoListContext);


  let ClickAddButton = (event) => {
    event.preventDefault();
    let TodoTask = TodoTaskElement.current.value;
    let TodoDate = TodoDateElement.current.value;
    HandleAddButton(TodoTask, TodoDate);
    TodoTaskElement.current.value="";
    TodoDateElement.current.value="";
  };
  return (
    <form className="row s-row" onSubmit={ClickAddButton}>
      <div className="col-6 s-col-6">
        <input
          className={styles.AddTodoInput}
          type="text"
          placeholder="Enter your Todo..."
          ref={TodoTaskElement}
        />
      </div>
      <div className="col-4 s-col-4">
        <input
          className={styles.AddTodoDate}
          type="date"
          ref={TodoDateElement}
        />
      </div>
      <div className="col-2 s-col-2">
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
