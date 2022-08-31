import React from 'react'
import styles from './styles.module.scss'
import PostItem from '@component/PostItem'
import ItemRequest from './ItemRequest'
import { Link   } from 'react-router-dom'

function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>
          <Link to={-1} className="fa-solid fa-angle-left"></Link>
          <p>View post</p>
        </div>
        <div className={styles.preview}>
          <PostItem></PostItem>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          <p>Request</p>
        </div>
        <div className={styles.wrapper}>
          {[...Array(10)].map((value, index) => {
            return <ItemRequest key={index}></ItemRequest>
          })}
        </div>
      </div>
    </div>
  )
}

export default Index
