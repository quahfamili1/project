import PrevTransactionsTable from "../components/PrevTransactionsTable";
import { useEffect, useState, useContext } from "react";
import FilterContext from "../context/FilterContext";
import { apiHDBGetSpecificAddress } from "../helperApi";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

function Trend() {
  let initialLoad = true;
  const [loading, setLoading] = useState(true);
  const rowLimit = 10000;
  const totalRow = 0;
  const context = useContext(FilterContext);
  const params = useParams();

  // Get unique month and type and its average price
  const varUniqueMonth = [];
  const varTotalPricePerMonth = [];
  const varCountPerMonth = [];
  Array.from(context.resultsAddressChosen).map((row) => {
    const month = row.month;
    const price = row.resale_price;

    console.log(month, price);

    if (varUniqueMonth.indexOf(month) == -1) {
      varUniqueMonth.push(month);
      varTotalPricePerMonth.push(parseFloat(price));
      varCountPerMonth.push(1);
    } else {
      varTotalPricePerMonth[varUniqueMonth.indexOf(month)] += parseFloat(price);
      varCountPerMonth[varUniqueMonth.indexOf(month)] += 1;
    }
  });

  // //Get avg price
  const varAveragePrices = [];
  varTotalPricePerMonth.map((varTotalPricePerMonth, index) => {
    varAveragePrices.push(
      parseInt(varTotalPricePerMonth / varCountPerMonth[index])
    );
  });
  console.log("avg", varAveragePrices);

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

          <Line
            data={{
              labels: varUniqueMonth,
              datasets: [
                {
                  label: "Price by months",
                  data: varAveragePrices,
                },
              ],
            }}
          />
          <br></br>
          <PrevTransactionsTable className="flex-child" />
        </>
      )}
    </>
  );
}
export default Trend;
