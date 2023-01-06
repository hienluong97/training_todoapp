import { fireEvent, render, screen } from "@testing-library/react";
import InputForm from "../../src/components/InputForm";

describe("InputForm", () => {
  test("input form should be rendered", async () => {
    render(<InputForm />);
    const inputEl = await screen.findByTestId("form_input");
    expect(inputEl).toBeInTheDocument();
  });

  test("should be able to type in input", async () => {
    render(<InputForm />);
    const inputEl = await screen.findByTestId("form_input");
    fireEvent.change(inputEl, { target: { value: "Go shopping" } });
    expect(inputEl.value).toBe("Go shopping");
  });

  test("button should be rendered", () => {
    render(<InputForm />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });

  test("error message tag should be rendered", async () => {
    render(<InputForm />);
    const errorEl = await screen.findByTestId("form_error");
    expect(errorEl).toBeInTheDocument();
  });

  test("should have empty input when add button is clicked", async () => {
    const taskList = [];

    const mockedSetTaskList = jest.fn();
    render(<InputForm taskList={taskList} setTaskList={mockedSetTaskList} />);
    const inputEl = await screen.findByTestId("form_input");
    const buttonEl = screen.getByRole("button");
    fireEvent.change(inputEl, { target: { value: "Go shopping" } });
    fireEvent.click(buttonEl);
    expect(inputEl.value).toBe("");
  });

  test("cursor should be focus immediately on input form when add button is clicked", async () => {
    const taskList = [];
    const mockedSetTaskList = jest.fn();
    render(<InputForm taskList={taskList} setTaskList={mockedSetTaskList} />);
    const inputEl = await screen.findByTestId("form_input");
    const buttonEl = screen.getByRole("button");
    fireEvent.change(inputEl, { target: { value: "Go shopping" } });
    fireEvent.click(buttonEl);
    expect(inputEl).toHaveFocus();
  });

  test("error mesage should be render when submit a empty value", async () => {
    render(<InputForm />);
    const inputEl = await screen.findByTestId("form_input");
    const buttonEl = screen.getByRole("button");
    const errorEl = await screen.findByTestId("form_error");
    fireEvent.change(inputEl, { target: { value: "" } });
    fireEvent.click(buttonEl);
    expect(errorEl).toHaveTextContent("Please write somethings!");
  });

  test("error mesage should be hide when user typing", async () => {
    render(<InputForm />);
    const inputEl = await screen.findByTestId("form_input");
    const errorEl = await screen.findByTestId("form_error");
    fireEvent.change(inputEl);
    expect(errorEl).toHaveTextContent("");
  });

  test("should have empty input when press enter", async () => {
    const taskList = [];
    const mockedSetTaskList = jest.fn();
    render(<InputForm taskList={taskList} setTaskList={mockedSetTaskList} />);
    const inputEl = await screen.findByTestId("form_input");
    fireEvent.change(inputEl, { target: { value: "Go shopping" } });
    fireEvent.keyDown(inputEl, { key: "Enter", code: "Enter", charCode: 13 });
    expect(inputEl.value).toBe("");
  });

  test("cursor should be focus immediately on input form when pressed enter", async () => {
    const taskList = [];
    const mockedSetTaskList = jest.fn();
    render(<InputForm taskList={taskList} setTaskList={mockedSetTaskList} />);
    const inputEl = await screen.findByTestId("form_input");
    fireEvent.change(inputEl, { target: { value: "Go shopping" } });
    fireEvent.keyDown(inputEl, { key: "Enter", code: "Enter", charCode: 13 });
    expect(inputEl).toHaveFocus();
  });

  test("error mesage should be render when when pressed enter to submit a empty value", async () => {
    const taskList = [];
    const mockedSetTaskList = jest.fn();
    render(<InputForm taskList={taskList} setTaskList={mockedSetTaskList} />);
    const inputEl = await screen.findByTestId("form_input");
    const errorEl = await screen.findByTestId("form_error");
    fireEvent.change(inputEl, { target: { value: "" } });
    fireEvent.keyDown(inputEl, { key: "Enter", code: "Enter", charCode: 13 });
    expect(errorEl).toHaveTextContent("Please write somethings!");
  });
});
