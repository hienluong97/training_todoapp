import { fireEvent, render, screen } from "@testing-library/react";
import Task from "../components/Task";

describe("Task", () => {
  test("should be rendered a task", async () => {
    const task = {
      id: "1",
      title: "Go out",
      status: false,
      created_at: "2023-01-05T06:14:27.152Z",
    };
    render(<Task task={task} />);
    const taskEl = await screen.findByTestId("task");
    expect(taskEl).toBeInTheDocument();
  });

  test("should have class name 'task'", async () => {
    const task = {
      id: "1",
      title: "Go out",
      status: false,
      created_at: "2023-01-05T06:14:27.152Z",
    };
    render(<Task task={task} />);
    const taskEl = await screen.findByTestId("task");
    expect(taskEl).toHaveClass("task");
  });

  test("completed task should have class name 'task_completed'", async () => {
    const task = {
      id: "1",
      title: "Go out",
      status: true,
      created_at: "2023-01-05T06:14:27.152Z",
    };
    render(<Task task={task} />);
    const taskEl = await screen.findByTestId("task");
    expect(taskEl).toHaveClass("task_completed");
  });

  test("task component has checkbox", async () => {
    const task = {
      id: "1",
      title: "Go out",
      status: false,
      created_at: "2023-01-05T06:14:27.152Z",
    };
    render(<Task task={task} />);
    const checkboxEl = await screen.findByRole("checkbox");
    expect(checkboxEl).toBeInTheDocument();
  });

  test("task component has action icon", async () => {
    const task = {
      id: "1",
      title: "Go out",
      status: false,
      created_at: "2023-01-05T06:14:27.152Z",
    };
    render(<Task task={task} />);
    const btnEls = await screen.findAllByTestId("task_btn_action");
    expect(btnEls).toHaveLength(2);
  });

  test("action icons should have task_btn_action class", async () => {
    const task = {
      id: "1",
      title: "Go out",
      status: false,
      created_at: "2023-01-05T06:14:27.152Z",
    };
    render(<Task task={task} />);
    const btnEls = await screen.findAllByTestId("task_btn_action");
    expect(btnEls[0]).toHaveClass("task_btn_action");
  });

  test("edit modal should be showed when click edit btn", async () => {
    const task = {
      id: "1",
      title: "Go out",
      status: false,
      created_at: "2023-01-05T06:14:27.152Z",
    };
    render(<Task task={task} />);
    const editBtnEl = await screen.findByTitle("edit_btn");
    fireEvent.click(editBtnEl);
    const editModalEl = await screen.findByTestId("taskEdit_modal");
    expect(editModalEl).toBeInTheDocument();
  });
});
