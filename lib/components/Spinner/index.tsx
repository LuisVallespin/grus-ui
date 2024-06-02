import "./styles.css";

interface SpinnerProps {
  size?: string;
  borderWidth?: string;
  color?: string;
}

export const Spinner = ({
  size = "20px",
  borderWidth = "2px",
  color = "#09f",
}: SpinnerProps) => {
  const spinnerStyle = {
    height: size,
    width: size,
    borderWidth: borderWidth,
    borderLeftColor: color,
  };

  return (
    <div className="spinner" style={spinnerStyle} data-testid="spinner"></div>
  );
};
