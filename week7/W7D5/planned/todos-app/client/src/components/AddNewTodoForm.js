import { useState } from "react";
import { TodosApi } from "./utils";

export function AddNewTodoForm({ setTodos }) {
  const [newTodo, setNewTodo] = useState({ name: "", done: false });

  const handleInput = (event) => {
    setNewTodo({ ...newTodo, [event.target.name]: event.target.value });
  };

  const addNewTodoToDb = () => {
    if (newTodo.name.length === 0) {
      return alert("Please input a name for the todo you want to create!");
    }
    TodosApi.create(newTodo).then((data) => {
      console.log(data);
      setTodos((oldTodos) => [...oldTodos, data.todo]);
    });
  };

  return (
    <div>
      <h1>Create New Todo:</h1>
      <input name="name" value={newTodo.name} onChange={handleInput} />
      <button onClick={addNewTodoToDb}>Add new Todo</button>
    </div>
  );
}
