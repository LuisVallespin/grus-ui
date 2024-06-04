import { Label } from "../Label";

interface InputProps {
  className?: string;
  id?: string;
  label?: string;
  labelClassName?: string;
  name?: string;
  placeholder?: string;
  value: string;
  type?: "text" | "password" | "number" | "email";
  onChange?: (value?: string) => void;
}

export const Input = ({
  className = "rounded border border-gray-300 bg-gray-50 p-2 text-gray-800 shadow-sm",
  labelClassName = "block text-gray-800",
  type = "text",
  label,
  id,
  onChange,
  ...props
}: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div>
      {label ? (
        <Label className={labelClassName} label={label} id={id} />
      ) : null}
      <input
        type={type}
        id={id}
        className={className}
        data-testid="input"
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};
