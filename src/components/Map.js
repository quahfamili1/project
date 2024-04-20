import React from "react";
//import { apiLTA, apiHDB } from "../api/api";
import { useEffect, useState, useContext } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
//import Detail from "../components/Detail";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon } from "leaflet";
//import hdbCarparkLocations from "../data/hdbCarparkLocations";

import AddressIcon from "./AddressIcon";
import FilterContext from "../context/FilterContext";

const Map = () => {
  
  //const map = useMap();
  const context = useContext(FilterContext)
  console.log("context in map", context)
  const addresses = context.results
  console.log("addresses in map", context.results)

  const createCustomClusterIcon = (cluster) => {
    const allChildMarkers = cluster.getAllChildMarkers();
    const total = allChildMarkers.reduce((sum, marker) => {
      const available = parseFloat(marker.options.children.props.children[0]);
      return sum + available;
    }, 0);

    return L.divIcon({
      html:
        "<b class='cluster-icon'>" +
        parseInt(total / allChildMarkers.length) +
        "</b>",
      className: "",
    });
  };

  const displayMap = (
    <div className="map-container">
      <MapContainer
        center={[1.368791033335324, 103.80777095700411]}
        zoom={12}
        scrollWheelZoom={true}
      >
        {/*<button onClick={() => map.panTo([130, 130])}></button>*/}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup
          showCoverageOnHover={false}
          iconCreateFunction={createCustomClusterIcon}
        >
          {addresses.map((eachAddress) => {
            if (eachAddress)
            {
              const lat = eachAddress.lat;
              const lon = eachAddress.lon;
  
              if (lat && lon) {
                return (
                  <AddressIcon
                    avgPrice={eachAddress.avg_price}
                    lat={lat}
                    lon={lon}
                    address={eachAddress.address}
                  />
                );
              }
            }

          })}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
  

  return (
    <>
      {displayMap}
    </>

  );
};

export default Map;
