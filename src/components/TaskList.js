import React from "react";
import Task from "./Task";
import "../common/components/_taskList.scss";

/**
 *  This component to render a list of tasks
 * @param {array} taskList List task
 * @param {function} handleDeleteTask Handle when click delete icon
 * @param {function} handleEditTask Handle when click edit icon
 * @param {function} handleChangeTaskStastus Handle when status of task is updated
 * @returns List of task component
 */

function TaskList({
  taskList,
  handleDeleteTask,
  handleEditTask,
  handleChangeTaskStastus,
}) {
  return (
    <div className="task_list">
      <ul className="task_list_items">
        {taskList.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleDeleteTask={handleDeleteTask}
            handleEditTask={handleEditTask}
            handleChangeTaskStastus={handleChangeTaskStastus}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
