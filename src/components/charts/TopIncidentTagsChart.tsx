import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const TopIncidentTagsChart = () => {
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
        'Alcohol and/or Drug Issue',
        'Assault',
        'Bribery & Corruption',
        'Fraud',
        'Breach of Confidentiality',
        'Social Media Bullying',
        'Controversies of the GPA',
        'Sexual Harassment',
        'Workplace Health And Safety',
        'Theft',
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
      <h3>Top 10 Incident Tags</h3>
      <ReactApexChart options={options} series={series} type="bar" height={400} />
    </div>
  );
};

export default TopIncidentTagsChart;