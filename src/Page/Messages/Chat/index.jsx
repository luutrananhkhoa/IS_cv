import React, { useState, useEffect, useContext } from 'react'
import styles from './styles.module.scss'
import CompactItem from '../Components/CompactItem'
import Name from '../Components/Name'
import ChatItem from '../Components/ChatItem'
import messagesBackground from '@asset/messages_background.jpg'
import Pin from '../Components/Pin'
import { getContract as getContractBusiness } from '@contract/businessController'
import { getContract as getContractEmployee } from '@contract/employeeController'
import { useParams } from 'react-router-dom'
import { Web3Context } from '@context/Web3ContextProvider'

function Index() {
  const { loginState } = useContext(Web3Context)
  const [profile, setProfile] = useState()
  const businessId = useParams().id

  const [appointment, setAppointment] = useState()
  useEffect(() => {
    if (!businessId) return
    getContractEmployee().then((contractEmployee) => {
      contractEmployee.methods
        .getListAppointmentByEmployeeIdAndBusinessId(loginState.id, businessId)
        .call()
        .then((success) => {
          let temp = success.map((value, index) => {
            return { ...value }
          })
          setAppointment(temp)
        })
        .catch((error) => {
          console.error(error)
        })
    })
    getContractBusiness()
      .then((contractBusiness) => {
        contractBusiness.methods
          .getProfile(businessId)
          .call()
          .then((success) => {
            setProfile({ ...success })
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }, [businessId])
  return (
    <div className={styles.container}>
      {profile && (
        <div className={styles.top}>
          <div className={styles.info}>
            <Name title={profile?.name} info={'10 phut truoc'}></Name>
            <div className={styles.tools}>
              <button className={styles.plus}>
                <i className="fa-regular fa-plus"></i>
              </button>
              <button className={styles.search}>
                <i className="fa-regular fa-search"></i>
              </button>
            </div>
          </div>
          <div>
            {appointment?.map((value, index) => {
              return <Pin key={index} {...value} {...profile}></Pin>
            })}
          </div>
        </div>
      )}

      <div style={{ backgroundImage: `url(${messagesBackground})` }} className={styles.content}>
        <div className={styles.scroll}>
          <ChatItem key={0} type="owner"></ChatItem>
          <ChatItem key={1} type="guess"></ChatItem>
        </div>
      </div>
    </div>
  )
}

export default Index
