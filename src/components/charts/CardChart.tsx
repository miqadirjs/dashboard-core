import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";

interface CardChartProps {
  title: string;
  value: number;
  percentage: string;
  color: string;
  data: number[];
  className?: string;
}

const CardChart: React.FC<CardChartProps> = ({
  title,
  value,
  percentage,
  color,
  data,
  className = "",
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

  const handleDownload = (type: "pdf" | "svg") => {
    console.log(`Download as ${type}`);
    // Implement actual logic here
  };

  const handleDropdownClick = (e: React.MouseEvent, type: "pdf" | "svg") => {
    e.preventDefault();
    handleDownload(type);
  };

  return (
    <div className={`card cardChart mb-4 ${className}`}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h6 className="card-title text-muted mb-0">{title}</h6>

          <div className="dropdown">
            <button
              className="btn btn-sm p-0 border-0 bg-transparent text-muted dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaDownload />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#" onClick={(e) => handleDropdownClick(e, "pdf")}>
                  Download PDF
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={(e) => handleDropdownClick(e, "svg")}>
                  Download SVG
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <h3 className="card-text mb-0">{value.toLocaleString()}</h3>
          <div
            className={`${
              percentage.startsWith("+") ? "text-success" : "text-danger"
            } d-flex align-items-center gap-1`}
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