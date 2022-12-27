import React, { useRef } from "react";
import "./InputForm.scss";
import { v4 as uuidv4 } from "uuid";

function InputForm({ taskList, setTaskList }) {
  const inputRef = useRef();
  const errorRef = useRef();

  const handleClickAddTask = () => {
    const hasValue = inputRef.current?.value.trim();
    // Check value of input befor submitting↓
    if (hasValue) {
      const newTask = {
        id: uuidv4(),
        title: inputRef.current.value,
        status: false,
        created_at: new Date().getTime(),
      };
      const newTaskList = [newTask, ...taskList];
      setTaskList(newTaskList);
      inputRef.current.value = "";
      inputRef.current.focus();
      localStorage.setItem("taskList", JSON.stringify(newTaskList));
    } else {
      // Show error message when user hasn't typed any thing↓
      errorRef.current.innerHTML = "Please write somethings!";
      inputRef.current.focus();
    }
    return;
  };

  // Hide error message when typing↓
  const handleOnchange = () => {
    errorRef.current.innerHTML = "";
  };

  // Hide error message when bluring↓
  const handleOnBlur = () => {
    errorRef.current.innerHTML = "";
  };
  return (
    <>
      <div className="form">
        <input
          ref={inputRef}
          className="form_input"
          onChange={handleOnchange}
          onBlur={handleOnBlur}
        />
        <button className="form_submit_btn" onClick={handleClickAddTask}>
          Add task
        </button>
      </div>
      <span ref={errorRef} className="form_error"></span>
    </>
  );
}

export default InputForm;
