import React, { MouseEventHandler } from "react";

interface BtnProps {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "submit" | "button";
}

const Button: React.FC<BtnProps> = ({
  children,
  className,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={type === "button" ? onClick : undefined}
      className={`bg-btn-green p-4 cursor-pointer rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export { Button };
