import { SingleTodo } from "./SingleTodo";
import { TodosApi } from "./utils";

export function TodoList({ todos, filters, setTodos, deleteSingleTodo }) {
  const updateSingleTodo = (id) => (update) => {
    TodosApi.update(update).then((message) => {
      console.log(message);
      setTodos((oldTodos) =>
        oldTodos.map((todo) =>
          id === todo._id ? { ...todo, ...update } : todo
        )
      );
    });
  };

  const byFilters = (todo) => {
    if (!todo.name.toLowerCase().includes(filters.name.toLowerCase()))
      return false;
    if (filters.done !== "both" && `${todo.done}` !== filters.done)
      return false;
    return true;
  };

  return (
    <ul className="todos">
      {todos.filter(byFilters).map((todo) => (
        <SingleTodo
          key={todo._id}
          todo={todo}
          setTodo={updateSingleTodo(todo._id)}
          deleteTodo={deleteSingleTodo(todo._id)}
        />
      ))}
    </ul>
  );
}
