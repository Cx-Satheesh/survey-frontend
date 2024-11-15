import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Registering necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const LineChartComponent: React.FC = () => {
  // Sample data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], // Labels for x-axis
    datasets: [
      {
        label: 'Sales in 2024', // Dataset label
        data: [65, 59, 80, 81, 56, 55], // Data points for the line chart
        fill: false, // Set to false if you do not want the area under the line to be filled
        borderColor: 'rgba(75, 192, 192, 1)', // Line color
        tension: 0.1, // Line smoothness, 0 means no smoothing
        borderWidth: 2, // Line thickness
        pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Point color
        pointRadius: 5, // Point size
        pointHoverRadius: 7, // Point size on hover
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales for 2024', // Title of the chart
      },
      legend: {
        display: true, // Display the legend
        labels: {
          color: 'rgb(75, 192, 192)', // Legend text color
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => `${tooltipItem.label}: ${tooltipItem.raw} units`, // Format tooltip
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month', // X-axis label
        },
      },
      y: {
        title: {
          display: true,
          text: 'Sales', // Y-axis label
        },
      },
    },
  };

  return (
    <div className='w-full h-[300px]'>
      <h2>Sales Data Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartComponent;
