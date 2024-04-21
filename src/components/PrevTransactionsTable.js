import React, { useContext, useState } from 'react'

import "./PrevTransactionsTable.css";
import FilterContext from "../context/FilterContext";
import { useNavigate } from 'react-router-dom';

const PrevTransactionsTable = () => {
  const context = useContext(FilterContext)
  const addresses = context.resultsAddressChosen

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = addresses.slice(firstIndex, lastIndex);
  const npage = Math.ceil(addresses.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  console.log("records", records)

  const prevPage = () => {

  }

  const nextPage = () => {
    
  }

  const changeCurrentPage = () => {
    
  }


  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Month</th>
            <th>Flat Type</th>
            <th>Resale Price (SGD)</th>
          </tr>
        </thead>
        
        <tbody>
          {records.map((record, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{record.month}</td>
              <td>{record.flat_type}</td>
              <td>{record.resale_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul>
          <li><a href='#' onClick={prevPage}>Prev</a></li>
          {numbers.map((number, i) => (
            <li>
                <a href="#" onClick={changeCurrentPage}>{number}</a>

            </li>

          ))}
          <li><a href='#' onClick={nextPage}>Next</a></li>

        </ul>
      </nav>
    </>
  );
}

export default PrevTransactionsTable