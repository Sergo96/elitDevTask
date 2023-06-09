import React, { FC } from "react";
import "./HomePage.css";
import { InputComponent } from "../../components";
import { useAppDispatch } from "../../hooks";

export const HomePage: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="form-grid">
      <h1 className="todos-title">Todo Form</h1>
      <InputComponent inputTitle="Title" />
      <InputComponent inputTitle="Description" />
      <InputComponent inputTitle="Deadline" />
    </div>
  );
};
