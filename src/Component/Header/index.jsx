import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Web3Context } from '../../Context/Web3ContextProvider'
import { useTranslation } from 'react-i18next'
import Language from '@component/Language'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { listMenuHeader } from './listMenuHeader'
import logo from '@asset/LogoCV.png'

export default function Header() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [showMobile, setShowModile] = useState(false)
  const { loginState, dispatchLogin, showMorePanel, setShowMorePanel } = useContext(Web3Context)
  async function handleConnectMetamask() {
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    })
    let addressTemp = accounts[0]
    if (addressTemp) {
      let jwt
      if (web3.utils.isAddress(loginState.jwt)) jwt = loginState.jwt
      else jwt = '0x0000000000000000000000000000000000000000'
      await myContract.methods
        .autoLogin(jwt)
        .call({ from: addressTemp })
        .then((success) => {
          const id = parseInt(success)
          if (id > 0) {
            dispatchLogin({
              type: 'employee_auto_login',
              isLoggedIn: true,
              for: 'employee',
              address: addressTemp,
              id: id,
              contractEmployee: myContract,
              jwt: addressTemp,
            })
          } else {
            dispatchLogin({
              type: 'employee_auto_login',
              isLoggedIn: false,
              for: 'employee',
              address: addressTemp,
              id: 0,
              contractEmployee: myContract,
              jwt: '',
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <header id="header" className={clsx(styles.container)}>
      <div className={styles.toggleNavigation} onClick={() => setShowModile(!showMobile)}>
        {showMobile ? (
          <i key={0} className="fa-regular fa-xmark"></i>
        ) : (
          <i key={1} className="fa-regular fa-list-ul"></i>
        )}
      </div>
      <div className={clsx(styles.navMobile, { [styles.showMobile]: showMobile })}>
        <div className={styles.textModileTitle}>Navigation</div>
        <ul>
          {listMenuHeader.map((value, index) => {
            return (
              <Link key={index} to={value.to}>
                <div className={styles.icon}>
                  <i className={value.icon}></i>
                </div>
                <div className={styles.name}>{value.name}</div>
              </Link>
            )
          })}
        </ul>
      </div>
      <div className={styles.navLeft}>
        <Link to="/">
          <img className={styles.logo} alt="Logo" src={logo}></img>
        </Link>
      </div>
      <nav id="navbar" className={clsx(styles.navCenter)}>
        <ul>
          {listMenuHeader.map((value, index) => {
            return (
              <Link
                key={index}
                to={value.to}
                className={clsx(styles.navItem, { [styles.active]: location.pathname == value.to })}
              >
                <i className={value.icon}></i>
                <div className={styles.name}>{value.name}</div>
              </Link>
            )
          })}
        </ul>
      </nav>
      <nav id="navbar" className={clsx(styles.navRight)}>
        <Language key={0}></Language>
        <button
          onClick={() => {
            setShowMorePanel((e) => {
              return {
                show: e.show == false ? true : e.panel != 2 ? true : false,
                panel: 2,
              }
            })
          }}
          id="notification_header_button"
          key={5}
          className={styles.buttonItem}
        >
          <i className="fa-regular fa-bells"></i>
        </button>
        {!loginState.address && (
          <button key={1} onClick={handleConnectMetamask} className={styles.buttonAccount}>
            Connect Metamask
          </button>
        )}
        {loginState.address && !loginState.isLoggedIn && (
          <Link key={3} to="/login" className={styles.buttonAccount}>
            Login
          </Link>
        )}
        {loginState.address && loginState.isLoggedIn && (
          <button
            id="profile_header_button"
            onClick={() => {
              setShowMorePanel((e) => {
                return {
                  show: e.show == false ? true : e.panel != 1 ? true : false,
                  panel: 1,
                }
              })
            }}
            key={4}
            className={clsx(styles.buttonItem, styles.account)}
          >
            <i className="fa-solid fa-user"></i>
          </button>
        )}
      </nav>
    </header>
  )
}
