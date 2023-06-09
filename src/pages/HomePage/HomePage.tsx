import React, { FC, useRef } from "react";
import "./HomePage.css";
import { InputComponent, SubmitButton } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import { tTodos } from "../../types";
import { addTodo } from "../../store/slices";

export const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state: RootState) => state);
  const formRef = useRef<tTodos | any>({
    title: "",
    description: "",
    deadline: "",
  });

  const handleTitleChange = (value: string) => {
    // Do something with the updated input value
    formRef.current.title = value;
    console.log("Input value:", value);
  };

  const handleDescChange = (value: string) => {
    // Do something with the updated input value
    formRef.current.description = value;

    console.log("Input value:", value);
  };

  const handleDeadlineChange = (value: string) => {
    formRef.current.deadline = value;

    console.log("Input value:", value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(formRef.current));
  };

  return (
    <div className="form-grid">
      <h1 className="todos-title">Todo Form</h1>
      <InputComponent
        inputTitle="Title"
        onChange={(e) => handleTitleChange(e.target.value)}
      />
      <InputComponent
        inputTitle="Description"
        onChange={(e) => handleDescChange(e.target.value)}
      />
      <InputComponent
        inputTitle="Deadline"
        onChange={(e) => handleDeadlineChange(e.target.value)}
      />
      <SubmitButton onClick={handleAddTodo}>Submit</SubmitButton>
    </div>
  );
};
