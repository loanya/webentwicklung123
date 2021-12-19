import React, { useState } from "react";
import './App.css';
import Login from "./components/Login"
import VacationPlanner from "./components/VacationPlanner"
import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
        {isLoggedIn ?
            <VacationPlanner />
            :
            <Login onLogin={() => setIsLoggedIn(true)} />}
        <Footer/>
    </div>
  );
}

export default App;
