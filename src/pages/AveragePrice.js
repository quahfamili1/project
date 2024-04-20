import React from "react";
import Map from "../components/Map";
import AveragePriceRow from "../components/AveragePriceRow";
import { useEffect, useState } from "react";
import { data } from "./data/data";
import { hdbCoord } from "./data/hdbCoord";
import AddressList from "./AddressList";
import "./AveragePrice.css";
import AddressTable from "./AddressTable";
import {ClipLoader} from "react-spinners"

let initialLoad = true;

const AveragePrice = () => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      apiHDBGet();
      initialLoad = false;
      setLoading(false);
    }
  }, []);

  const apiHDBGet = () => {
    //Read fake data
    const listOfHdb = data.result.records;

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

    setAddresses(listOfHdbWithCoord);
  };

  return (
    <>
      {loading ? (
        <ClipLoader color="#36d7b7" />
      ) : (
        <>
          <div>AveragePrice</div>
          <div className="table-container">
            <div>
              {/*{addresses.map((address) => {
            return <AveragePriceRow address={address}/>
          })}*/}
              {console.log(addresses)}
              <AddressTable className="flex-child" addresses={addresses} />
            </div>
            <Map className="flex-child" addresses={addresses} />
          </div>
        </>
      )}
    </>
  );
};

export default AveragePrice;
