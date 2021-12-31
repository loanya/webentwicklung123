import React, { Component} from "react";
import {MapContainer, GeoJSON, TileLayer} from "react-leaflet";
import mapData from "./../../mapdata/countries.json";
import "leaflet/dist/leaflet.css";
import "./VacationMapPage.css";

class VacationMapPage extends Component {
    state = { };

    componentDidMount() {
        console.log(mapData);
    }

    /*variable*/
    myStyle = {
        fillColor: "#5c5c5c",
        color: "black",
        /*
        weight: 2,
        fillOpacity: 0.95,
        */
    };

    render() {
        return (
            <div>
                <MapContainer style={{height: "50vh"}} zoom={2} center={[20, 100]}>
                    <GeoJSON style={this.myStyle} data={mapData.features}/>
                    const MyMap = L.map('map').setView([51.505, -0.09], 13);
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
    }
}

export default VacationMapPage;