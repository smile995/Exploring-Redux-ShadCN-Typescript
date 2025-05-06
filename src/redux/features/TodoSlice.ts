import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'


// Define a type for the slice state
// interface CounterState {
//   value: number
// }

// Define the initial state using that type
const initialState = {
  todos: [],
}

export const TodoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
   
  },
})

// export const {  } = TodoSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default TodoSlice.reducer