import React from 'react'
import styles from './styles.module.scss'


function Index({ title, info }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img
          src={
            'https://vcdn1-giaitri.vnecdn.net/2020/03/06/TaylorSwift-1583461602-2814-1583461788.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=saCN0gu1ejADmfNdT4rh3A'
          }
        ></img>
      </div>
      <div className={styles.text}>
        <div className={styles.name}>{title}</div>
        <div className={styles.message}>{info}</div>
      </div>
    </div>
  )
}

export default Index