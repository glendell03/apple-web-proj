import React from "react";

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  children: React.ReactNode;
}

const Button = ({ primary, secondary, children }: ButtonProps) => {
  return (
    <button
      className={`${primary && "bg-c-blue"} ${
        secondary && "bg-c-green"
      } w-full p-4 text-white font-semibold
      `}
    >
      {children}
    </button>
  );
};

export default Button;
