import "./App.scss";
import InputForm from "./components/InputForm/InputForm";
import TaskList from "./components/TaskList/TaskList";
import TasksLeft from "./components/TasksLeft/TasksLeft";

function App() {
  return (
    <div className="app">
      <h1 className="app_title">Todo List</h1>
      <InputForm />
      <TaskList />
      <TasksLeft />
    </div>
  );
}

export default App;
