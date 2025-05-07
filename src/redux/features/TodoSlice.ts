
import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'

export type TTodo = {
  _id: string;
  title: string;
  description: string;
  priority: string;
  isComplete: boolean;
  isDeleted: boolean;
  time: string;
};
export type TinitialState = {
  todos: TTodo[];
};

// Define the initial state using that type
const initialState: TinitialState = {
  todos: [],
};

export const TodoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.push(payload);
    },
    deleteTodo: (state, { payload }) => {
      const remainingTodo = state.todos.filter((todo) => todo._id !== payload);
      state.todos = remainingTodo;
    },
    // updateIsComplete: (state, { payload }) => {
    //   const target= state.todos.find((todo) => todo.id == payload.id);
    //   target.isComplete = payload.status;
    // },
  },
});

export const { addTodo, deleteTodo, } = TodoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default TodoSlice.reducer;
