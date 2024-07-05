import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import PropTypes from 'prop-types';

const Chart = ({ data }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const changes = {
          '1h': data?.quote.USD.percent_change_1h,
          '24h': data?.quote.USD.percent_change_24h,
          '7d': data?.quote.USD.percent_change_7d,
          '30d': data?.quote.USD.percent_change_30d,
          '60d': data?.quote.USD.percent_change_60d,
          '90d': data?.quote.USD.percent_change_90d,
        };

        const labels = Object.keys(changes);
        const values = Object.values(changes);

        const chartData = {
          labels: labels,
          datasets: [
            {
              label: 'Percentage Change in Price',
              data: values,
              borderColor: 'rgba(75,192,192,1)',
              backgroundColor: 'rgba(118, 98, 234, 0.1)',
              borderWidth: 1,
              fill: 'start', 
            },
          ],
        };

        setChartData(chartData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [data]);

  const options = {
    maintainAspectRatio: false, 
    responsive: true, 
     scales: {
      y: {
        display: false, 
      },
      x: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
    },
    elements: {
      point: {
        radius: 0, 
      },
      line: {
        tension: 0,
        borderWidth: 0, 
      },
    },
  };

  return (
    <div className="chart-container" style={{ height: '300px', width: '100%' }}>
      {chartData?.datasets ? <Line data={chartData} options={options} /> : <p>Loading...</p>}
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Chart;
