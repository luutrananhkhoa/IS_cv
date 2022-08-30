import React, { useContext, useLayoutEffect } from 'react'
import styles from './styles.module.scss'
import cover from '@asset/cover.png'
import avatar from '@asset/avatar.jpg'
import clsx from 'clsx'
import ProfileContextProvider, { ProfileContext } from './ProfileContext'
import { Outlet, Link, useLocation } from 'react-router-dom'

function Index() {
  const location = useLocation()
  return (
    <>
      <section className={styles.container}>
        <div className={styles.panel}>
          <div className={styles.cover}>
            <img src={cover} className={styles.image}></img>
          </div>
          <div className={styles.avatarWrapper}>
            <img src={avatar}></img>
            <div className={styles.name}>Khanh Duy Le</div>
          </div>
        </div>
        <div className={styles.tableWrapper}>
          <Link
            to="/profile"
            className={clsx(styles.tab, { [styles.active]: location.pathname == '/profile' })}
          >
            Post
          </Link>
          <Link
            to="/profile/about"
            className={clsx(styles.tab, { [styles.active]: location.pathname == '/profile/about' })}
          >
            About
          </Link>
        </div>
        <Outlet></Outlet>
      </section>
    </>
  )
}

function Wrapper() {
  return (
    <ProfileContextProvider>
      <Index></Index>
    </ProfileContextProvider>
  )
}

export default Wrapper
