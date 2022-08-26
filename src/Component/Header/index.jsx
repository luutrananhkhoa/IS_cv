import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../../Context/Context'
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
  const { address, setAddress, removeJwtEmployee, contractStudentBusiness } =
    useContext(Web3Context)
  const { existAccount, setExistAccount, isLoggedIn } = useContext(Context)
  async function connectMetamask() {
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    })

    let addressTemp = accounts[0]
    setAddress(addressTemp)

    await contractStudentBusiness.methods
      .checkExistStudent(addressTemp)
      .call()
      .then((success) => {
        if (success === '1') {
          setExistAccount(true)
          removeJwtEmployee()
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <header className={clsx(styles.container)}>
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
        <Link  to="/">
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

        {!address ? (
          <button key={1} onClick={connectMetamask} className={styles.buttonAccount}>
            Connect Metamask
          </button>
        ) : existAccount ? (
          isLoggedIn ? (
            <Link key={2} to="/profile" className={styles.buttonAccount}>
              Account
            </Link>
          ) : (
            <Link key={3} to="/login" className={styles.buttonAccount}>
              Login
            </Link> 
          )
        ) : (
          <Link key={4} to="/createcv" className={styles.buttonAccount}>
            Sign up
          </Link>
        )}
      </nav>
    </header>
  )
}
