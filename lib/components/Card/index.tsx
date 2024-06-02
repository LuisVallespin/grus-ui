import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded border border-gray-300 bg-white p-6 shadow-sm" data-testid="card">
      {children}
    </div>
  );
};
