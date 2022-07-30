import React, { useState, useContext } from 'react'
import styles from './styles.module.scss'
import logo from '@asset/LogoCV.png'
import avatar from './images/avatar.jpeg'
import { BsList, BsFillCalendarEventFill } from 'react-icons/bs'
import { GoChevronDown, GoSearch } from 'react-icons/go'
import { GrFormClose } from 'react-icons/gr'
import clsx from 'clsx'
import { DashboardContext } from '../DashboardContextProvider'

export default function Index() {
  const [openSearch, setOpenSearch] = useState(false)
  const { closeMenu, setCloseMenu } = useContext(DashboardContext)
  return (
    <header className={styles.headerDashboard}>
      <div className={styles.headerLeft}>
        <img alt="logo" src={logo} className={styles.logo}></img>
        <button
          onClick={() => {
            setCloseMenu(!closeMenu)
          }}
        >
          <BsList size="30px" color="#3f6ad8"></BsList>
        </button>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.tool}>
          <ul className={styles.toolUl}>
            <li>
              <div className={clsx(styles.searchWrapper, { [styles.active]: openSearch })}>
                <div className={styles.search}>
                  <input type="text" className={styles.searchInput} placeholder="Type to search" />

                  <button
                    className={styles.searchButton}
                    onClick={() => {
                      !openSearch && setOpenSearch(true)
                    }}
                  >
                    <GoSearch size="20px" color="#3f6ad8"></GoSearch>
                  </button>
                </div>
                <button
                  className={styles.closeButton}
                  onClick={() => {
                    openSearch && setOpenSearch(false)
                  }}
                >
                  <GrFormClose size="30px" color="red"></GrFormClose>
                </button>
              </div>
            </li>
          </ul>
        </div>

        <hr></hr>
        <div className={styles.profile}>
          <div className={styles.iconWrapper}>
            <img alt="profile" src={avatar} className={styles.profileIcon}></img>
            <GoChevronDown size="18px"></GoChevronDown>
          </div>
          <div className={styles.nameWrapper}>
            <div className={styles.name}>IIG</div>
            <div className={styles.description}>Giao duc</div>
          </div>
          <button className={styles.calendarProfile}>
            <BsFillCalendarEventFill
              size="15px"
              style={{ color: 'white' }}
            ></BsFillCalendarEventFill>
          </button>
        </div>
      </div>
    </header>
  )
}
