import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const TopOrganizationChart = () => {
  const options: ApexOptions = {
    chart: {
      type: 'bar' as const,
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 5,
        barHeight: '60%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'Former Contractor',
        'Employee',
        'Other',
        'Former Employee',
        'Voluntee',
        'Not Disclosed',
        'Coach',
        'Player',
        'Match Official',
        'Member of The Public',
      ],
    },
    colors: ['#BA01FF'],
    tooltip: {
      enabled: true,
    },
  };

  const series = [
    {
      data: [98, 85, 45, 35, 55, 25, 48, 33, 29, 19],
    },
  ];

  return (
    <div className="chart-card">
      <h3>Top 10 Reporter Relationship to Organizations</h3>
      <ReactApexChart options={options} series={series} type="bar" height={400} />
    </div>
  );
};

export default TopOrganizationChart;