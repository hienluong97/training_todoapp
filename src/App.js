import { useState } from "react";
import "./App.scss";
import InputForm from "./components/InputForm/InputForm";
import TaskList from "./components/TaskList/TaskList";
import TaskManager from "./components/TaskManager/TaskManager";

function App() {
  const currentTaskList = JSON.parse(localStorage.getItem("taskList")); //Get task list that saved on localStorage
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

  //Handle when click delete icon↓
  const handleDeleteTask = (id) => {
    //Filter to get all task that have id except the id of task deleted↓
    const newTaskList = taskList.filter((task) => {
      return task.id !== id;
    });
    // Set task list again after deleting a task↓
    setTaskList(newTaskList);
    // Save new task list on localStorage↓
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
  };

  //Handle when click edit icon↓
  const handleEditTask = (id, data) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        // Update new data for the task that edited↓
        task.title = data;
      }
      return task;
    });
    setTaskList(newTaskList);
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
  };

  const handleChangeTaskStastus = (id) => {
    const newTaskList = taskList.map((task) => {
      //Find the task have status changed↓
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
