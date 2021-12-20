import React, {useState} from "react";
import './App.css';
import Login from "./components/Login/Login"
import VacationPlanner from "./components/VacationPlanner/VacationPlanner"
import Footer from "./components/Footer/Footer";
import logo from "./Reiselogo.png";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="App">
            <img src={logo} className="logo" alt="logo"/>
            {isLoggedIn ?
                <VacationPlanner/>
                :
                <Login onLogin={() => setIsLoggedIn(true)}/>}
            <Footer/>
        </div>
    );
}

export default App;
