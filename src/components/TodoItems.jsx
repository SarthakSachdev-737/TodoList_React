import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoListContext } from "../store/TodoListContext";


function TodoItems(){

  const {TodoList} = useContext(TodoListContext);

  return (
    <>
      {TodoList.map((Titem) => (
    <TodoItem TodoTask = {Titem.Task} TodoDate = {Titem.Date}  key={Titem.Task}/>
  ))}
    </>
  )

}

export default TodoItems;