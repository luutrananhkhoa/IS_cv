import React from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

function Index(props) {
  const {icon} = props
  return (
    <div className={styles.container}>
      <i className={clsx(icon, styles.icon)}></i>
    </div>
  )
}

export default Index
