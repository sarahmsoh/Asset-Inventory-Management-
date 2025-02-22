import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const AssetChart = ({ assets }) => {
  const categories = [...new Set(assets.map(a => a.category))];
  
  const data = {
    labels: categories,
    datasets: [{
      label: 'Assets by Category',
      data: categories.map(cat => 
        assets.filter(a => a.category === cat).length
      ),
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'
      ],
      borderWidth: 1
    }]
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20
        }
      }
    },
    maintainAspectRatio: false
  };

  return (
    <div style={{ height: '300px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default AssetChart;