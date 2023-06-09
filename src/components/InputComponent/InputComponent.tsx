import React, { FC, InputHTMLAttributes } from "react";
import "./InputComponent.css";

interface tInputComponent extends InputHTMLAttributes<HTMLInputElement> {
  inputTitle: string;
}

export const InputComponent: FC<tInputComponent> = ({
  inputTitle,
  ...props
}) => {
  return (
    <>
      <h2>{inputTitle}</h2>
      <div className="input-container">
        <input className="input" {...props} />
      </div>
    </>
  );
};
