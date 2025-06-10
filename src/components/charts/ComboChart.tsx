import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ComboChart: React.FC = () => {
  const series = [
    {
      name: 'Total Reports',
      type: 'column',
      data: [40, 35, 38, 34, 36, 44, 39],
    },
    {
      name: 'Open Reports',
      type: 'line',
      data: [25, 20, 22, 19, 21, 23, 20],
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      toolbar: { show: false },
    },
    stroke: {
      width: [0, 4],
    },
    xaxis: {
      categories: [
        'Doreen Murphy', 'Laila Oplenovski', 'Suzanne Murphy',
        'Astrid Mike', 'Dylan Borren', 'Georvis Babicuso', 'Nathaniel Catalag',
      ],
    },
    legend: {
      position: 'top',
    },
    colors: ['#00BFFF', '#00E396'],
    plotOptions: {
      bar: {
        borderRadius: 6,
      },
    },
  };

  return (
    <div>
      <h4>Report Case Load</h4>
      <ReactApexChart options={options} series={series} type="line" height={300} />
    </div>
  );
};

export default ComboChart;