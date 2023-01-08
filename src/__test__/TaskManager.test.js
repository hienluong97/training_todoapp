import { render, screen } from "@testing-library/react";
import TaskManager from "../components/TaskManager";

describe("TaskManager", () => {
  test("should render the correct amount of complete tasks, incomplete tasks", () => {
    const taskList = [
      {
        id: "56deeba2-9f3e-4b4b-9b80-ddc19db6856e",
        title: "Buy coffee",
        status: false,
        created_at: "2023-01-06T01:43:02.731Z",
      },
      {
        id: "613a4e45-5c39-4417-a1ae-654a9aa4a557",
        title: "Go out",
        status: false,
        created_at: "2023-01-06T02:16:01.482Z",
      },
    ];
    render(<TaskManager taskList={taskList} />);
    const taskDoneEl = screen.getByText("0 task done");
    const taskLeftEl = screen.getByText("2 tasks left");
    expect(taskDoneEl).toBeInTheDocument();
    expect(taskLeftEl).toBeInTheDocument();
  });

  test("should render 0 complete task, incomplete task when task list is empty", () => {
    const taskList = [];
    render(<TaskManager taskList={taskList} />);
    const taskDoneEl = screen.getByText("0 task done");
    const taskLeftEl = screen.getByText("0 task left");
    expect(taskDoneEl).toBeInTheDocument();
    expect(taskLeftEl).toBeInTheDocument();
  });

  test("should render correctly  singular of text 'task'", () => {
    const taskList = [
      {
        id: "56deeba2-9f3e-4b4b-9b80-ddc19db6856e",
        title: "Buy coffee",
        status: true,
        created_at: "2023-01-06T01:43:02.731Z",
      },
      {
        id: "613a4e45-5c39-4417-a1ae-654a9aa4a557",
        title: "Go out",
        status: false,
        created_at: "2023-01-06T02:16:01.482Z",
      },
    ];
    render(<TaskManager taskList={taskList} />);
    const taskDoneEl = screen.getByTestId("task_done");
    const taskLeftEl = screen.getByTestId("task_left");
    expect(taskDoneEl).toHaveTextContent("1 task done");
    expect(taskLeftEl).toHaveTextContent("1 task left");
  });

  test("should render correctly plural of text 'task'", () => {
    const taskList = [
      {
        id: "56deeba2-9f3e-4b4b-9b80-ddc19db6856e",
        title: "Buy coffee",
        status: true,
        created_at: "2023-01-06T01:43:02.731Z",
      },
      {
        id: "613a4e45-5c39-4417-a1ae-654a9aa4a558",
        title: "Go out hihi",
        status: true,
        created_at: "2023-01-06T02:16:01.482Z",
      },
      {
        id: "56deeba2-9f3e-4b4b-9b80-ddc19db6856f",
        title: "Buy coffee hihi",
        status: false,
        created_at: "2023-01-06T01:43:02.731Z",
      },
      {
        id: "613a4e45-5c39-4417-a1ae-654a9aa4a557",
        title: "Go out",
        status: false,
        created_at: "2023-01-06T02:16:01.482Z",
      },
    ];
    render(<TaskManager taskList={taskList} />);
    const taskDoneEl = screen.getByTestId("task_done");
    const taskLeftEl = screen.getByTestId("task_left");
    expect(taskDoneEl).toHaveTextContent("2 tasks done");
    expect(taskLeftEl).toHaveTextContent("2 tasks left");
  });

  test("completed task tag should class 'task_done'", () => {
    const taskList = [
      {
        id: "56deeba2-9f3e-4b4b-9b80-ddc19db6856e",
        title: "Buy coffee",
        status: true,
        created_at: "2023-01-06T01:43:02.731Z",
      },
    ];
    render(<TaskManager taskList={taskList} />);
    const taskDoneEl = screen.getByTestId("task_done");
    expect(taskDoneEl).toHaveClass("task_done");
  });

  test("incompleted task tag should class 'task_left'", () => {
    const taskList = [
      {
        id: "56deeba2-9f3e-4b4b-9b80-ddc19db6856e",
        title: "Buy coffee",
        status: true,
        created_at: "2023-01-06T01:43:02.731Z",
      },
    ];
    render(<TaskManager taskList={taskList} />);
    const taskLeftEl = screen.getByTestId("task_left");
    expect(taskLeftEl).toHaveClass("task_left");
  });
});
