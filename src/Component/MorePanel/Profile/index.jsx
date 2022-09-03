import React, { useContext, useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Web3Context } from '@context/Web3ContextProvider'
import { useNavigate } from 'react-router-dom'
function Index(props) {
  const { showMorePanel, setShowMorePanel, dispatchLogin, loginState } = useContext(Web3Context)
  const navigate = useNavigate()
  const handleLogout = () => {
    if (loginState.for == 'employee') dispatchLogin({ type: 'employee_logout' })
    if (loginState.for == 'business') dispatchLogin({ type: 'business_logout' })
    setShowMorePanel((e) => {
      return { ...e, show: false }
    })
    navigate('/')
  }
  return (
    <div className={clsx(styles.container)}>
      <Link
        onClick={() => {
          setShowMorePanel((e) => {
            return { ...e, show: false }
          })
        }}
        to={
          loginState.for == 'employee'
            ? `/profile/${loginState.id}`
            : loginState.for == 'business' && `/page/${loginState.id}`
        }
        className={styles.item}
      >
        <i className="fa-solid fa-circle-heart"></i>
        <p>Trang ca nhan</p>
      </Link>
      {loginState.for == 'business' && (
        <Link
          onClick={() => {
            setShowMorePanel((e) => {
              return { ...e, show: false }
            })
          }}
          to="/dashboard"
          className={styles.item}
        >
          <i className="fa-regular fa-grid-horizontal"></i>
          <p>Dashboard</p>
        </Link>
      )}
      <div className={styles.item}>
        <i className="fa-solid fa-bookmark"></i>
        <p>Da luu</p>
      </div>
      <Link
        to="/setting?tab=account"
        onClick={() => {
          setShowMorePanel((e) => {
            return { ...e, show: false }
          })
        }}
        className={styles.item}
      >
        <i className="fa-solid fa-gear"></i>
        <p>Cai dat</p>
      </Link>
      <div onClick={handleLogout} className={styles.item}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        <p>Dang xuat</p>
      </div>
    </div>
  )
}

export default Index
