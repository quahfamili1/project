import React from "react";
import Map from "../components/Map";
import { useEffect, useState, useContext } from "react";
import "./AveragePrice.css";
import AddressTable from "./AddressTable";
import { ClipLoader } from "react-spinners";
import { apiHDBGet } from "../helperApi";
import FilterContext from "../context/FilterContext";

const AveragePrice = () => {
  let initialLoad = true;

  const [loading, setLoading] = useState(false);

  const rowLimit = 10000;
  const totalRow = 0;
  const context = useContext(FilterContext);

  useEffect(() => {
    if (initialLoad) {
      setLoading(true);
      apiHDBGet({
        rowLimit: rowLimit,
        totalRow: totalRow,
        context: context,
        setLoading: setLoading,
      });
      initialLoad = false;
    }
  }, [context.selected]);

  return (
    <>
      {loading ? (
        <ClipLoader color="#36d7b7" />
      ) : (
        <>
          <h1>Results of average sales by Area</h1>
          <div className="table-container">
            <div>
              <AddressTable className="flex-child" />
            </div>
            <Map className="flex-child" />
          </div>
        </>
      )}
    </>
  );
};

export default AveragePrice;
