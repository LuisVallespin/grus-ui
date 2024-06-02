import { ReactNode, useMemo } from "react";
import { Spinner } from "../Spinner";

interface ColorTypes {
  success: string;
  danger: string;
  warning: string;
  info: string;
  light: string;
}

interface ImportanceTypes {
  primary: ColorTypes;
  secondary: ColorTypes;
  tertiary: ColorTypes;
}

interface ButtonProps {
  label: string;
  type: "button" | "submit" | "reset";
  importance?: "primary" | "secondary" | "tertiary";
  color?: "success" | "danger" | "warning" | "info" | "light";
  size?: "small" | "medium" | "large";
  icon?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

const buttonImportance: ImportanceTypes = {
  primary: {
    success: "border-green-700 bg-green-700 text-white",
    danger: "border-rose-700 bg-rose-700 text-white",
    warning: "border-yellow-500 bg-yellow-500 text-yellow-900",
    info: "border-blue-700 bg-blue-700 text-white",
    light: "border-slate-200 bg-slate-200 text-slate-700",
  },
  secondary: {
    success: "border-green-700 text-green-700",
    danger: "border-rose-700 text-rose-700",
    warning: "border-yellow-700 text-yellow-700",
    info: "border-blue-700 text-blue-700",
    light: "border-slate-700 text-slate-700",
  },
  tertiary: {
    success: "border-transparent text-green-700",
    danger: "border-transparent text-rose-700",
    warning: "border-transparent text-yellow-700",
    info: "border-transparent text-blue-700",
    light: "border-transparent text-slate-700",
  },
};

const buttonSize = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-4 py-2 text-xl",
};

const spinnerStyle = {
  small: {
    size: "12px",
    borderWidth: "2px",
  },
  medium: {
    size: "16px",
    borderWidth: "3px",
  },
  large: {
    size: "20px",
    borderWidth: "4px",
  },
};

function getSpinnerColor(color: string, importance: string) {
  switch (importance) {
    case "primary":
      if (color === "warning") return "rgb(113 63 18)";
      if (color === "light") return "rgb(51 65 85)";
      return "white";
    default:
      if (color === "success") return "rgb(21 128 61)";
      if (color === "danger") return "rgb(190 18 60)";
      if (color === "warning") return "rgb(161 98 7)";
      if (color === "info") return "rgb(29 78 216)";
      if (color === "light") return "rgb(51 65 85)";
      return "white";
  }
}

export const Button = ({
  label,
  importance = "primary",
  color = "success",
  size = "medium",
  type = "button",
  icon,
  disabled = false,
  loading = false,
  ...props
}: ButtonProps) => {
  const spinnerColor = useMemo(
    () => getSpinnerColor(color, importance),
    [color, importance],
  );

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded border-2 font-semibold disabled:cursor-not-allowed disabled:opacity-50 ${buttonImportance[importance][color]} ${buttonSize[size]}`}
      type={type}
      disabled={disabled}
      {...props}
      data-tesid="button"
    >
      {loading ? (
        <Spinner
          size={spinnerStyle[size].size}
          borderWidth={spinnerStyle[size].borderWidth}
          color={spinnerColor}
        />
      ) : (
        icon ?? null
      )}
      {label}
    </button>
  );
};
