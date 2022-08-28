import React, { useContext, useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
function Index(props) {
  return (
    <div className={clsx(styles.container)}>
      <div className={styles.item}>
        <i className="fa-solid fa-circle-heart"></i>
        <a>Trang ca nhan</a>
      </div>
      <div className={styles.item}>
        <i className="fa-solid fa-bookmark"></i>
        <a>Da luu</a>
      </div>
      <div className={styles.item}>
        <i className="fa-solid fa-gear"></i>
        <a>Cai dat</a>
      </div>
      <div className={styles.item}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        <a>Dang xuat</a>
      </div>
    </div>
  )
}

export default Index
