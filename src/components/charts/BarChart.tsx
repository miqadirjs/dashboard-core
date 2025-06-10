import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart: React.FC = () => {
  const series = [
    {
      name: 'Closed',
      data: [4000, 4200, 4100, 3900, 4300, 4400],
    },
    {
      name: 'Open',
      data: [1200, 1300, 1100, 1000, 1250, 1190],
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: { show: false },
    },
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024', '2025'],
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 6,
      },
    },
    legend: {
      position: 'top',
    },
    fill: {
      opacity: 1,
    },
    colors: ['#1E1E3F', '#D6E4FF'],
  };

  return (
    <div>
      <h4>Report Volumes by Time</h4>
      <ReactApexChart options={options} series={series} type="bar" height={300} />
    </div>
  );
};

export default BarChart;