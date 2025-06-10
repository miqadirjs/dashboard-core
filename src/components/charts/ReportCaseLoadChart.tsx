// src/components/ReportCaseLoadChart.tsx
import React from "react";
import ReactApexChart from "react-apexcharts";
import "bootstrap/dist/css/bootstrap.min.css";

const ReportCaseLoadChart: React.FC = () => {
  const series = [
    {
      name: "Total Reports",
      type: "column",
      data: [800, 500, 750, 450, 680, 900, 600, 700],
    },
    {
      name: "Open Reports",
      type: "line",
      data: [50, 30, 40, 20, 35, 45, 32, 38],
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [0, 3],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "35%",
        borderRadius: 4,
      },
    },
    colors: ["#BA01FF", "#15133C"],
    markers: {
      size: 6,
    },
    xaxis: {
      categories: [
        "Darren Murphy",
        "Laila Djemalovic",
        "Suzanne Murphy",
        "Astrid Milne",
        "Dylan Bohnen",
        "Gonzalo Balbuena",
        "Natasha Catubig",
        "Siobhan Pedraza",
      ],
      labels: {
        rotate: -45,
        style: {
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      min: 0,
      max: 1000,
      tickAmount: 5,
      labels: {
        formatter: (val: number) => `${val}`,
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  };

  return (
    <div className="mt-4">
      <div className="bg-white p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="mb-0 fw-bold text-muted">Report Case Load</h6>
          <div className="d-flex gap-3 small">
            <div className="d-flex align-items-center gap-1">
              <div
                className="rounded"
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#BA01FF",
                }}
              ></div>
              Total Reports
            </div>
            <div className="d-flex align-items-center gap-1">
              <div
                className="rounded"
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#15133C",
                }}
              ></div>
              Open Reports
            </div>
          </div>
        </div>
        <ReactApexChart options={options} series={series} type="line" height={350} />
      </div>
    </div>
  );
};

export default ReportCaseLoadChart;