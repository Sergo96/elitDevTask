import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { tTodos } from "../../../types";

type tState = {
  todos: tTodos[];
};

const initialState: tState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<tTodos>) => {
      state.todos.push(action.payload);
    },
    editTodo: (
      state,
      action: PayloadAction<{ index: number; todo: tTodos }>
    ) => {
      const { index, todo } = action.payload;
      state.todos[index] = todo;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
