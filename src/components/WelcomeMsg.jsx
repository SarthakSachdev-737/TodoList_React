import { useContext } from "react";
import { TodoListContext } from "../store/TodoListContext";
import styles from "./WelcomeMsg.module.css";

function WelcomeMsg(){

  const {TodoList} = useContext(TodoListContext);

  return(
    TodoList.length === 0 && <h3 className={styles.WelMsg}>Enjoy your Day</h3>
  )
}

export default WelcomeMsg;