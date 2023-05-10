import TaskCard from "../components/TaskCard/TaskCard";
import Nav from "../components/nav/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="Content">
        <TaskCard />
      </div>
    </div>
  );
}

export default App;
