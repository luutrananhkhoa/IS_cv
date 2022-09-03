import React from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

function Index(props) {
  const { type } = props
  return (
    <div className={clsx(styles.container, [styles[type]])}>
      <a>{type}</a>
    </div>
  )
}

export default Index
