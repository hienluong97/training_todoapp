import React from "react";
import "./TasksLeft.scss";

function TasksLeft({ taskList }) {
  return (
    <>
      <span className="tasks_tag tasks_done"> 1 tasks done</span>{" "}
      <span className="tasks_tag tasks_left"> 2 tasks left</span>
    </>
  );
}

export default TasksLeft;
