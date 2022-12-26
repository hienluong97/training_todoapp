import "./App.scss";
import InputForm from "./components/InputForm/InputForm";
import TaskList from "./components/TaskList/TaskList";
import TasksLeft from "./components/TasksLeft/TasksLeft";
import Title from "./components/Title/Title";

function App() {
  return (
    <div className="App">
      <Title />
      <InputForm />
      <TaskList />
      <TasksLeft />
    </div>
  );
}

export default App;
