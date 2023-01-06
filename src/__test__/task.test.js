import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Task from "../components/Task";

describe("Task", () => {
  test("should be rendered a task", async () => {
    const task = {
      id: 1,
      title: "Go out",
      status: false,
      created_at: "2023-01-05T06:14:27.152Z",
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
      created_at: "2023-01-05T06:14:27.152Z",
    };
    render(<Task task={task} />);
    const checkboxEl = await screen.findByRole("checkbox");
    expect(checkboxEl).toBeInTheDocument();
  });

  //   it("class of task should be changed when checkbox is clicked", async () => {
  //     const task = {
  //       id: 1,
  //       title: "Go out",
  //       status: false,
  //       created_at: "2023-01-05T06:14:27.152Z",
  //     };
  //     render(<Task task={task} />);
  //     const checkboxEl = await screen.findByTestId("task_checkbox");
  //     const TaskComponent = renderer.create(<Task task={task} />);
  //     let tree = TaskComponent.toJSON();
  //     expect(tree).toMatchSnapshot();
  //     renderer.act(() => {
  //       checkboxEl.onchange();
  //     });
  //     tree = TaskComponent.toJSON();
  //     expect(tree).toMatchSnapshot();
  //     renderer.act(() => {
  //       checkboxEl.onchange();
  //     });
  //     tree = TaskComponent.toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
});
