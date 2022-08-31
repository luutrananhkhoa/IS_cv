import React from 'react'
import styles from './styles.module.scss'

function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.categoryIconWrapper}>
        <i className="fa-brands fa-hive"></i>
      </div>
      <div className={styles.title}>Data Analytics</div>
      <div className={styles.content}>
        <p>
          {/* <i className="fa-solid fa-star"></i>  */}
          <a>Lorem ipsum dolor sit am</a>
        </p>
        <p>
          {/* <i className="fa-solid fa-star"></i>  */}
          <a>Lorem ipsum dolor sit am</a>
        </p>
        <p>
          {/* <i className="fa-solid fa-star"></i>  */}
          <a>Lorem ipsum dolor sit am</a>
        </p>
        <p>
          {/* <i className="fa-solid fa-star"></i>  */}
          <a>Lorem ipsum dolor sit am</a>
        </p>
       
      </div>
      <div className={styles.result}>
        <a>1001 Members</a>
      </div>
    </div>
  )
}

export default Index
