import React from "react";

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ className, onClick, disabled, type = "button", children }) => {
  return (
    <button
      className={`w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition cursor-pointer ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
export default Button;
