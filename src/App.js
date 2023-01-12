import { useState, useContext, createContext } from "react";
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

export const TaskListContext = createContext();

function App() {
  return (
    <div className="app">
      <h1 className="app_title">Todo List</h1>
      <InputForm />
      <TaskList />
      <TaskManager />
    </div>
  );
}

export default App;
