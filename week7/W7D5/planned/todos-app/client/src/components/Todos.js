import "./Todos.css";

import { useEffect, useState } from "react";
import { TodosFilter } from "./TodosFilter";
import { AddNewTodoForm } from "./AddNewTodoForm";
import { TodoList } from "./TodoList";
import { DeleteAllButtons } from "./DeleteAllButtons";
import { TodosApi } from "./utils";

function Todos() {
  const [filters, setFilters] = useState({ done: "both", name: "" });
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    TodosApi.getAll().then((data) => {
      console.log("Fetched from db", data);
      setTodos(data.todos);
    });
  }, []);

  const deleteSingleTodo = (id) => () => {
    TodosApi.delete(id).then((message) => {
      console.log(message);
      setTodos((oldTodos) => oldTodos.filter((todo) => id !== todo._id));
    });
  };

  const changeFilters = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <TodosFilter filters={filters} changeFilters={changeFilters} />
      <AddNewTodoForm setTodos={setTodos} />
      <TodoList
        todos={todos}
        filters={filters}
        setTodos={setTodos}
        deleteSingleTodo={deleteSingleTodo}
      />
      <DeleteAllButtons todos={todos} deleteSingleTodo={deleteSingleTodo} />
    </div>
  );
}

export default Todos;
