import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart: React.FC = () => {
  const series = [30, 25, 20, 25]; // Sample data for Online, Phone, Email, Mail

  const options: ApexCharts.ApexOptions = {
    labels: ['Online', 'Phone', 'Email', 'Mail'],
    colors: ['#00E396', '#FEB019', '#FF4560', '#775DD0'],
    legend: {
      position: 'top',
    },
    dataLabels: {
      enabled: true,
    },
  };

  return (
    <div>
      <h4>Reporting Channel</h4>
      <ReactApexChart options={options} series={series} type="pie" height={250} />
    </div>
  );
};

export default PieChart;