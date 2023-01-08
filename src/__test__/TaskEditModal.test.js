import { fireEvent, render, screen } from "@testing-library/react";
import TaskEditModal from "../components/TaskEditModal";
import { useState } from "react";

describe("TaskEditModal", () => {
  test("should render edit form", () => {
    const task = {
      id: "56deeba2-9f3e-4b4b-9b80-ddc19db6856e",
      title: "Buy coffee",
      status: false,
      created_at: "2023-01-06T01:43:02.731Z",
    };
    render(<TaskEditModal task={task} />);
    const taskEditFormEl = screen.getByTestId("taskEdit_title");
    expect(taskEditFormEl).toBeInTheDocument();
  });

  test("cursor should be focus in textarea", () => {
    const task = {
      id: "56deeba2-9f3e-4b4b-9b80-ddc19db6856e",
      title: "Buy coffee",
      status: false,
      created_at: "2023-01-06T01:43:02.731Z",
    };
    render(<TaskEditModal task={task} />);
    const taskEditFormEl = screen.getByTestId("taskEdit_title");
    expect(taskEditFormEl).toHaveFocus();
  });

  test("should render taskEdit_btn_cancel", () => {
    const task = {
      id: "56deeba2-9f3e-4b4b-9b80-ddc19db6856e",
      title: "Buy coffee",
      status: false,
      created_at: "2023-01-06T01:43:02.731Z",
    };
    render(<TaskEditModal task={task} />);
    const taskEdit_btn_cancelEL = screen.getByTestId("taskEdit_btn_cancel");
    expect(taskEdit_btn_cancelEL).toBeInTheDocument();
  });

  test("should render taskEdit_btn_save", () => {
    const task = {
      id: "56deeba2-9f3e-4b4b-9b80-ddc19db6856e",
      title: "Buy coffee",
      status: false,
      created_at: "2023-01-06T01:43:02.731Z",
    };
    render(<TaskEditModal task={task} />);
    const taskEdit_btn_saveEL = screen.getByTestId("taskEdit_btn_save");
    expect(taskEdit_btn_saveEL).toBeInTheDocument();
  });
});
