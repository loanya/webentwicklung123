import "./VacationAddPage.css";
import VacationAdd from "./VacationAdd";


const VacationAddPage = () => {

    return (
        <div className={"page-container"}>
            <div className="logout">
                <button><a href="/public/index.html">Logout</a></button>
            </div>
            <div>
                <h1 className="h1_1">Eine Reise hinzufügen</h1>
            </div>

            <VacationAdd/>

        </div>);
};

export default VacationAddPage;