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
    },
    incAsync(state, { payload }) {
      state.counter += payload
    }
  }
})

// 异步操作
export const incrementAsync = (payload: number) => {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(incAsync(payload))
    }, 1000)
  }
}

export const {
  increment,
  decrement,
  incrementByCount,
  decrementByCount,
  incAsync
} = counterSlice.actions

export default counterSlice.reducer
