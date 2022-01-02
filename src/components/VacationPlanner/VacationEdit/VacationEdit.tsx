import "./VacationEdit.css"

const VacationEdit = () => {
    return (
            <form id="ReiseHinzufügen">
                <fieldset>
                    <legend className="bearbeitenBox1">Reise hinzufügen</legend>
                    <label htmlFor="Name">
                        Der Name ihrer Reise: <input className="field" name="ld" id="Name" placeholder="abc" required/>
                    </label><br/>
                    <label>
                        Das Reiseland:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <input id="reiseland"
                                                                                              type="search" list="lL"
                                                                                              required/>
                        <datalist id="lL">
                        </datalist>
                    </label><br/>
                    <label htmlFor="Startdatum">
                        Ihr Startdatum:&nbsp; &nbsp; &nbsp; &nbsp;&ensp; &ensp; <input className="field" name="SD"
                                                                                       id="Startdatum"
                                                                                       placeholder="xyz"
                                                                                       required type="date"/>
                    </label><br/>
                    <label htmlFor="Enddatum">
                        Ihr Reiseenddatum: &ensp;&ensp; <input className="field" name="ED" id="Enddatum"
                                                               placeholder="xyz" required
                                                               type="date"/>
                    </label><br/>
                    <input type="submit" id="buttonInsert"/>
                </fieldset>
            </form>
    )
}

export default VacationEdit;