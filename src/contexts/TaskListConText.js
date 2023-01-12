import { useState, createContext } from "react";
export const TaskListContext = createContext();
function TaskListConText({ children }) {
  const initialValue = [
    {
      id: 1,
      title: "Go out with friends 😎  ",
      status: false,
      created_at: "2023-01-05T06:14:27.152Z",
    },
  ];
  const currentTaskList = JSON.parse(localStorage.getItem("taskList"));
  const [taskList, setTaskList] = useState(currentTaskList || initialValue);
  return (
    <TaskListContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </TaskListContext.Provider>
  );
}

export default TaskListConText;
