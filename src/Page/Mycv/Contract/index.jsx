import React from 'react'
import styles from './styles.module.scss'

function Index({ email, phone }) {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.title}>
          <div className={styles.string}>Phone</div>
        </div>
        <div className={styles.content}>{phone}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>
          <div className={styles.string}>Email</div>
        </div>
        <div className={styles.content}>{email}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>
          <div className={styles.string}>Home</div>
        </div>
        <div className={styles.content}>Ho Chi Minh City</div>
      </div>
    </div>
  )
}

export default Index
