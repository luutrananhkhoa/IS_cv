import React from 'react'
import styles from './styles.module.scss'
import Todo from './Todo'

function Index() {
  return (
    <div className={styles.container}>
      <Todo></Todo>
    </div>
  )
}

export default Index
