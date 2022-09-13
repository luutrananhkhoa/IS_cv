import React, { useContext } from 'react'
import styles from './styles.module.scss'
import { SocialContext } from '@context/SocialContext'

function Search({ onClick }) {
  return (
    <div onClick={onClick} className={styles.search}>
      <a>Search...</a>
      <i className="fa-light fa-magnifying-glass"></i>
    </div>
  )
}

export default Search
