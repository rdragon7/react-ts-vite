import { createSlice } from '@reduxjs/toolkit'

export interface IState {
  counter: number
}

const initialState: IState = {
  counter: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter += 1
    },
    decrement(state) {
      state.counter -= 1
    },
    incrementByCount(state, { payload }) {
      state.counter += payload
    },
    decrementByCount(state, { payload }) {
      state.counter -= payload
    }
  }
})

export const { increment, decrement, incrementByCount, decrementByCount } =
  counterSlice.actions

export default counterSlice.reducer
