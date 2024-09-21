import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import { useState } from "react";
import ToggleProtectedContext from "./Utils/Context/ToggleProtectedContext";

function App() {
  const [togglePermission, setTogglePermission] = useState(false);

  return (
    <ToggleProtectedContext.Provider
      value={{ togglePermission, setTogglePermission }}
    >
      <div className="App">
        <Header />
        <div className="font-bold text-center text-3xl">
          Welcome to the World Front End....................
        </div>

        <Outlet></Outlet>
      </div>
    </ToggleProtectedContext.Provider>
  );
}

export default App;
