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
    addTodo: (state, action) => {},
    deleteTodo: (state, action) => {},
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
