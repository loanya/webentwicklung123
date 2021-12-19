import React, { useState } from "react";
import './App.css';
import Login from "./components/Login"
import VacationPlanner from "./components/VacationPlanner"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <div className="App">
        <Login onLogin={() => setIsLoggedIn(true)} />
        {isLoggedIn ? <VacationPlanner /> : "Bitte erste einloggen"}
      </div>
  );
}

export default App;
