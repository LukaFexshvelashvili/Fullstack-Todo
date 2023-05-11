import Nav from "../components/nav/Nav";
import Home from "../pages/Home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="Content">
        <Home />
      </div>
    </div>
  );
}

export default App;
