import React, { useContext, memo } from 'react'
import styles from './styles.module.scss'
import cover from '@asset/cover.png'
import avatar from '@asset/avatar.jpg'
import clsx from 'clsx'
import ProfileContextProvider, { ProfileContext } from './ProfileContext'
import About from './About'
import Posts from './Posts'

function Index() {
  const { tab, setTab } = useContext(ProfileContext)
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
          <button
            onClick={() => setTab(1)}
            className={clsx(styles.tab, { [styles.active]: tab == 1 })}
          >
            Post
          </button>
          <button
            onClick={() => setTab(2)}
            className={clsx(styles.tab, { [styles.active]: tab == 2 })}
          >
            About
          </button>
        </div>
        {tab == 1 && <Posts></Posts>}
        {tab == 2 && <About></About>}
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
