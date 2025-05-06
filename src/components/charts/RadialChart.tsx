import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface RadialChartProps {
  series: number[]; // The series will be an array of numbers
}

const RadialChart: React.FC<RadialChartProps> = ({ series }) => {
  const options: ApexOptions = {
    chart: {
      type: 'radialBar',
      offsetY: 0,
      sparkline: { enabled: true },
    },
    colors: ['#07caac'], // Fill color
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#f2f2f2',
          strokeWidth: '100%',
          margin: 5,
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            opacity: 0.1,
            blur: 4,
            color: '#000',
          },
        },
        dataLabels: {
          name: {
            show: false, // Hide the name of the radial bar
          },
          value: {
            show: true, // Show the value of the radial bar
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#000',
            formatter: (val: number) => `${val}%`, // Display percentage with value
          },
        },
      },
    },
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    fill: {
      type: 'solid',
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="radialBar"
      height={120}
    />
  );
};

export default RadialChart;