import apiHDB from "./api/apiHDB";
import { hdbCoord } from "./data/hdbCoord";

export const apiHDBGet = async ({
  rowLimit,
  totalRow,
  context,
  setLoading,
}) => {
  try {
    console.log("selected: " + context.selected);
    console.log("latest: " + context.filters.length - 1);
    const { town, flat_type, storey_range, flat_model } =
      context.selected < context.filters.length
        ? context.filters[context.selected]
        : context.filters[context.filters.length - 1];

    let filter =
      "{" +
      (town != "All" ? '"town": "' + town + '",' : "") +
      (flat_type != "All" ? '"flat_type": "' + flat_type + '",' : "") +
      (storey_range != "All" ? '"storey_range": "' + storey_range + '",' : "") +
      (flat_model != "All" ? '"flat_model": "' + flat_model + '",' : "");

    if (filter[filter.length - 1] == ",") {
      filter = filter.slice(0, -1);
    }

    filter += "}";

    /*
    let filter = "{"

    if (town != "All"){filter += `"town": "${town}",`}
    if (flat_type != "All"){filter += `"flat_type": "${flat_type}",`}
    if (storey_range != "All"){filter += `"storey_range": "${storey_range}",`}
    if (flat_model != "All"){filter += `"flat_model": "${flat_model}",`}

    if (filter[filter.length - 1] == ",") {filter = filter.slice(0, -1);}

    filter += "}"
    */

    console.log(filter);

    //First call to check how many rows are there
    const response = await apiHDB.get(``, {
      params: {
        resource_id: "d_8b84c4ee58e3cfc0ece0d773c8ca6abc",
        limit: 1,
        filters: filter,
      },
    });

    console.log("response", response);
    totalRow = response.data.result.total;
    console.log("totalRow", totalRow);

    //To delete later
    // totalRow = 15;

    //Set rowLimit if totalRow < rowLimit
    if (totalRow < rowLimit) {
      rowLimit = totalRow;
    }

    const promises = [];

    //Add filter

    const filters = context.filters;
    filters.map((filter) => {
      if (filter.key == "address") {
      }
    });

    let rowRead = 0;
    while (rowRead < totalRow) {
      promises.push(
        await apiHDB.get(``, {
          params: {
            resource_id: "d_8b84c4ee58e3cfc0ece0d773c8ca6abc",
            limit: rowLimit,
            offset: rowRead,
            filters: filter,
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
    const varBlock = [];
    const varStreetName = [];
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
        varBlock.push(hdb.block);
        varStreetName.push(hdb.street_name);
        varTotalPricePerAddresses.push(parseFloat(hdb.resale_price));
        varCountPerAddresses.push(1);
      } else {
        varTotalPricePerAddresses[varUniqueAddresses.indexOf(hdbAddress)] +=
          parseFloat(hdb.resale_price);
        varCountPerAddresses[varUniqueAddresses.indexOf(hdbAddress)] += 1;
      }
    });

    console.log("listofHdb", listOfHdb);

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
            block: varBlock[index],
            street_name: varStreetName[index],
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

export const apiHDBGetSpecificAddress = async ({
  rowLimit,
  totalRow,
  context,
  setLoading,
  params,
}) => {
  try {
    //Get block and street name
    const { block, street_name } = params;

    const filters = `{"block":"${block}", "street_name":"${street_name}"}`;
    console.log("filters", filters);

    //First call to check how many rows are there
    const response = await apiHDB.get(``, {
      params: {
        resource_id: "d_8b84c4ee58e3cfc0ece0d773c8ca6abc",
        limit: 1,
        filters: filters,
      },
    });

    console.log("response", response);
    totalRow = response.data.result.total;
    console.log("totalRow", totalRow);

    //Set rowLimit if totalRow < rowLimit
    if (totalRow < rowLimit) {
      rowLimit = totalRow;
    }

    const promises = [];

    let rowRead = 0;
    while (rowRead < totalRow) {
      promises.push(
        await apiHDB.get(``, {
          params: {
            resource_id: "d_8b84c4ee58e3cfc0ece0d773c8ca6abc",
            limit: rowLimit,
            offset: rowRead,
            filters: filters,
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

    console.log(listOfHdb);

    context.setResultsAddressChosen(listOfHdb);

    console.log("context in helperapi", context);

    setLoading(false);
  } catch (error) {
    console.log(error.message);
  }
};
