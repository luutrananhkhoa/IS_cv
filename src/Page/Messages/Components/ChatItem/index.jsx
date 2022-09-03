import React from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import Item from './Item'

//Messages/Components/ChatItem/index
function Index({ icon, name, time, data, type }) {
  return (
    <div className={clsx(styles.container, styles[type])}>
      <div className={styles.info}>
        <div className={styles.icon}>
          <img src="https://vcdn1-giaitri.vnecdn.net/2020/03/06/TaylorSwift-1583461602-2814-1583461788.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=saCN0gu1ejADmfNdT4rh3A"></img>
        </div>
        <div className={styles.text}>
          <div className={styles.name}> {'name'}</div>
          <div className={styles.time}>10:00 AM</div>
        </div>
      </div>

      <div className={styles.group}>
        {[...Array(4)].map((i) => {
          return <Item key={i}></Item>
        })}
      </div>
    </div>
  )
}

export default Index
