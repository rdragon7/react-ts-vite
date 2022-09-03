import * as React from 'react'

import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import {
  increment,
  decrement,
  incrementByCount,
  decrementByCount,
  incrementAsync
} from '@/store/slice/counterSlice'
import useLocal from '@/utils/hooks/useLocal'

import style from './style.module.less'

const ZLCount = () => {
  // state & props

  // redux hooks
  const dispatch = useAppDispatch()
  const { counter } = useAppSelector((state: RootState) => state.count)

  // other hooks
  const local = useLocal()

  // handles
  const add = () => {
    dispatch(increment())
  }
  const sub = () => {
    dispatch(decrement())
  }
  const addByCount = (num: number) => {
    dispatch(incrementByCount(num))
  }
  const subByCount = (num: number) => {
    dispatch(decrementByCount(num))
  }
  const addAsync = () => {
    dispatch(incrementAsync(2))
  }

  return (
    <div className={style.zlCountWrapper}>
      <h2>
        {local('count')}:{counter}
      </h2>
      <button onClick={add}>+1</button>
      <button onClick={sub}>-1</button>
      <button onClick={() => addByCount(5)}>+5</button>
      <button onClick={() => subByCount(5)}>-5</button>
      <button onClick={addAsync}>async+</button>
    </div>
  )
}

export default ZLCount
