import React, { useContext, useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Web3Context } from '@context/Web3ContextProvider'
function Index(props) {
  const { showMorePanel, setShowMorePanel } = useContext(Web3Context)
  return (
    <div className={clsx(styles.container)}>
      <Link
        onClick={() => {
          setShowMorePanel((e) => {
            return { ...e, show: false }
          })
        }}
        to="/profile"
        className={styles.item}
      >
        <i className="fa-solid fa-circle-heart"></i>
        <p>Trang ca nhan</p>
      </Link>
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
      <div className={styles.item}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        <p>Dang xuat</p>
      </div>
    </div>
  )
}

export default Index
