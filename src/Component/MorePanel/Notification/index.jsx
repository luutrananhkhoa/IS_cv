import React, { useContext, useRef, useEffect } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

function Index(props) {
  return (
    <div
      className={clsx(
        styles.container,
      )}
    >
      <div className={styles.top}>
        <div className={styles.title}>Notifications</div>
        <div className={styles.clear}>Clear All</div>
      </div>
    </div>
  )
}

export default Index
