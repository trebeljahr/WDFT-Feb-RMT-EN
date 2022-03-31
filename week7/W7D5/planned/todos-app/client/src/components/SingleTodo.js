export function SingleTodo({ todo, setTodo, deleteTodo }) {
  const handleDone = () => {
    setTodo({ ...todo, done: !todo.done });
  };

  const handleDelete = () => {
    deleteTodo();
  };

  return (
    <li style={{ textDecoration: todo.done ? "line-through" : "none" }}>
      <div>
        <h1> {todo.name}</h1>
        <button onClick={handleDone}>{todo.done ? "Re-Open" : "Done!"}</button>
        <button onClick={handleDelete}>Delete!</button>
      </div>
    </li>
  );
}
