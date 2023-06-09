import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import "./SubmitButton.css";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
}

export const SubmitButton: FC<SubmitButtonProps> = ({ children, ...props }) => {
  return (
    <button className="submit-button" {...props}>
      {children}
    </button>
  );
};
