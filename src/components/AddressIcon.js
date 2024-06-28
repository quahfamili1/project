import React, { useContext, useState } from "react";
import { Marker, Tooltip, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import "./AddressIcon.css";
import FilterContext from "../context/FilterContext";
import { useNavigate } from "react-router-dom";
import { apiLocalPostFavourite } from "../helperApi";

const AddressIcon = ({ address, lat, lon, avgPrice, block, street_name }) => {
  const customIcon = new Icon({
    iconUrl: require("../assets/320px-HD_transparent_picture.png"),
    iconSize: [35, 35],
  });

  const context = useContext(FilterContext);
  const navigate = useNavigate();

  const [disableFavButton, setDisableFavButton] = useState(false);

  const handlerShowPrevTransactions = (block, street_name) => {
    context.setIsSelected(true);
    //navigate(`../trend/${block}/${street_name}`);
    window.open(`../trend/${block}/${street_name}`);
  };

  const handlerAddToFavourite = (block, streetName) => {
    apiLocalPostFavourite({id: 1, block: block, streetName: streetName})
    setDisableFavButton(true);
  };

  return (
    <Marker position={[lat, lon]} icon={customIcon} opacity={1}>
      <Tooltip
        direction="center"
        offset={[0, 0]}
        opacity={1}
        permanent={true}
        className={"label"}
      >
        {parseInt(avgPrice)}
        <Popup>
          {address}
          <button
            onClick={() => handlerShowPrevTransactions(block, street_name)}
          >
            Show previous transactions
          </button>
          <button
            onClick={() => handlerAddToFavourite(block, street_name)}
            //disabled={disableFavButton}
          >
            Save to favourite
          </button>
        </Popup>
      </Tooltip>
    </Marker>
  );
};

export default AddressIcon;
