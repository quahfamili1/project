// Chart.js
import { useState, useContext } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import FilterContext from '../context/FilterContext';

const AddrChart = () => {

  const context = useContext(FilterContext);
  const [data, setData] = useState(context.resultsAddressChosen);
  console.log(data);
  // const addresses = context.resultsAddressChosen;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://data.gov.sg/api/action/datastore_search');
  //       setData(response.data);
  //       createChart(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const createChart = (data) => {
    const labels = data.map((item) => item.label);
    const values = data.map((item) => item.value);

    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Data Values',
          data: values,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  return (
    <div>
      <h2>Data from API:</h2>
      {data ? (
        <div>
          <canvas id="myChart" width="400" height="200"></canvas>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AddrChart;