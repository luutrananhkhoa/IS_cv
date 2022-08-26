import React, { useContext } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { SocialContext } from '@context/SocialContext'

function Index() {
  const { tab, setTab } = useContext(SocialContext)

  return (
    <div className={styles.container}>
      <div onClick={() => setTab(1)} className={clsx(styles.item, { [styles.active]: tab == 1 })}>
        <i className="fa-light fa-newspaper"></i>
        <a>Feed</a>
      </div>
      <div
        onClick={() => {
          setTab(2)
        }}
        className={clsx(styles.item, { [styles.active]: tab == 2 })}
      >
        <i className="fa-light fa-user-group"></i>
        <a>Friend</a>
      </div>
      <div onClick={() => setTab(3)} className={clsx(styles.item, { [styles.active]: tab == 3 })}>
        <i className="fa-light fa-check"></i>
        <a>Follow</a>
      </div>
    </div>
  )
}

export default Index
