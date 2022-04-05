import axios from "axios";
import { useState } from "react";
import { API_BASE_URL } from "../../consts";

export function AddNewTodo({ setAllTodos }) {
  const [newTodo, setNewTodo] = useState({ name: "", done: false });
  const handleFormInput = (event) => {
    setNewTodo({ ...newTodo, [event.target.name]: event.target.value });
  };

  const handleAddNewTodo = async () => {
    if (newTodo.name.length === 0) {
      alert("Please enter a name for the todo!");
      return;
    }

    try {
      const { data } = await axios.post(`${API_BASE_URL}/todos`, newTodo);
      console.log(data);
      setAllTodos((oldTodos) => {
        return [...oldTodos, data.todo];
      });
    } catch (error) {
      console.error("Error in updating the todo list on the server!", error);
    }
  };

  return (
    <div>
      <input name="name" value={newTodo.name} onChange={handleFormInput} />
      <button onClick={handleAddNewTodo}>Add New Todo!</button>
    </div>
  );
}
