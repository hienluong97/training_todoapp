import { fireEvent, render, screen } from "@testing-library/react";
import InputForm from "../../src/components/InputForm";

describe("InputForm", () => {
  test("input form should be rendered", async () => {
    render(<InputForm />);
    const inputEl = await screen.findByTestId("form_input");
    expect(inputEl).toBeInTheDocument();
  });

  test("input form should be able to type", async () => {
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

  test("input form should have empty value when 'add task' button is clicked", async () => {
    const taskList = [];
    const mockedSetTaskList = jest.fn();
    render(<InputForm taskList={taskList} setTaskList={mockedSetTaskList} />);
    const inputEl = await screen.findByTestId("form_input");
    const buttonEl = screen.getByRole("button");
    fireEvent.change(inputEl, { target: { value: "Go shopping" } });
    fireEvent.click(buttonEl);
    expect(inputEl.value).toBe("");
  });

  test("cursor should be focus immediately on input form when 'add task' button is clicked", async () => {
    const taskList = [];
    const mockedSetTaskList = jest.fn();
    render(<InputForm taskList={taskList} setTaskList={mockedSetTaskList} />);
    const inputEl = await screen.findByTestId("form_input");
    const buttonEl = screen.getByRole("button");
    fireEvent.change(inputEl, { target: { value: "Go shopping" } });
    fireEvent.click(buttonEl);
    expect(inputEl).toHaveFocus();
  });

  test("error message should be rendered when user submit a empty value", async () => {
    render(<InputForm />);
    const inputEl = await screen.findByTestId("form_input");
    const buttonEl = screen.getByRole("button");
    const errorEl = await screen.findByTestId("form_error");
    fireEvent.change(inputEl, { target: { value: "" } });
    fireEvent.click(buttonEl);
    expect(errorEl).toHaveTextContent("Please write somethings!");
  });

  test("error message should be hiden when user is typing", async () => {
    render(<InputForm />);
    const inputEl = await screen.findByTestId("form_input");
    const errorEl = await screen.findByTestId("form_error");
    fireEvent.change(inputEl);
    expect(errorEl).toHaveTextContent("");
  });

  test("input form should have empty value when user press enter key", async () => {
    const taskList = [];
    const mockedSetTaskList = jest.fn();
    render(<InputForm taskList={taskList} setTaskList={mockedSetTaskList} />);
    const inputEl = await screen.findByTestId("form_input");
    fireEvent.change(inputEl, { target: { value: "Go shopping" } });
    fireEvent.keyDown(inputEl, { key: "Enter", code: "Enter", charCode: 13 });
    expect(inputEl.value).toBe("");
  });

  test("cursor should be focus immediately on input form when user press enter key", async () => {
    const taskList = [];
    const mockedSetTaskList = jest.fn();
    render(<InputForm taskList={taskList} setTaskList={mockedSetTaskList} />);
    const inputEl = await screen.findByTestId("form_input");
    fireEvent.change(inputEl, { target: { value: "Go shopping" } });
    fireEvent.keyDown(inputEl, { key: "Enter", code: "Enter", charCode: 13 });
    expect(inputEl).toHaveFocus();
  });

  test("error message should be rendered when user press enter key to submit a empty value", async () => {
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
