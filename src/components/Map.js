import React from "react";
import { useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-cluster";
import MapSaver from "./MapSaver";
import AddressIcon from "./AddressIcon";
import FilterContext from "../context/FilterContext";

const Map = () => {
  const context = useContext(FilterContext);
  const addresses = context.results;

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
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup
          showCoverageOnHover={false}
          iconCreateFunction={createCustomClusterIcon}
        >
          {addresses.map((eachAddress) => {
            if (eachAddress) {
              const lat = eachAddress.lat;
              const lon = eachAddress.lon;

              if (lat && lon) {
                return (
                  <AddressIcon
                    avgPrice={eachAddress.avg_price}
                    lat={lat}
                    lon={lon}
                    address={eachAddress.address}
                    block={eachAddress.block}
                    street_name={eachAddress.street_name}
                  />
                );
              }
            }
          })}
          <MapSaver />
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );

  return <>{displayMap}</>;
};

export default Map;
