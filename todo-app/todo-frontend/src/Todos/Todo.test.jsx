import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo from "./Todo";

const todo = {
  id: "456",
  text: "TESTTEXT",
  done: false,
};

describe("<Todo />", () => {
  let container;
  const onDeleteTodo = vi.fn();
  const onCompleteTodo = vi.fn();

  beforeEach(() => {
    container = render(
      <Todo todo={todo} deleteTodo={onDeleteTodo} completeTodo={onCompleteTodo}>
        {" "}
      </Todo>
    ).container;
  });

  test("renders the todo's text", () => {
    const title = screen.getByText(todo.text, { exact: false });
    expect(title).toBeDefined();
  });

  test("when delete button is clicked, its event handler is called", async () => {
    const user = userEvent.setup();
    const b = container.querySelector(".delete");

    await user.click(b);

    expect(onDeleteTodo.mock.calls.length).toBe(1);
  });

  test("when complete button is clicked, its event handler is called", async () => {
    const user = userEvent.setup();
    const b = container.querySelector(".complete");

    await user.click(b);

    expect(onCompleteTodo.mock.calls.length).toBe(1);
  });
});
