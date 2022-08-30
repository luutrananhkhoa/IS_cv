import React from 'react'
import styles from './styles.module.scss'
import { splitCamel } from '@helper/splitCamel'

function Index(props) {
  const { label, value } = props
  return (
    <div className={styles.itemWrapper}>
      <span className={styles.item}>
        <div className={styles.iconWrapper}>
          {label == 'name' && <i className="fa-solid fa-user"></i>}
          {label == 'phone' && <i className="fa-solid fa-phone"></i>}
          {label == 'professional' && <i className="fa-solid fa-credit-card-front"></i>}
          {label == 'email' && <i className="fa-solid fa-at"></i>}
          {label == 'github' && <i className="fa-brands fa-github"></i>}
          {label == 'linkedin' && <i className="fa-brands fa-linkedin"></i>}
        </div>
        <label>{splitCamel(label)}</label>
        <a>{value}</a>
      </span>
      <span className={styles.tool}>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </span>
    </div>
  )
}

export default Index
