import PrevTransactionsTable from "../components/PrevTransactionsTable";
import { useEffect, useState, useContext } from "react";
import FilterContext from "../context/FilterContext";
import { apiHDBGetSpecificAddress } from "../helperApi";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
// import "./Trend.css";
import AddrChart from "../components/AddrChart";

function Trend() {
  let initialLoad = true;

  const [loading, setLoading] = useState(true);

  const rowLimit = 10000;
  const totalRow = 0;
  const context = useContext(FilterContext);

  const params = useParams();

  useEffect(() => {
    if (initialLoad) {
      setLoading(true);
      apiHDBGetSpecificAddress({
        rowLimit: rowLimit,
        totalRow: totalRow,
        context: context,
        setLoading: setLoading,
        params: params,
      });
      initialLoad = false;
    }
  }, []);

  return (
    <>
      {loading ? (
        <ClipLoader color="#36d7b7" />
      ) : (
        <>
          <div
            className="table-container"
            style={{ display: "flex", "justify-content": "space-between" }}
          >
            <h1>
              Address: {params.block} {params.street_name}
            </h1>
            <h1>No of records: {context.resultsAddressChosen.length}</h1>
          </div>
          <AddrChart />
          <PrevTransactionsTable className="flex-child" />
        </>
      )}
    </>
  );
}
export default Trend;
