import React, { useState, useEffect, useRef, useCallback } from 'react'
import styles from './styles.module.scss'
import handleClickOutside from '@helper/handleClickOutside'
import clsx from 'clsx'

import { searchByName } from '@api/feed/search'
import Item from './Item'

function Index({ state }) {
  const [open, setOpen] = state
  const [search, setSearch] = useState('')
  const [list, setList] = useState()
  const ref = useRef()
  useEffect(() => {
    handleClickOutside([ref.current], open, setOpen)
  }, [ref.current, open])
  const handleSearch = useCallback((search) => {
    console.log(search)
    searchByName(search)
      .then((success) => {
        setList(success.data)
      })
      .catch((error) => console.error(error))
  }, [])
  return (
    <div className={clsx(styles.container, { [styles.open]: open })}>
      <div className={styles.blur}></div>
      <div className={styles.main}>
        <div ref={ref} className={styles.content}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <div className={styles.search}>
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
              <i
                onClick={() => handleSearch(search)}
                className="fa-regular fa-magnifying-glass"
              ></i>
            </div>
            <div className={styles.list}>
              {list?.map((value, index) => {
                return <Item {...value} key={index}></Item>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
