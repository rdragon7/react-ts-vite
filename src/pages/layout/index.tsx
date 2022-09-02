import * as React from 'react'

import { Outlet } from 'react-router-dom'
import ZLNavBar from '@/components/NavBar'

import style from './style.module.less'

const ZLLayout = () => {
  return (
    <div className={style.zlLayoutWrapper}>
      <ZLNavBar />
      <div className={style.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default ZLLayout
