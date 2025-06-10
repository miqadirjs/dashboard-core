import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart: React.FC = () => {
  const series = [43, 57]; // 43% Yes, 57% No

  const options: ApexCharts.ApexOptions = {
    labels: ['Yes', 'No'],
    colors: ['#00C49A', '#F5F5F5'],
    legend: {
      position: 'top',
    },
    dataLabels: {
      enabled: false,
    },
  };

  return (
    <div>
      <h4>Protected Disclosure</h4>
      <ReactApexChart options={options} series={series} type="donut" height={250} />
    </div>
  );
};

export default DonutChart;