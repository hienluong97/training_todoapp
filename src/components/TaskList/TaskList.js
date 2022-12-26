import React from "react";
import Task from "../Task/Task";
import "./TaskList.scss";

function TaskList() {
  return (
    <div className="task_list">
      <Task />
      <Task />
      <Task />
    </div>
  );
}

export default TaskList;
