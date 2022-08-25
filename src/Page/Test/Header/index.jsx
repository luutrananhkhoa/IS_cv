import React, { useRef, useState, memo } from 'react'
import styles from './styles.module.scss'
import logo from '@asset/LogoCV.png'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { useLocation, Location, Link } from 'react-router-dom'
import { listMenuHeader } from './listMenuHeader'
import Language from '@component/Language'

const Header = () => {
  const location = useLocation()
  const { t } = useTranslation('component', { keyPrefix: 'header.index' })
  const [currencyToggle, setCurrencyToggle] = useState(false)
  const menuRight = useRef()
  const menuRightCloseBtn = useRef()
  const [languageToggle, setLanguageToggle] = useState(false)
  const [showMobile, setShowModile] = useState(false)

  return (
    <header className={clsx(styles.container)}>
      <div className={styles.toggleNavigation} onClick={() => setShowModile(!showMobile)}>
        {showMobile ? (
          <i className="fa-regular fa-xmark"></i>
        ) : (
          <i className="fa-regular fa-list-ul"></i>
        )}
      </div>
      <div className={clsx(styles.navMobile, { [styles.showMobile]: showMobile })}>
        <div className={styles.textModileTitle}>Navigation</div>
        <ul>
          {listMenuHeader.map((value, index) => {
            return (
              <li>
                <div className={styles.icon}>
                  <i className={value.icon}></i>
                </div>
                <Link to={value.to}>{value.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={styles.navLeft}>
        <Link to="/">
          <img className={styles.logo} alt="Logo" src={logo}></img>
        </Link>
      </div>
      <nav id="navbar" className={clsx(styles.navCenter)} ref={menuRight}>
        <ul>
          {listMenuHeader.map((value, index) => {
            return (
              <li className={clsx({ [styles.active]: location.pathname == value.to })}>
                <i className={value.icon}></i>
                <Link to={value.to}>{value.name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <nav id="navbar" className={clsx(styles.navRight)} ref={menuRight}>
        <Language></Language>
        <button className={styles.buttonAccount}>Tài khoản</button>
      </nav>
    </header>
  )
}
export default memo(Header)
