import React, { useEffect, useState } from "react";
import "./TaskManager.scss";

function TaskManager({ taskList }) {
  const [tasksDone, setTasksDone] = useState();
  const [tasksLeft, setTasksLeft] = useState();

  // Set a number of completed task list, incompleted task list when user changed status of task↓
  useEffect(() => {
    const tasksDone = taskList.filter((task) => {
      return task.status;
    }).length;
    setTasksDone(tasksDone);
    setTasksLeft(taskList.length - tasksDone);
  }, [taskList]);

  return (
    <div className="task_manager">
      <span className="task_tag task_done"> {tasksDone} tasks done</span>{" "}
      <span className="task_tag task_left"> {tasksLeft} tasks left</span>
    </div>
  );
}

export default TaskManager;
