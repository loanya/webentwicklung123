import "./VacationCardPage.css";
import VacationMapPage from "./VacationMapPage";
import React from "react";

const VacationCardPage = () => {
    return (
        <div className={"page-container"}>
            <div className="logout2">
                <button><a href="/public/index.html">Logout</a></button>
            </div>
            <div>
                <h1 className="h1_2">Ihre Reisekarte</h1>
            </div>
            <div>
                <VacationMapPage />
            </div>



        </div>

    );
};

export default VacationCardPage;