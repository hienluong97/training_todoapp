import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./common/_main.scss";
import TaskListConText from "./contexts/TaskListConText";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <TaskListConText>
    <App />
  </TaskListConText>
  // </React.StrictMode>
);
