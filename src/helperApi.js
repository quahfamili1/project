import apiHDB from "./api/apiHDB";
import { useState, useEffect } from "react";
import { hdbCoord } from "./data/hdbCoord";

const apiHDBGet = async ({ rowLimit, totalRow, context, setLoading }) => {
  try {
    //First call to check how many rows are there
    const response = await apiHDB.get(``, {
      params: {
        resource_id: "d_8b84c4ee58e3cfc0ece0d773c8ca6abc",
        limit: 1,
      },
    });

    console.log("response", response);
    totalRow = response.data.result.total;
    console.log("totalRow", totalRow);

    //To delete later
    totalRow = 15;

    //Set rowLimit if totalRow < rowLimit
    if (totalRow < rowLimit) {
      rowLimit = totalRow;
    }

    const promises = [];

    //Add filter

    let rowRead = 0;
    while (rowRead < totalRow) {
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
    const apiCallResults = await Promise.all(promises);

    //Save in listofHdb
    const listOfHdb = [];

    apiCallResults.map((apiCallResult) => {
      const records = apiCallResult.data.result.records;
      console.log("records", records);
      records.map((record) => {
        listOfHdb.push(record);
      });
    });

    //Get unique addresses only and its average price
    const varUniqueAddresses = [];
    const varTotalPricePerAddresses = [];
    const varCountPerAddresses = [];
    listOfHdb.map((hdb) => {
      const hdbAddress = hdb.block + " " + hdb.street_name;

      if (varUniqueAddresses.indexOf(hdbAddress) == -1) {
        // not found
        /*
        setUniqueAddresses((prevState) => [...prevState, hdbAddress])
        setTotalPricePerUnitAddresses((prevState) => [...prevState, hdb.resale_price])
        setCountAddresseses((prevState) => [...prevState, 1])
        */
        varUniqueAddresses.push(hdbAddress);
        varTotalPricePerAddresses.push(parseFloat(hdb.resale_price));
        varCountPerAddresses.push(1);
      } else {
        varTotalPricePerAddresses[varUniqueAddresses.indexOf(hdbAddress)] +=
          parseFloat(hdb.resale_price);
        varCountPerAddresses[varUniqueAddresses.indexOf(hdbAddress)] += 1;
      }
    });

    console.log("listofHdb", listOfHdb)

    //Get avg price
    const varAveragePrices = [];
    varTotalPricePerAddresses.map((varTotalPricePerAddress, index) => {
      varAveragePrices.push(
        parseInt(varTotalPricePerAddress / varCountPerAddresses[index])
      );
    });

    //Get coord of HDB
    const listOfHdbWithCoord = varUniqueAddresses.map(
      (varUniqueAddress, index) => {
        const hdbAddress = varUniqueAddress;
        const filterResult = hdbCoord.filter(
          (eachHdbCoord) => eachHdbCoord.Address === hdbAddress
        );
        if (filterResult.length > 0) {
          const newHdb = {
            address: varUniqueAddress,
            lat: filterResult[0].Lat,
            lon: filterResult[0].Lon,
            avg_price: varAveragePrices[index],
          };

          return newHdb;
        }
      }
    );

    //context.results = listOfHdb
    context.setResults(listOfHdbWithCoord);

    console.log("context in helperapi", context);

    setLoading(false);
  } catch (error) {
    console.log(error.message);
  }
};

export default apiHDBGet;
