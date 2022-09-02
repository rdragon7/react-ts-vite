import * as React from 'react'
import { NavLink } from 'react-router-dom'

import style from './style.module.less'

const ZLNavBar = () => {
  return (
    <div className={style.zlNavBarWrapper}>
      <div className={style.home}>
        <NavLink to={'/'}>Home</NavLink>
      </div>
      <div className={style.about}>
        <NavLink to={'/about'}>About</NavLink>
      </div>
      <div className={style.count}>
        <NavLink to={'/count'}>Count</NavLink>
      </div>
    </div>
  )
}

export default ZLNavBar
