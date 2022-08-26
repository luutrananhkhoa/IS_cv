import React from 'react'
import styles from './styles.module.scss'
import Item from './Item'
import Search from './Search'

function Index() {
  return (
    <div className={styles.container}>
      <Search></Search>
      <Item></Item>
    </div>
  )
}

export default Index
