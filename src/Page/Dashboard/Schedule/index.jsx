import React, { useState, useEffect, useContext } from 'react'
import styles from './styles.module.scss'
import Navigation from '../Components/Navigation'
import Calendar from './Calendar'
import ScheduleContextProvider, { ScheduleContext } from './ScheduleContext'
import { getAppointmentByBusinessId } from '@api/business/apointment'
import { Web3Context } from '@context/Web3ContextProvider'
import Item from "./Item"
function Index() {
  const { selectDate, setSelecteDate, forceUpdate } = useContext(ScheduleContext)
  const { loginState } = useContext(Web3Context)
  const [list, setList] = useState()
  useEffect(() => {
    const from = new Date(selectDate)
    const to = new Date(selectDate)
    from.setHours(0, 0, 0, 0)
    to.setHours(24, 0, 0, 0)
    getAppointmentByBusinessId(loginState.id, from.getTime(), to.getTime())
      .then((success) => {
        setList(success.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [selectDate, forceUpdate])
  return (
    <div className={styles.container}>
      <Navigation title={'Schedule'}></Navigation>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.group}>
            {list?.map((value, index) =>{
                return <Item key={index} {...value} address={loginState.address}></Item>
            })}
          </div>
        </div>
        <div className={styles.right}>
          <Calendar></Calendar>
        </div>
      </div>
    </div>
  )
}

function Wrapper() {
  return (
    <ScheduleContextProvider>
      <Index></Index>
    </ScheduleContextProvider>
  )
}

export default Wrapper
