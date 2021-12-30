import "./Navigator.css"
import window1 from "../../Window1.png"
import window2 from "../../Window2.png"
import window3 from "../../Window3.png"

const Navigator = ({onWindowSelected}: { onWindowSelected: (windowName: string) => void }) => {
    return (
        <div className={"flugzeugfenster-container"}>
            <div className={"flugzeugfenster-liste"}>
                <img src={window1} className={"flugzeugfenster"} onClick={() => onWindowSelected("window1")} alt="flugzeugfenster"/>
                <img src={window2} className={"flugzeugfenster"} onClick={() => onWindowSelected("window2")} alt="flugzeugfenster"/>
                <img src={window3} className={"flugzeugfenster"} onClick={() => onWindowSelected("window3")} alt="flugzeugfenster"/>
            </div>
        </div>);
};

export default Navigator;