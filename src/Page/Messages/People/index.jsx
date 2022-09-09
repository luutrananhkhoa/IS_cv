import React, { useContext, useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import Group from './Group'
import Name from '../Components/Name'
import { Web3Context } from '@context/Web3ContextProvider'
import { API_ENDPOINT_NODEJS } from '@constant/index'
import socketIOClient from 'socket.io-client'

function Index() {
  const { loginState } = useContext(Web3Context)
  const socketRef = useRef()
  useEffect(() => {
    socketRef.current = socketIOClient.connect(API_ENDPOINT_NODEJS)
    // if (loginState.for == 'business') {
    //   socketRef.current.on('businessRecive' + loginState.id, (data) => {
    //     console.log(data)
    //   })
    // }
    // if (loginState.for == 'employee') {
    //   socketRef.current.on('sendSuccess' + loginState.id, (data) => {
    //     console.log(data)
    //   })
    // }

    return () => {
      socketRef.current.disconnect()
    }
  }, [])

  const handleSend = () => {
    socketRef.current.emit('employeeSend', 1, 1, 'data')
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Name title={loginState.profile.name} info={'Good morning!'}></Name>
        <div className={styles.tools}>
          <button className={styles.plus}>
            <i className="fa-regular fa-plus"></i>
          </button>
          <button className={styles.search}>
            <i className="fa-regular fa-search"></i>
          </button>
        </div>
      </div>
      <Group></Group>
    </div>
  )
}

export default Index
