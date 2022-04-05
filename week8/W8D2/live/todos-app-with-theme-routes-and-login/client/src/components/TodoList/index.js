import { useContext, useEffect, useState } from "react";
import { API_BASE_URL } from "../../consts";
import { SingleTodo } from "./Todo";
import { AddNewTodo } from "./AddNewTodo";
import { FilterForm } from "./FilterForm";
import { DeleteAllTodosButtons } from "./DeleteAllButtons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthProviderWrapper";

export function TodoList() {
  const [allTodos, setAllTodos] = useState([]);
  const [filters, setFilters] = useState({ name: "", done: "both" });

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log(user);
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    async function fetchAllTodos() {
      console.log("Fetching all todos!");
      try {
        const { data } = await axios.get(`${API_BASE_URL}/todos`);

        if (!data.todos) return;
        setAllTodos(data.todos);
      } catch (err) {
        console.log("We got an error");
        console.error(err);
        console.log(err.response.data);
      }
    }
    fetchAllTodos();
  }, [navigate]);

  const updateSingleTodo = async (idToUpdate, updatedTodo) => {
    try {
      const { data } = await axios.put(`${API_BASE_URL}/todos`, updatedTodo);
      console.log(data);
      setAllTodos((oldTodos) => {
        return oldTodos.map((todo) => {
          if (idToUpdate === todo._id) {
            return updatedTodo;
          }
          return todo;
        });
      });
    } catch (error) {
      console.error("Error in updating the todo on the server!", error);
    }
  };

  const deleteSingleTodo = async (idToDelete) => {
    try {
      const { data } = await axios.delete(`${API_BASE_URL}/todos`, {
        id: idToDelete,
      });
      console.log(data);
      setAllTodos((oldTodos) => {
        return oldTodos.filter((todo) => {
          return idToDelete !== todo._id;
        });
      });
    } catch (error) {
      console.error("Error in updating the todo on the server!", error);
    }
  };

  const clean = (str) => {
    return str.toLowerCase().trim();
  };

  const byCustomFilters = (todo) => {
    if (!clean(todo.name).includes(clean(filters.name))) {
      return false;
    }
    const todoState = todo.done ? "done" : "undone";
    if (filters.done !== "both" && todoState !== filters.done) {
      return false;
    }
    return true;
  };

  return (
    <div>
      {allTodos.filter(byCustomFilters).map((todo) => (
        <SingleTodo
          key={todo._id}
          todo={todo}
          updateSingleTodo={updateSingleTodo}
          deleteSingleTodo={deleteSingleTodo}
        />
      ))}
      <AddNewTodo setAllTodos={setAllTodos} />
      <FilterForm filters={filters} setFilters={setFilters} />

      <DeleteAllTodosButtons
        deleteSingleTodo={deleteSingleTodo}
        allTodos={allTodos}
        setAllTodos={setAllTodos}
      />
    </div>
  );
}
