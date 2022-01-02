import "./VacationEdit.css"

type Vacation = {
    id: string;
    vacation_list_id: string;
    vacation_name: string;
    country_name: string;
    start_date: Date;
    end_date: Date;
};

const VacationEdit = ( {props} : {props : Vacation}) => {
    return (
            <form id="ReiseHinzufügen">
                <fieldset>
                    <legend className="bearbeitenBox1">Reise hinzufügen</legend>
                    <label htmlFor="Name">
                        Der Name ihrer Reise: <input className="field" name="ld" id="Name" placeholder={props.vacation_name} required/>
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
                                                                                       placeholder={props.start_date.toDateString()}
                                                                                       required type="date"/>
                    </label><br/>
                    <label htmlFor="Enddatum">
                        Ihr Reiseenddatum: &ensp;&ensp; <input className="field" name="ED" id="Enddatum"
                                                               placeholder={props.end_date.toDateString()} required
                                                               type="date"/>
                    </label><br/>
                    <input type="submit" id="buttonInsert"/>
                </fieldset>
            </form>
    )
}

export default VacationEdit;