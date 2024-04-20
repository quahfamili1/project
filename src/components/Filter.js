import apiHDB from "./api/apiHDB";
import { useState, useEffect } from "react";
import { filterContext } from "./context/FilterContext";

function Filter() {
  let initialLoad = true;
  const rowLimit = 10000;
  //const [rowRead, setRowRead] = useState(0)
  const [totalRow, setTotalRow] = useState(0);
  // const [hdbData, setHdbData] = useState([]);

  let rowRead = 0;

  useEffect(() => {
    if (initialLoad) {
      apiHDBGet();
      initialLoad = false;
    }
  }, []);

  const apiHDBGet = async () => {
    try {
      //First call to check how many rows are there
      const response = await apiHDB.get(``, {
        params: {
          resource_id: "d_8b84c4ee58e3cfc0ece0d773c8ca6abc",
          limit: 1,
        },
      });

      console.log("response", response);
      setTotalRow(response.data.result.total);
      console.log("totalRow", totalRow);

      const promises = [];

      while (rowRead <= totalRow) {
        promises.push(
          await apiHDB.get(``, {
            params: {
              resource_id: "d_8b84c4ee58e3cfc0ece0d773c8ca6abc",
              limit: rowLimit,
              offset: rowRead,
            },
          })
        );

        //setRowRead(prevState => prevState + rowLimit);
        rowRead += rowLimit;
        console.log("rowRead", rowRead);
      }

      console.log("promises", promises);

      //Use Promise.all combinator
      const result = await Promise.all(promises);

      console.log("result = " + result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return <></>;
}

export default Filter;
