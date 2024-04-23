import React, { useContext } from "react";
import { Marker, Tooltip, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { Icon } from "leaflet";
import "./AddressIcon.css";
import FilterContext from "../context/FilterContext";
import { useNavigate } from "react-router-dom";

const AddressIcon = ({ address, lat, lon, avgPrice, block, street_name }) => {
  const customIcon = new Icon({
    iconUrl: require("../asset/320px-HD_transparent_picture.png"),
    iconSize: [35, 35],
  });

  const context = useContext(FilterContext)
  const navigate = useNavigate()

  const handlerShowPrevTransactions = (block, street_name) => {
    context.setIsSelected(true);
    navigate(`../trend/${block}/${street_name}`);
  };

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
        <Popup>{address}
          <button onClick={() => handlerShowPrevTransactions(block, street_name)}>Show previous transactions</button>
        </Popup>
      </Tooltip>
    </Marker>
  );
};

export default AddressIcon;
