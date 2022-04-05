export function SingleTodo({ todo, updateSingleTodo, deleteSingleTodo }) {
  const handleUpdateTodo = () => {
    updateSingleTodo(todo._id, { ...todo, done: !todo.done });
  };
  const handleDeleteTodo = () => {
    deleteSingleTodo(todo._id);
  };
  return (
    <div>
      <h2 style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.name}
      </h2>
      <button onClick={handleUpdateTodo}>
        {todo.done ? "Re-open" : "Done!"}
      </button>
      <button onClick={handleDeleteTodo}>Delete!</button>
    </div>
  );
}

// usually with React we would build simple components that encapsulate
// our designs and styles - like theme information etc.

// import { useContext } from "react";
// import { ThemeContext } from "../../context/ThemeProviderWrapper";
// export function OurHeader2({ children, style }) {
//   const { theme } = useContext(ThemeContext);
//   return (
//     <h2 style={style} className={theme === "light" ? "bright" : "dark"}>
//       {children}
//     </h2>
//   );
// }
