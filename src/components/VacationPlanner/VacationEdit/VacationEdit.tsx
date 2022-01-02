import "./VacationEdit.css"
import Api from "../../../services/Api";


type Vacation = {
    id: string;
    vacation_list_id: string;
    vacation_name: string;
    country_name: string;
    start_date: Date;
    end_date: Date;
};

const VacationEdit = ({props}: { props: Vacation }) => {
    return (
        <form id="ReiseHinzufügen">
            <fieldset>
                <legend className="bearbeitenBox1">Reise hinzufügen</legend>
                <label htmlFor="Name">
                    Der Name ihrer Reise: <input className="field" name="ld" id="Name" placeholder={props.vacation_name}
                                                 required/>
                </label><br/>
                <label>
                    Das Reiseland:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <input id="reiseland"
                                                                                          type="search" list="lL"
                                                                                          placeholder={props.country_name}
                                                                                          required/>
                    <datalist id="lL">
                    </datalist>
                </label><br/>
                <label htmlFor="Startdatum">
                    Ihr Startdatum:&nbsp; &nbsp; &nbsp; &nbsp;&ensp; &ensp; <input className="field" name="SD"
                                                                                   id="Startdatum"

                                                                                   required type="date"/>
                </label><br/>
                <label htmlFor="Enddatum">
                    Ihr Reiseenddatum: &ensp;&ensp; <input className="field" name="ED" id="Enddatum"
                                                           required
                                                           type="date"/>
                </label><br/>

                <input type="button" name = "löschen" onClick={() => Api.deleteVacations(props.id)} >Reise löschen</input>

                <input type="submit" id="buttonInsert"/>
            </fieldset>
        </form>
    )
}

export default VacationEdit;