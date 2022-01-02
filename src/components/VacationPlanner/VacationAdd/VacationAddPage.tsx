import "./VacationAddPage.css";
import VacationEdit from "../VacationEdit/VacationEdit";

const VacationAddPage = () => {
    return (
        <div className={"page-container"}>
            <div className="logout">
                <button><a href="/public/index.html">Logout</a></button>
            </div>
            <div>
                <h1 className="h1_1">Eine Reise hinzufügen</h1>
            </div>
            {/*<VacationEdit/>*/}
        </div>);
};

export default VacationAddPage;