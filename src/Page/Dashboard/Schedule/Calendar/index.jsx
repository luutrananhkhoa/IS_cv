import React, { useState, useContext } from 'react'
import styles from './styles.module.scss'
import Calendar from 'react-calendar'
import './calendar.scss'
import {ScheduleContext} from "../ScheduleContext"
function Index() {
  const {selectDate, setSelecteDate} = useContext(ScheduleContext)


  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>Calendar</div>
        <div className={styles.seeMore}>See more</div>
      </div>
      <div className={styles.calendarWrapper}>
        <Calendar onChange={setSelecteDate} value={selectDate} />
      </div>
      <div className={styles.todoListWrapper}></div>
    </div>
  )
}

export default Index
