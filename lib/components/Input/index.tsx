import { ChangeEvent } from "react";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
}

export const Input = ({ value, onChange, icon }: InputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleInputChange} />
      {icon && <div>{icon}</div>}
    </div>
  );
};
