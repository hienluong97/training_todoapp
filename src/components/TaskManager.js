import React, { useState, useEffect, useContext } from "react";
import { TaskListContext } from "../contexts/TaskListConText";

/**
 * This component to show number of completed tasks, incompleted tasks
 * @param {array} taskList A list of tasks
 * @property {number} tasksDone  Number of completed tasks
 * @property {fucntion} setTasksDone  Function to set number of completed tasks when user change status of task
 * @property {number} tasksLeft  Number of incompleted tasks
 * @property {fucntion} setTasksLeft  Function to set number of incompleted tasks when user change status of task
 * @returns Number of completed tasks, incompleted tasks
 */

function TaskManager() {
  const taskListContext = useContext(TaskListContext);
  const { taskList } = taskListContext;
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
    <div className="task_manager" data-testid="task_manager">
      <span className="task_tag task_done" data-testid="task_done">
        {tasksDone <= 1 ? `${tasksDone} task done` : `${tasksDone} tasks done`}
      </span>
      <span className="task_tag task_left" data-testid="task_left">
        {tasksLeft <= 1 ? `${tasksLeft} task left` : `${tasksLeft} tasks left`}
      </span>
    </div>
  );
}

export default TaskManager;
