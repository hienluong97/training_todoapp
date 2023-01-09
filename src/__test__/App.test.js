import { render, screen } from "@testing-library/react";
import App from "../../src/App";

describe("Test App component", () => {
  test("renders app title", () => {
    render(<App />);
    const titleEl = screen.getByText(/todo list/i);
    expect(titleEl).toBeInTheDocument();
  });

  test("app title should have h1 tag", () => {
    render(<App />);
    const titleEl = screen.getByText(/todo list/i);
    console.log(titleEl);
    expect(titleEl.tagName.toLowerCase()).toBe("h1");
  });

  test("renders input form", async () => {
    render(<App />);
    const inputFormEl = await screen.findByTestId("form_input");
    expect(inputFormEl).toBeInTheDocument();
  });

  test("renders task list", async () => {
    render(<App />);
    const taskListEl = await screen.findByTestId("task_list");
    expect(taskListEl).toBeInTheDocument();
  });

  test("renders task manage", async () => {
    render(<App />);
    const taskManagerEl = await screen.findByTestId("task_manager");
    expect(taskManagerEl).toBeInTheDocument();
  });
});
