import React from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

export default function Index(props) {
  const [close, setClose] = props.state
  return (
    <div className={clsx(styles.container, { [styles.close]: !close })}>
      <ul>
        <li className={styles.menuItem}>
          <p className={styles.text}>Tab1</p>
        </li>
        <li className={styles.menuItem}>
          <p className={styles.text}>Tab1</p>
        </li>
        <li className={styles.menuItem}>
          <p className={styles.text}>Tab1</p>
        </li>
        <li className={styles.menuItem}>
          <p className={styles.text}>Tab1</p>
        </li>
      </ul>
    </div>
  )
}
