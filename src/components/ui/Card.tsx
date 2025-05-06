import React from "react";
import RadialChart from "../charts/RadialChart";

type CardProps = {
  title: string;
  icon: React.ReactNode;
  description: string;
  value: number;
  color?: "blue" | "green" | "purple";
  onLearnMore?: () => void;
  onAccess?: () => void;
};

const Card: React.FC<CardProps> = ({
  title,
  icon,
  description,
  value,
  color = "blue",
  onLearnMore,
  onAccess,
}) => {
  const colorClasses = {
    blue: {
      bg: "bg-primary-subtle",
      text: "text-primary",
      button: "btn-primary",
    },
    green: {
      bg: "bg-success-subtle",
      text: "text-success",
      button: "btn-success",
    },
    purple: {
      bg: "bg-purple-subtle",
      text: "text-purple",
      button: "btn-purple",
    },
  };

  return (
    <div className="bg-white rounded-3 p-4">
      <div className="d-flex justify-content-between mb-3">
        <div className="d-flex justify-content-center align-items-center">
          {icon}
        </div>
        <div className="text-end">
          <h4 className="card_title">{title}</h4>
          <h5 className="text-muted small mb-2">{description}</h5>
        </div>
      </div>
      <div style={{ maxWidth: "120px", margin: "0 auto 15px" }}>
        <RadialChart series={[value]} />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="card_btn">
          <button
            onClick={onLearnMore}
            className={`ctaborder btn btn-sm ${colorClasses[color].bg} ${colorClasses[color].text}`}
          >
            Learn More
          </button>
          <button
            onClick={onAccess}
            className={`cta btn btn-sm ${colorClasses[color].button} text-white`}
          >
            Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;