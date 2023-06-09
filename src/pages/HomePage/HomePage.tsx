import React, { FC, useRef, useState } from "react";
import "./HomePage.css";
import { InputComponent, SubmitButton, TodoComponent } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import { tTodos } from "../../types";
import { addTodo } from "../../store/slices";

export const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state: RootState) => state.todosReducer);
  const uuid = crypto.randomUUID();
  const [formState, setFormState] = useState<tTodos>({
    id: uuid,
    title: "",
    description: "",
    deadline: "",
  });

  const handleTitleChange = (value: string) => {
    // Do something with the updated input value
    setFormState((prev) => ({
      ...prev,
      title: value,
    }));
  };

  const handleDescChange = (value: string) => {
    // Do something with the updated input value
    setFormState((prev) => ({
      ...prev,
      description: value,
    }));
  };

  const handleDeadlineChange = (value: string) => {
    setFormState((prev) => ({
      ...prev,
      deadline: value,
    }));
  };

  const handleAddTodo = () => {
    dispatch(addTodo(formState));
    setFormState({
      id: uuid,
      title: "",
      description: "",
      deadline: "",
    });
  };

  return (
    <div className="form-grid">
      <h1 className="todos-title">Todo Form</h1>
      <InputComponent
        inputTitle="Title"
        value={formState.title}
        onChange={(e) => handleTitleChange(e.target.value)}
      />
      <InputComponent
        inputTitle="Description"
        value={formState.description}
        onChange={(e) => handleDescChange(e.target.value)}
      />
      <InputComponent
        inputTitle="Deadline"
        value={formState.deadline}
        onChange={(e) => handleDeadlineChange(e.target.value)}
      />
      <SubmitButton onClick={handleAddTodo}>Submit</SubmitButton>

      {todos.map((item) => {
        return <TodoComponent {...item} />;
      })}
    </div>
  );
};
