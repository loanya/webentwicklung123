import React from "react";
import {GeoJSON, MapContainer, TileLayer} from "react-leaflet";
import mapData from "../../../mapdata/countries.json";
import "leaflet/dist/leaflet.css";
import "./VacationMapPage.css";
import Api from "../../../services/Api";
import L from 'leaflet'

const VacationMapPage = () => {

    const myStyle = {
        fillColor: "#5c5c5c",
        color: "black",
        /*
        weight: 2,
        fillOpacity: 0.95,
        */
    };
    const loadData = async () => {
        const data = await fetch('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_countries.geojson');
        return data.json();
    }

    const loadVisitedData = async () => {
        const data = await Api.getVacations()
            .then(response => response.json())
        return data.map(v => v.country_name)
    }

    const displayData = async () => {
        const visitedCountries = await loadVisitedData()
        const geoJson = await loadData();
        const filteredData = {
            ...geoJson,
            features: geoJson.features.filter(feature =>
                !visitedCountries.includes(feature.properties.admin))
        };
        return filteredData
    }

    displayData()

    return (
        <div>
            <MapContainer style={{height: "50vh"}} zoom={2} center={[20, 100]}>
                <GeoJSON style={myStyle} data={mapData.features} filter={displayData}/>
                <TileLayer
                    attribution={'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery <a href="https://www.mapbox.com/">Mapbox</a>'}
                    url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                    maxZoom={4}
                    id={'mapbox/streets-v11'}
                    tileSize={512}
                    zoomOffset={-1}
                    accessToken={'your.mapbox.access.token'}>
                </TileLayer>
            </MapContainer>
        </div>
    );
};


export default VacationMapPage;