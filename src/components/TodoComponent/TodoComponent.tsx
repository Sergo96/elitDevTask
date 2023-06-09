import React, { FC } from "react";
import { tTodos } from "../../types";
interface IProps extends tTodos {}

export const TodoComponent: FC<IProps> = ({
  id,
  title,
  description,
  deadline,
}) => {
  return <li key={id}>{title}</li>;
};
