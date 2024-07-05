const Todo = ({ todo, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo);
  };

  const onClickComplete = (todo) => () => {
    completeTodo(todo);
  };

  const doneInfo = (
    <>
      <span>This todo is done</span>
      <span>
        <button onClick={onClickDelete(todo)}> Delete </button>
      </span>
    </>
  );

  const notDoneInfo = (
    <>
      <span>This todo is not done</span>
      <span>
        <button className="delete" onClick={onClickDelete(todo)}>
          {" "}
          Delete{" "}
        </button>
        <button className="complete" onClick={onClickComplete(todo)}>
          {" "}
          Set as done{" "}
        </button>
      </span>
    </>
  );

  return (
    <li
      key={todo._id}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 0.5fr 0.5fr",
        margin: "auto",
        borderTop: "1px solid lightgrey",
        padding: "0.2rem 1rem",
      }}
    >
      <span
        style={{
          textAlign: "start",
        }}
      >
        {todo.text}
      </span>
      {todo.done ? doneInfo : notDoneInfo}
    </li>
  );
};

export default Todo;
