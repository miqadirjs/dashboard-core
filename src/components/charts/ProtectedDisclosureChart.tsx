import React from "react";
import ApexCharts from "react-apexcharts";

const ProtectedDisclosureChart: React.FC = () => {
  const series = [43];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "radialBar",
      offsetY: -10,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          margin: 0,
          size: "70%",
          background: "transparent",
          position: "front"
        },
        track: {
          background: "#15133C",
          strokeWidth: "100%"
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: 10,
            fontSize: "22px",
            color: "#000",
            fontWeight: 700,
            formatter: function (val: number) {
              return `${val}%`;
            }
          }
        }
      }
    },
    fill: {
      type: "solid",
      colors: ["#BA01FF"]
    },
    labels: ["Yes"]
  };

  return (
    <div className="chart-container">
      <h4>Protected Disclosure</h4>
      <div className="radial-chart-wrapper">
        <ApexCharts options={options} series={series} type="radialBar" height={250} />
        <div className="legend">
          <span style={{ color: "#BA01FF", fontWeight: 600 }}>■ Yes</span>&nbsp;&nbsp;
          <span style={{ color: "#15133C", fontWeight: 600 }}>■ No</span>
        </div>
      </div>
    </div>
  );
};

export default ProtectedDisclosureChart;