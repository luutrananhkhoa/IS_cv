import React from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import Item from './Item'

//Messages/Components/ChatItem/index
function Index({ icon, name, date, type, key, children }) {
  return (
    <div className={clsx(styles.container, styles[type])}>
      <div className={styles.info}>
        <div className={styles.icon}>
          <img src="https://vcdn1-giaitri.vnecdn.net/2020/03/06/TaylorSwift-1583461602-2814-1583461788.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=saCN0gu1ejADmfNdT4rh3A"></img>
        </div>
        <div className={styles.text}>
          <div className={styles.name}> {name}</div>
          <div className={styles.time}>{new Date(date).toLocaleTimeString()}</div>
        </div>
      </div>

      <div className={styles.group}>
        <Item key={key}>{children}</Item>
      </div>
    </div>
  )
}

export default Index
