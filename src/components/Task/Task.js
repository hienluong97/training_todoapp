import React, { useState, useRef, useEffect } from "react";
import "./Task.scss";
import TextArea from "textarea-autosize-reactjs";
import { EditIcon, DeleteIcon } from "../../common/icon";
import formatTime from "../../ultils/functions";

function Task({
  task,
  handleDeleteTask,
  handleEditTask,
  handleChangeTaskStastus,
}) {
  const [disabled, setDisabled] = useState(true);
  const [inputValue, setInputValue] = useState(task.title);
  const inputRef = useRef();

  //   Set cursor at the end in the textarea ↓ when focus
  useEffect(() => {
    if (!disabled) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [disabled]);

  return (
    <div className={task.status ? "task task_completed" : "task"}>
      <input
        type="checkbox"
        className="task_checkbox"
        checked={task.status}
        onChange={() => {
          handleChangeTaskStastus(task.id);
        }}
      />
      <div className="task_content">
        <TextArea
          className={task.status ? "task_title line-through" : "task_title"}
          ref={inputRef}
          value={inputValue}
          disabled={disabled}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onBlur={() => {
            setDisabled(true);
            handleEditTask(task.id, inputRef.current.value);
          }}
        />
        <span className="task_createTime">{formatTime(task.created_at)}</span>
      </div>
      <div className="task_btn">
        {disabled ? (
          <span
            className="task_btn_edit"
            onClick={() => {
              setDisabled(false);
            }}
          >
            <EditIcon />
          </span>
        ) : (
          <span
            className="task_btn_save"
            onClick={() => {
              setDisabled(true);
              handleEditTask(task.id, inputRef.current.value);
            }}
          >
            save
          </span>
        )}

        {disabled ? (
          <span
            className="task_btn_delete"
            onClick={() => {
              handleDeleteTask(task.id);
            }}
          >
            <DeleteIcon />
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default Task;
