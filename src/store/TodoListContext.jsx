import { useReducer , createContext } from "react";

export const TodoListContext = createContext(
  {
    TodoList : [],
    HandleAddButton : ()=>{},
    HandleDeleteButton : ()=>{}
  }
);

const TodoListReducer = (currentTodoList, action) => {
  let newTodoList = currentTodoList;
  if (action.type === "ADD_ITEM") {
    newTodoList = [...currentTodoList, action.payload];
  } else if (action.type === "DELETE_ITEM") {
    newTodoList = currentTodoList.filter(
      (Titem) => Titem.Task !== action.payload
    );
  }
  return (newTodoList);
};



function TodoListContextProvider({ children }) {
  let [TodoList, dispatchTodoList] = useReducer(TodoListReducer, []);

  let HandleAddButton = (TTask, TDate) => {
    let action = {
      type: "ADD_ITEM",
      payload: { Task: TTask, Date: TDate },
    };
    dispatchTodoList(action);
  };

  let HandleDeleteButton = (TTask) => {
    let action = {
      type: "DELETE_ITEM",
      payload: TTask,
    };
    dispatchTodoList(action);
  };

  return (
    <TodoListContext.Provider
      value={{TodoList,
         HandleAddButton, 
         HandleDeleteButton}}
    >
      {children}
    </TodoListContext.Provider>
  );
}

export default TodoListContextProvider;
