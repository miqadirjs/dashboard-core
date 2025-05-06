import React from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  id: string;
  label?: string;
  options: Option[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <div className="mb-3">
      {label && <label htmlFor={id} className="form-label">{label}</label>}
      <select
        className="form-select"
        id={id}
        value={value}
        onChange={onChange}
        aria-label={label || "Custom select"}
      >
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;