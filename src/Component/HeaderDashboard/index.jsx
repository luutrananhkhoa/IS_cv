import React from 'react'
import styles from './styles.module.scss'
import logo from './images/logo.png'
import avatar from './images/avatar.jpeg'
import { BsList, BsFillCalendarEventFill } from 'react-icons/bs'
import { GoChevronDown, GoSearch } from 'react-icons/go'

export default function Index() {
  return (
    <header className={styles.headerDashboard}>
      <div className={styles.headerLeft}>
        <img alt="logo" src={logo} className={styles.logo}></img>
        <BsList size="30px"></BsList>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.tool}>
          <ul className={styles.toolUl}>
            <li className={styles.search}>
              <GoSearch size="15px"></GoSearch>
            </li>
          </ul>
        </div>

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
