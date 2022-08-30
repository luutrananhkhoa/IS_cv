import React, { useContext } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { SocialContext } from '@context/SocialContext'
import { useLocation, Link } from 'react-router-dom'

function Index() {
  const location = useLocation()
  return (
    <div className={styles.container}>
      <Link
        to="/social"
        className={clsx(styles.item, { [styles.active]: location.pathname == '/social' })}
      >
        <i className="fa-light fa-box-open-full"></i>
        <a>Feed</a>
      </Link>
      <Link
        to="/friend"
        className={clsx(styles.item, { [styles.active]: location.pathname == '/friend' })}
      >
        <i className="fa-light fa-user-group"></i>
        <a>Friend</a>
      </Link>
      <Link
        to="/follow"
        className={clsx(styles.item, { [styles.active]: location.pathname == '/follow' })}
      >
        <i className="fa-light fa-check"></i>
        <a>Follow</a>
      </Link>
    </div>
  )
}

export default Index
