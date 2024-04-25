// Chart.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

const Chart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data');
        setData(response.data);
        createChart(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

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

export default Chart;

// const createChart = (data) => {
//   // To customize the chart appearance and options
//   // can use the 'data' prop to populate the chart

//   return (
//     <div>
//       {/* Render your bar chart here */}
//     </div>
//   );
// }

// export default Chart;