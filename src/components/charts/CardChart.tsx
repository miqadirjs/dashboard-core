// components/CardChart.tsx
import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { BsGraphUpArrow } from "react-icons/bs";

interface CardChartProps {
  title: string;
  value: number;
  percentage: string;
  color: string;
  data: number[];
}

const CardChart: React.FC<CardChartProps> = ({
  title,
  value,
  percentage,
  color,
  data,
}) => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "area",
      sparkline: { enabled: true },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      opacity: 0.3,
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        opacityFrom: 0.7,
        opacityTo: 0.1,
      },
    },
    colors: [color],
    tooltip: { enabled: false },
  };

  const chartSeries = [{ name: "data", data }];

  return (
    <div className="card cardChart mb-4">
      <div className="card-body">
        <h6 className="card-title text-muted">{title}</h6>
        <div className="d-flex align-items-center justify-content-between">
          <h3 className="card-text">{value.toLocaleString()}</h3>
          <div
            className={`mb-2 ${
              percentage.startsWith("+") ? "text-success" : "text-danger"
            }`}
          >
            {percentage} <BsGraphUpArrow />
          </div>
        </div>
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="area"
          height={70}
        />
      </div>
    </div>
  );
};

export default CardChart;
