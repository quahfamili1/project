import React from "react";
import { Marker, Tooltip, Popup } from "react-leaflet";
import L from "leaflet";
import { Icon } from "leaflet";
import "./AddressIcon.css";

const AddressIcon = ({ address, lat, lon, avgPrice }) => {
  const customIcon = new Icon({
    iconUrl: require("../asset/320px-HD_transparent_picture.png"),
    iconSize: [35, 35],
  });

  return (
    <Marker position={[lat, lon]} icon={customIcon} opacity={1}>
      <Tooltip
        direction="center"
        offset={[0, 0]}
        opacity={1}
        permanent={true}
        className={
          "label"
        }
      >
        {parseInt(avgPrice)}
        <Popup>{address}</Popup>
      </Tooltip>
    </Marker>
  );
};

export default AddressIcon;
