interface LabelProps {
  className?: string;
  id?: string;
  label: string;
}

export const Label = ({
  className = "block text-gray-800",
  label,
  id,
}: LabelProps) => {
  return (
    <label htmlFor={id} className={className} data-testid="label">
      {label}
    </label>
  );
};
