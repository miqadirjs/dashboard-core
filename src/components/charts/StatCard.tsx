import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  chartColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, chartColor }) => {
  return (
    <div className="" style={{ background: chartColor }}>
      <div className="">
        <p>{title}</p>
      </div>
      <div className="">
        <h3>{value}</h3>
        <span>{change}</span>
      </div>
    </div>
  );
};

export default StatCard;