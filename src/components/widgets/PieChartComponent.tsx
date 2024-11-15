import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Registering necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend);

const PieChartComponent: React.FC = () => {
  // Sample data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], // Labels for pie chart segments
    datasets: [
      {
        label: 'Sales in 2024', // Dataset label
        data: [65, 59, 80, 81, 56, 55], // Data points for pie chart
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)', // Colors for the pie chart slices
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 205, 86, 0.6)',
        ],
        borderColor: 'rgba(0, 0, 0, 0.1)', // Border color for the slices
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales for 2024',
      },
      legend: {
        display: true,
        labels: {
            color: 'rgb(255, 99, 132)'
        }
        },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => `${tooltipItem.label}: ${tooltipItem.raw} units`, // Format tooltip
        },
      },
    },
  };

  return (
    <div className='w-full h-[300px]'>
      <h2>Sales Data Pie Chart</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChartComponent;
