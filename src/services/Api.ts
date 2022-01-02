const BASE_URL = (process.env.NODE_ENV === "production"
    ? "https://webtechbackend2.herokuapp.com"
    : "http://localhost:3000")

type Vacation = {
    id: string;
    vacation_list_id: string;
    vacation_name: string;
    country_name: string;
    start_date: Date;
    end_date: Date;
};



class Api {
    static async login(email: string, password: string): Promise<boolean> {
        const loginUrl = `${BASE_URL}/login`;

        const response = await fetch(loginUrl, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),
        });
        return response.status === 200;
    }

    static async getVacations(): Promise<Response> {
        const vacationsUrl = `${BASE_URL}/vacations`;
        const response = await fetch(vacationsUrl, {
            method: "GET",
            mode: "cors",
            credentials: "include",
        });
        return response
    }
    static async setVacations(vacation: Vacation): Promise<Response> {
        const vacationsUrl = `${BASE_URL}/vacations`;
        const response = await fetch(vacationsUrl, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ vacation }),
        });

        return response
    }
}

/*Fetch vacationlist
einen Request an die DB/ backend  senden und das backend schickt was zurück und damit zeige ich was an
for jeden ID eintrag den ich sehe mache es in der form die ich angezeigt bekomme javascript loop through json array return html element

Außerdem CSS datei anpassen und Karte zb

*/

export default Api;