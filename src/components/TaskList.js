import React, { useState, useContext } from "react";
import Task from "./Task";
import { TaskListContext } from "../contexts/TaskListConText";

/**
 *  This component to render a list of tasks
 * @param {array} taskList List task
 * @param {function} handleDeleteTask Handle when click delete icon
 * @param {function} handleEditTask Handle when click edit icon
 * @param {function} handleChangeTaskStastus Handle when status of task is updated
 * @returns List of task component
 */

function TaskList() {
  const taskListContext = useContext(TaskListContext);
  const { taskList, setTaskList } = taskListContext;

  const handleDeleteTask = (id) => {
    const newTaskList = taskList.filter((task) => {
      return task.id !== id;
    });
    setTaskList(newTaskList);
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
  };

  const handleEditTask = (id, data) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        task.title = data;
      }
      return task;
    });
    setTaskList(newTaskList);
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
  };

  const handleChangeTaskStastus = (id) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        task.status = !task.status;
      }
      return task;
    });
    setTaskList(newTaskList);
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
  };

  return (
    <div className="task_list" data-testid="task_list">
      <ul className="task_list_items">
        {taskList.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleChangeTaskStastus={handleChangeTaskStastus}
            handleDeleteTask={handleDeleteTask}
            handleEditTask={handleEditTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
