import React from 'react'
import styles from './styles.module.scss'

function Index(props) {
  const { percent, color } = props
  return (
    <div className={styles.progressBar}>
      <span
        style={{
          '--percent': Math.round(percent) + '%',
          backgroundColor: color,
        }}
      ></span>
    </div>
  )
}

export default Index
