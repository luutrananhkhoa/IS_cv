import React from 'react'
import styles from './styles.module.scss'
import Item from './Item'

function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <a>Skills</a>
      </div>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </div>
  )
}

export default Index
