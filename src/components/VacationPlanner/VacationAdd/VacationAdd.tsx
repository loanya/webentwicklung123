import "./VacationAdd.css"
import Api from "../../../services/Api";
import {useEffect, useState} from "react";

type Vacation = {
    id: string;
    vacation_list_id: string;
    vacation_name: string;
    country_name: string;
    start_date: Date;
    end_date: Date;
};

const LabeledInput = ({
                          label,
                          type,
                          value,
                          setValue,
                      }: {
    label: string;
    type: string;
    value: string;
    setValue: (newValue: string) => void;
}) => {
    return (
        <label>
            {label}:
            <input
                type={type}
                required
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        </label>
    );
};

const VacationAdd = () => {

    const [vacations, setVacations] = useState<Vacation>({
        id: "null",
        vacation_list_id: "863915d7-eea2-43c8-ae5a-1fb43c329553",
        vacation_name: "null",
        country_name: "null",
        start_date: new Date(),
        end_date: new Date()
    })


    const submitForm = (event: React.FormEvent) => {
        event.preventDefault();

        Api.setVacations(vacations).then(() => {
            console.log("Vacation Added")
        })
    };

    return (
        <form id="ReiseHinzufügen" onSubmit={submitForm}>
            <fieldset>
                <legend className="bearbeitenBox1">Reise hinzufügen</legend>
                <LabeledInput
                    label="Reisename"
                    type="text"
                    value={vacations.vacation_name}
                    setValue={(val) => setVacations({...vacations, vacation_name:val})}
                />
                <LabeledInput
                    label="Das Reiseland"
                    type="text"
                    value={vacations.country_name}
                    setValue={(val) => setVacations({...vacations, country_name:val})}
                />

                <LabeledInput
                    label="Start Datum"
                    type="date"
                    value={vacations.start_date.toISOString().substring(0, 10)}
                    setValue={(val) => setVacations({...vacations, start_date:new Date(val)})}
                />
                <LabeledInput
                    label="End Datum"
                    type="date"
                    value={vacations.end_date.toISOString().substring(0, 10)}
                    setValue={(val) => setVacations({...vacations, end_date: new Date(val)})}
                />
                <input type="submit" id="buttonInsert"/>
            </fieldset>
        </form>
    )
}

export default VacationAdd;