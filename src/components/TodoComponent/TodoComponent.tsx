import React, { FC } from 'react';
import { tTodos } from '../../types';

type tProps = tTodos;

export const TodoComponent: FC<tProps> = ({ id, title, description, deadline }) => {
    return <li key={id}>{title}</li>;
};
