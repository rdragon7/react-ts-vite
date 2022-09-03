import * as React from 'react'

import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import baoBao from '@/assets/images/baobao.png'

import style from './style.module.less'

const ZLNavBar = () => {
  // state & props

  // other hooks
  const { i18n } = useTranslation()

  // handles
  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')
  }

  return (
    <div className={style.zlNavBarWrapper}>
      <div className={style.logo}>
        <img src={baoBao} alt="logo" />
      </div>
      <div className={style.navBar}>
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
      <div className={style.language} onClick={() => changeLanguage()}>
        {i18n.language === 'en' ? '中文' : '英文'}
      </div>
    </div>
  )
}

export default ZLNavBar
