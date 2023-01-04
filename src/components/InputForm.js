import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

/**
 * This component to render a input form for user to add a new task
 * @param {array} taskList A list of tasks
 * @param {fucntion} setTaskList Set task list when task updated
 * @property {fucntion} handleClickAddTask This fuction handle when user click add task button
 * @property {fucntion} handleOnchange   This fuction to hide error message when typing
 * @property {fucntion} handleOnBlur This fuction hide error message when bluring
 * @returns A input form
 */

function InputForm({ taskList, setTaskList }) {
  const inputRef = useRef();
  const errorRef = useRef();

  const handleClickAddTask = (e) => {
    const hasValue = inputRef.current?.value.trim();
    // Check value of input befor submitting↓
    if (hasValue) {
      const newTask = {
        id: uuidv4(),
        title: inputRef.current.value,
        status: false,
        // created_at: new Date().getTime(),
        created_at: new Date(),
      };
      const newTaskList = [newTask, ...taskList];
      setTaskList(newTaskList);
      localStorage.setItem("taskList", JSON.stringify(newTaskList));
      inputRef.current.value = "";
      inputRef.current.focus();
    } else {
      // Show error message when user hasn't typed any thing↓
      errorRef.current.innerHTML = "Please write somethings!";
      inputRef.current.focus();
    }
    return;
  };

  const handleOnKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClickAddTask();
    }
  };

  const handleOnchange = () => {
    errorRef.current.innerHTML = "";
  };

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
          onKeyDown={(e) => {
            handleOnKeyPress(e);
          }}
        />
        <button
          type="submit"
          className="form_submit_btn"
          onClick={handleClickAddTask}
        >
          Add task
        </button>
      </div>
      <span ref={errorRef} className="form_error"></span>
    </>
  );
}

export default InputForm;
