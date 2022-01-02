import "./VacationPlanner.css"
import React, {useState} from "react";
import Navigator from "./Navigator";
import StartPage from "../StartPage/StartPage";
import VacationCardPage from "./VacationMap/VacationCardPage";
import VacationAddPage from "./VacationAdd/VacationAddPage";
import VacationEditPage from "./VacationEdit/VacationEditPage";

const VacationPlanner = () => {
    const [showWindow, setWindowSelected] = useState("");

    return (
        <div>
            {showWindow === "" ?
                <StartPage/>
                : <div/>
            }
            {showWindow === "window1" ?
                <VacationCardPage/>
                : <div/>
            }
            {showWindow === "window2" ?
                <VacationAddPage/>
                : <div/>
            }
            {showWindow === "window3" ?
                <VacationEditPage/>
                : <div/>
            }
            <Navigator onWindowSelected={(windowName: string) => {
                setWindowSelected(windowName)
            }}/>

        </div>
    );
};

export default VacationPlanner;