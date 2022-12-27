import React from "react";
import Task from "../Task/Task";
import "./TaskList.scss";

function TaskList({
  taskList,
  handleDeleteTask,
  handleEditTask,
  handleChangeTaskStastus,
}) {
  return (
    <div className="task_list">
      {taskList.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
          handleChangeTaskStastus={handleChangeTaskStastus}
        />
      ))}
    </div>
  );
}

export default TaskList;
