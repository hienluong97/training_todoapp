import { useState } from "react";
import InputForm from "./components/InputForm";
import TaskList from "./components/TaskList";
import TaskManager from "./components/TaskManager";

/**
 *
 * @property {array} currentTaskList List task that saved on localStorage
 * @property {array} taskList Initial list task
 * @property {function} setTaskList Set task list when task updated
 * @property {function} handleDeleteTask Handle when click delete icon
 * @property {function} handleEditTask Handle when click edit icon
 * @property {function} handleChangeTaskStastus Handle when status of task is updated
 * @returns Return UI of App
 */

function App() {
  const currentTaskList = JSON.parse(localStorage.getItem("taskList"));
  const [taskList, setTaskList] = useState(
    currentTaskList || [
      {
        id: 1,
        title: "Go out with friends 😎  ",
        status: false,
        created_at: new Date().getTime(),
      },
    ]
  );

  const handleDeleteTask = (id) => {
    //Filter to get all task that have id except the id of task deleted↓
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
    <div className="app">
      <h1 className="app_title">Todo List</h1>
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TaskList
        taskList={taskList}
        handleDeleteTask={handleDeleteTask}
        handleEditTask={handleEditTask}
        handleChangeTaskStastus={handleChangeTaskStastus}
      />
      <TaskManager taskList={taskList} />
    </div>
  );
}

export default App;
