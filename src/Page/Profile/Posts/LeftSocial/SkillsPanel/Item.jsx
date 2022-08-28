import React from 'react'
import styles from './styles.module.scss'
import { ProgressBar } from '@component/ProgressBar'

function Index() {
  return (

      <div className={styles.item}>
        <div className={styles.skillTextWrapper}>
          <label>CSS </label>
          <a>20%</a>
        </div>
        <ProgressBar percent={20}></ProgressBar>
      </div>
  
  )
}

export default Index
