import * as React from 'react'

import useLocal from '@/utils/hooks/useLocal'

import style from './style.module.less'

const ZLAbout = () => {
  // state & props

  // other hooks
  const local = useLocal()

  return (
    <div className={style.zlAboutWrapper}>
      <h1>{local('about')}</h1>
    </div>
  )
}

export default ZLAbout
