import React, { useContext } from 'react'
import styles from './styles.module.scss'
import { SocialContext } from '@context/SocialContext'

function Search() {
  const { search, setSearch } = useContext(SocialContext)
  return (
    <div className={styles.search}>
      <input
        placeholder="Search..."
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <i className="fa-light fa-magnifying-glass"></i>
    </div>
  )
}

export default Search
