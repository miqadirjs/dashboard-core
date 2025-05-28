import React from "react";
import RadialChart from "../charts/RadialChart";

type ButtonConfig = {
  label: string;
  onClick: () => void;
  variant?: "primary" | "success" | "purple";
  outline?: boolean;
};

type CardProps = {
  title: string;
  icon: React.ReactNode;
  description: string;
  value?: number;
  textValue?: string;
  color?: "blue" | "green" | "purple";
  buttons?: ButtonConfig[]; // <-- Support multiple buttons
};

const Card: React.FC<CardProps> = ({
  title,
  icon,
  description,
  value,
  textValue,
  color = "blue",
  buttons = [],
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
      {typeof value === "number" ? (
        <div style={{ maxWidth: "120px", margin: "0 auto 15px" }}>
          <RadialChart series={[value]} />
        </div>
      ) : textValue ? (
        <div className="text-center mb-3 fw-bold fs-4 text-muted">
          {textValue}
        </div>
      ) : null}

      <div className="d-flex justify-content-between align-items-center">
        <div className="card_btn d-flex gap-2 flex-wrap">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={btn.onClick}
              className={`cta btn btn-sm ${
                btn.outline
                  ? `btn-outline-${btn.variant || color}`
                  : `btn-${btn.variant || color}`
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
