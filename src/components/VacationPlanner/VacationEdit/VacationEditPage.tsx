import "./VacationEditPage.css";
import {useEffect, useState} from "react";

import Api from "../../../services/Api";
import VacationEdit from "./VacationEdit";

type Vacation = {
    id: string;
    vacation_list_id: string;
    vacation_name: string;
    country_name: string;
    start_date: Date;
    end_date: Date;
};

const VacationEditPage = () => {
    const [vacations, setVacations] = useState<Vacation[]>([])
    useEffect(() => {
        Api.getVacations()
            .then(response => response.json())
            .then(data => setVacations(data))
    }, [])
    return (
        <div className={"page-container"}>
            <div className="logout">
                <button><a href="/public/index.html">Logout</a></button>
            </div>
            <div>
                <h1 className="h1_3">Eine Reise bearbeiten oder löschen</h1>
            </div>

            {/*{vacations.map(vacation =>*/}
            {/*    <VacationEdit />)*/}
            {/*}*/}
        </div>)
};

export default VacationEditPage;