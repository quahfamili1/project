import React, { useContext, useState } from "react";

import "./PrevTransactionsTable.css";
import FilterContext from "../context/FilterContext";
import { useNavigate } from "react-router-dom";

const PrevTransactionsTable = () => {
  const context = useContext(FilterContext);
  const addresses = context.resultsAddressChosen;

  const [goToPage, setGoToPage] = useState(1);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = addresses.slice(firstIndex, lastIndex);
  const npage = Math.ceil(addresses.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  console.log("records", records);

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

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Address</th>
            <th>Month</th>
            <th>Flat Model</th>
            <th>Flat Type</th>
            <th>Floor Area (sqm)</th>
            <th>Lease commencement date</th>
            <th>Storey range</th>
            <th>Resale Price (SGD)</th>
            <th>Price/Floor Area (SGD/m2)</th>
          </tr>
        </thead>

        <tbody>
          {records.map((record, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{record.block + " " + record.street_name}</td>
              <td>{record.month}</td>
              <td>{record.flat_model}</td>
              <td>{record.flat_type}</td>
              <td>{record.floor_area_sqm}</td>
              <td>{record.lease_commence_date}</td>
              <td>{record.storey_range}</td>
              <td>{record.resale_price}</td>
              <td>
                {parseInt(
                  parseFloat(record.resale_price) /
                    parseFloat(record.floor_area_sqm)
                )}
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

export default PrevTransactionsTable;
