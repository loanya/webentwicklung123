import "./VacationAddPage.css";
import VacationEdit from "../VacationEdit/VacationEdit";
import VacationAdd from "./VacationAdd";
import {useEffect, useState} from "react";
import Api from "../../../services/Api";

type Vacation = {
    id: string;
    vacation_list_id: string;
    vacation_name: string;
    country_name: string;
    start_date: Date;
    end_date: Date;
};

const VacationAddPage = () => {

    const [vacations, setVacations] = useState<Vacation>({
        id: "null",
        vacation_list_id: "null",
        vacation_name: "null",
        country_name: "null",
        start_date: new Date(),
        end_date: new Date()    })
    useEffect(() => {
        Api.setVacations(vacations)
            .then(response => response.json())
            .then(data => setVacations(data))
    }, [])
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