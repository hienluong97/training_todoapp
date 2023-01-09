import { render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList";

describe("TaskList", () => {
  test("should be rendered a TaskList", async () => {
    const taskList = [
      {
        id: "56deeba2-9f3e-4b4b-9b80-ddc19db6856e",
        title: "Buy coffee",
        status: false,
        created_at: "2023-01-06T01:43:02.731Z",
      },
    ];
    render(<TaskList taskList={taskList} />);
    const taskListEl = await screen.findByTestId("task_list");
    expect(taskListEl).toBeInTheDocument();
  });

  test("should be rendered 3 tasks", async () => {
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
      {
        id: "613a4e45-5c39-4417-a1ae-654a9aa4a559",
        title: "Go out",
        status: false,
        created_at: "2023-01-06T02:16:01.482Z",
      },
    ];
    render(<TaskList taskList={taskList} />);
    const taskEls = await screen.findAllByTestId("task");
    expect(taskEls).toHaveLength(3);
  });

  test("should be rendered 2 tasks", async () => {
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
    render(<TaskList taskList={taskList} />);
    const taskEls = await screen.findAllByTestId("task");
    expect(taskEls).toHaveLength(2);
  });
});
