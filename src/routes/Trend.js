import PrevTransactionsTable from "../components/PrevTransactionsTable";
import { useEffect, useState, useContext } from "react";
import FilterContext from "../context/FilterContext";
import {apiHDBGetSpecificAddress} from "../helperApi";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";



function Trend() {
  const [loading, setLoading] = useState(true);

  const rowLimit = 10000;
  const totalRow = 0;
  const context = useContext(FilterContext);

  const params = useParams()

  useEffect(() => {
      setLoading(true);
      apiHDBGetSpecificAddress({
        rowLimit: rowLimit,
        totalRow: totalRow,
        context: context,
        setLoading: setLoading,
        params: params
      });

  }, []);

  

  
  return (
    <>
            {loading ? (
        <ClipLoader color="#36d7b7" />
      ) : (
        <>
          <div className="table-container">
              <h2>Address: {params.block} {params.street_name}</h2>
              <h3>No of records: {context.resultsAddressChosen.length}</h3>
              <PrevTransactionsTable className="flex-child" />
          </div>
        </>
      )}
    </>
  );
}
export default Trend;
