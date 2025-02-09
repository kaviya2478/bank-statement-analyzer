import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = () => {
  // Data for the pie chart
  const data = {
    labels: ['Income', 'Expenses', 'Loan Payments', 'Others'],
    datasets: [
      {
        label: 'Transaction Categories',
        data: [300, 200, 100, 50],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',  // Income
          'rgba(255, 99, 132, 0.6)',  // Expenses
          'rgba(255, 206, 86, 0.6)',  // Loan Payments
          'rgba(54, 162, 235, 0.6)',  // Others
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        enabled: true,
      },
    },
    animation: {
      animateRotate: true,   // Animates the rotation of the chart
      animateScale: true,    // Animates scaling of the chart
      duration: 1500,        // Duration of the animation in milliseconds
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Transaction Categories
      </h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChartComponent;
