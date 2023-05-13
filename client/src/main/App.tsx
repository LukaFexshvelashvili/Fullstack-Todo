import { createContext, useEffect, useState } from "react";
import Nav from "../components/nav/Nav";
import Home from "../pages/Home/Home";
import "./App.css";

export const Loader = createContext<
  React.Dispatch<React.SetStateAction<boolean>>
>(() => {});
function App() {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setloader(false);
  }, []);

  return (
    <Loader.Provider value={setloader}>
      <div className="App">
        <div className={`Loader${loader ? " SLoader" : ""}`}>
          <div className="LoaderInside"></div>
        </div>
        <Nav />
        <div className="Content">
          <Home />
        </div>
      </div>
    </Loader.Provider>
  );
}

export default App;
