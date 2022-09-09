import React, { useState, useEffect, useContext, useRef } from 'react'
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
import socketIOClient from 'socket.io-client'
import { API_ENDPOINT_NODEJS } from '@constant/index'
import _ from 'lodash'

function Index() {
  const { loginState } = useContext(Web3Context)
  const [profile, setProfile] = useState()
  const businessId = parseInt(useParams().id)
  const [input, setInput] = useState()
  const [list, setList] = useState([])

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
  const lastSend = useRef({
    _idEmployee: 0,
    _idBusiness: 0,
    date: 0,
  })
  const socketRef = useRef()
  useEffect(() => {
    socketRef.current = socketIOClient.connect(API_ENDPOINT_NODEJS)
    if (loginState.for == 'business') {
      socketRef.current.on('businessRecive' + loginState.id, (data) => {
        console.log(data)
      })
    }
    if (loginState.for == 'employee') {
      socketRef.current.on('sendSuccess' + loginState.id, (data) => {
        lastSend.current = data
        setList((e) => {
          return [...e, data]
        })
      })
    }

    return () => {
      socketRef.current.disconnect()
    }
  }, [])
  const handleSend = () => {
    let data = {
      _idEmployee:
        new Date().getTime() - lastSend.current?.date <= 5 * 60 * 60
          ? lastSend.current?._idEmployee
          : undefined,
      _idBusiness:
        new Date().getTime() - lastSend.current?.date <= 5 * 60 * 60
          ? lastSend.current?._idBusiness
          : undefined,
      employeeId: loginState.id,
      businessId: businessId,
      type: true,
      content: input,
    }
    socketRef.current.emit('employeeSend', data)
  }
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
          {list?.map((value, index) => {
            if (value.type) {
              return (
                <ChatItem key={index} date={value.date} name={loginState.profile.name} type="owner">
                  {value.content}
                </ChatItem>
              )
            } else {
              return (
                <ChatItem key={index} date={value.date} type="guess">
                  {value.content}
                </ChatItem>
              )
            }
          })}
        </div>
      </div>
      <div className={styles.chatInput}>
        <div className={styles.chatType}>
          <textarea
            onChange={(e) => {
              e.target.style.height = '5px'
              e.target.style.height = `${e.target.scrollHeight}px`
              setInput(e.target.value)
            }}
            rows={1}
            placeholder="Typing here ..."
          ></textarea>
        </div>
        <div onClick={handleSend} className={styles.chatSend}>
          <i className="fa-solid fa-paper-plane-top"></i>
        </div>
      </div>
    </div>
  )
}

export default Index
