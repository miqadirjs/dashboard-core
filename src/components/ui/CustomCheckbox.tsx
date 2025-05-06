import React from "react";

interface CustomCheckboxProps {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ id, label, checked, onChange }) => (
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
    />
    <label className="form-check-label" htmlFor={id}>
      {label}
    </label>
  </div>
);

export default CustomCheckbox;