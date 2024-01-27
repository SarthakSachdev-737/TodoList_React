import { useContext } from "react";
import { TodoListContext } from "../store/TodoListContext";


function TodoItem({TodoTask , TodoDate }){

  const {HandleDeleteButton} = useContext(TodoListContext);

  return (
  <div className="row s-row" >
   <div className="col-6 s-col-6">{TodoTask}</div>
   <div className="col-4 s-col-4">{TodoDate}</div>
   <div className="col-2 s-col-2"><button type="button" className="btn btn-danger" onClick={()=>HandleDeleteButton(TodoTask)}>Delete</button></div>
  </div>
 
  )
 }
 
 export default TodoItem;