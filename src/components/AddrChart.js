// Chart.js
import { useState, useContext } from 'react';
import Chart from 'chart.js/auto';
import FilterContext from '../context/FilterContext';

const AddrChart = () => {
  const [loading, setLoading] = useState(true);
  const context = useContext(FilterContext);
  const [data, setData] = useState(context.resultsAddressChosen);

    useEffect(() => {
      if (data && data.length > 0) {
        createChart(data);
        setLoading(false);
      }
    }, [data]);

  const createChart = (chartData) => {
    const addresses = chartData.map((item) => item.address);
    const avgPrices = chartData.map((item) => item.avg_price);

    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: addresses,
        datasets: [{
          label: 'Average Price (SGD)',
          data: avgPrices,
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
      <h2>Address Average Prices:</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <canvas id="myChart"></canvas>
      )}
    </div>
  );
};

export default AddrChart;