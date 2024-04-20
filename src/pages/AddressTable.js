import React, { useState, useMemo } from "react";
import "./AddressTable.css";

const AddressTable = ({ addresses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = addresses.slice(firstIndex, lastIndex);
  const npage = Math.ceil(addresses.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);


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
            <th>Address</th>
            <th>Average Price (SGD)</th>
            <th>Show Map</th>
            <th>Show Previous Transactions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((address, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{address.address}</td>
              <td>{address.avg_price}</td>
              <td>{<button>a</button>}</td>
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
};

export default AddressTable;
