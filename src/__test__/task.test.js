import { fireEvent, render, screen } from "@testing-library/react";
import Task from "../components/Task";

describe("Test task component", () => {
  test("should be rendered a task", async () => {
    const task = {
      id: 1,
      title: "Go out",
      status: false,
      created_at: new Date().getTime(),
    };
    render(<Task task={task} />);
    const taskEl = await screen.findByTestId("task");
    expect(taskEl).toBeInTheDocument();
  });

  test("task component has checkbox", async () => {
    const task = {
      id: 1,
      title: "Go out",
      status: false,
      created_at: new Date().getTime(),
    };
    render(<Task task={task} />);
    const checkboxEl = await screen.findByRole("checkbox");
    expect(checkboxEl).toBeInTheDocument();
  });
});
