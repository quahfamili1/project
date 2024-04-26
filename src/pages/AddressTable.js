import React, { useState, useMemo, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./AddressTable.css";
import FilterContext from "../context/FilterContext";

const AddressTable = () => {
  const context = useContext(FilterContext);
  const addresses = context.results;

  const [goToPage, setGoToPage] = useState(1);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = addresses.slice(firstIndex, lastIndex);
  const npage = Math.ceil(addresses.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const navigate = useNavigate();

  const prevPage = (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      setCurrentPage((prevPage) => parseInt(prevPage) - 1);
    }
  };

  const nextPage = (e) => {
    e.preventDefault();
    if (currentPage < npage) {
      setCurrentPage((prevPage) => parseInt(prevPage) + 1);
    }
  };

  const handleGoToPage = (e) => {
    if (e.target.value == "") {
      setGoToPage(e.target.value);
    }
    if (e.target.value >= 1 && e.target.value <= npage) {
      setGoToPage(e.target.value);
      setCurrentPage(e.target.value);
    }
  };

  const handlerShowPrevTransactions = (address) => {
    const { block, street_name } = address;
    context.setIsSelected(true);
    navigate(`../trend/${block}/${street_name}`);
  };

  const handlerShowOnMap = (address) => {
    console.log("map", context.map);
    console.log("Address", address);
    const { lat, lon } = address;
    console.log(lat, lon);
    context.map.flyTo([lat, lon], 18);
  };

  return (
    <>
      <h3>No of records: {addresses.length}</h3>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Address</th>
            <th>Average Price (SGD)</th>
            <th>Show Map</th>
            <th>Show Previous Transactions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((address, i) => (
            <tr key={i}>
              <td>{(currentPage - 1) * recordsPerPage + i + 1}</td>
              <td>{address.address}</td>
              <td>{address.avg_price}</td>
              <td>
                {
                  <button onClick={() => handlerShowOnMap(address)}>
                    Show on map
                  </button>
                }
              </td>
              <td>
                {
                  <button onClick={() => handlerShowPrevTransactions(address)}>
                    Show previous transactions
                  </button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div class="navg">
          <button class="prev" onClick={(e) => prevPage(e)}>
            Prev
          </button>{" "}
          <div>
            Curent page: {currentPage}/{npage}
            <p>
              Go to page:
              <input value={goToPage} onChange={(e) => handleGoToPage(e)} />
            </p>
          </div>
          <button class="next" onClick={(e) => nextPage(e)}>
            Next
          </button>
        </div>
      </nav>
    </>
  );
};

export default AddressTable;
