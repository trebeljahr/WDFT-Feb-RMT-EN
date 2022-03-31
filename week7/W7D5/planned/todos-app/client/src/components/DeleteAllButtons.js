export function DeleteAllButtons({ todos, deleteSingleTodo }) {
  const deleteAllDone = () => {
    todos
      .filter((todo) => {
        return todo.done;
      })
      .forEach(({ _id }) => deleteSingleTodo(_id)());
  };

  const deleteAll = () => {
    todos.forEach(({ _id }) => deleteSingleTodo(_id)());
  };

  return (
    <div>
      <button onClick={deleteAllDone}>Delete All Done</button>
      <button onClick={deleteAll}>Delete All</button>
    </div>
  );
}
