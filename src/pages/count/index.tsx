import * as React from 'react'

import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import {
  increment,
  decrement,
  incrementByCount,
  decrementByCount
} from '@/store/slice/counterSlice'

import style from './style.module.less'

const ZLCount = () => {
  // state & props

  // redux hooks
  const dispatch = useAppDispatch()
  const { counter } = useAppSelector((state: RootState) => state.count)
  // other hooks

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

  return (
    <div className={style.zlCountWrapper}>
      <h2>当前计数为：{counter}</h2>
      <button onClick={add}>+1</button>
      <button onClick={sub}>-1</button>
      <button onClick={() => addByCount(5)}>+5</button>
      <button onClick={() => subByCount(5)}>-5</button>
    </div>
  )
}

export default ZLCount
