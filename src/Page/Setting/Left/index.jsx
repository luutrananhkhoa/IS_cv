import React from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Settings</div>
      <div className={styles.tabContainer}>
        <div className={styles.tableWrapper}>
          <div className={styles.tabWrapper}>
            <div className={clsx(styles.tab)}>
              <div className={styles.active}></div>
              <p>Personal Information</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
