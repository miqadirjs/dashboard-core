import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const ReporterIdentityChart = () => {
  const options: ApexOptions = {
    chart: {
      type: 'donut' as const, 
    },
    labels: ['Known', 'Partially Known', 'Fully Anonymous'],
    colors: ['#BA01FF', '#15133C', '#A0A0A0'],
    legend: {
      show: true,
      position: 'bottom',
      formatter: (label: string) => label,
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  };

  const series = [45, 25, 30]; // example values

  return (
    <div className="chart-card">
      <h3>Reporter Identity</h3>
      <ReactApexChart options={options} series={series} type="donut" height={350} />
    </div>
  );
};

export default ReporterIdentityChart;