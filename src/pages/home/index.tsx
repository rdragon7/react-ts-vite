import * as React from 'react'

import useLocal from '@/utils/hooks/useLocal'

import style from './style.module.less'

const ZLHome = () => {
  const local = useLocal()
  return (
    <div className={style.zlHomeWrapper}>
      <h1>{local('home')}</h1>
    </div>
  )
}

export default ZLHome
