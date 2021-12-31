import "./VacationEditPage.css";
import {useEffect, useState} from "react";

import Api from "../../services/Api";

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
    })
    return (
        <div className={"page-container"}> Vacation Edit Page
            {vacations.map(vacation =>
                <div>
                    <div>{vacation.vacation_name}</div>
                    <div>{vacation.country_name}</div>
                </div>)}
        </div>)
};

export default VacationEditPage;