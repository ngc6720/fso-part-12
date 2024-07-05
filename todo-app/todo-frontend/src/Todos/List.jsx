import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <ul
      style={{
        margin: "0",
        padding: "1rem",
      }}
    >
      {todos.map((todo) => (
        <Todo
          key={todo._id}
          todo={todo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        ></Todo>
      ))}
    </ul>
  );
};

export default TodoList;
