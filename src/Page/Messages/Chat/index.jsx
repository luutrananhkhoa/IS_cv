import React, { useState, useEffect, useContext, useRef } from 'react'
import styles from './styles.module.scss'
import CompactItem from '../Components/CompactItem'

import ChatItem from '../Components/ChatItem'
import messagesBackground from '@asset/messages_background.jpg'

import { getContract as getContractBusiness } from '@contract/businessController'
import { getContract as getContractEmployee } from '@contract/employeeController'
import { useParams } from 'react-router-dom'
import { Web3Context } from '@context/Web3ContextProvider'
import { ChatContext } from '../ChatContext'
import Top from './Top'
import avatarDefault from '@asset/avatar.png'
import * as employeeApi from '@api/employee/profile'
import * as businessApi from '@api/business/profile'
import _ from 'lodash'
import { useLocation } from 'react-router-dom'

function Index() {
  const { loginState } = useContext(Web3Context)
  const { list, handleSend } = useContext(ChatContext)
  const [profile, setProfile] = useState({ avatar: avatarDefault })
  const location = useLocation()
  const id = parseInt(useParams().id)
  const [input, setInput] = useState()
  useEffect(() => {
    if (location.pathname.includes('profile')) {
      getContractEmployee()
        .then((contractEmployee) => {
          contractEmployee.methods
            .getProfile(id)
            .call()
            .then(async (success) => {
              await employeeApi
                .getAvatar(id)
                .then((avatar) => {
                  success.avatar = avatar
                })
                .catch((error) => console.error(error))
              setProfile({ ...profile, ...success })
            })
            .catch((error) => console.error(error))
        })
        .catch((error) => {
          console.error(error)
        })
    }
    if (location.pathname.includes('page')) {
      getContractBusiness()
        .then(async (contractBusiness) => {
          contractBusiness.methods
            .getProfile(id)
            .call()
            .then(async (success) => {
              await businessApi
                .getAvatar(id)
                .then((avatar) => {
                  success.avatar = avatar
                })
                .catch((error) => console.error(error))
              setProfile({ ...profile, ...success })
            })
            .catch((error) => console.error(error))
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [id])

  return (
    <div className={styles.container}>
      {profile && list && (
        <>
          <Top profile={profile} id={id}></Top>
          <div style={{ backgroundImage: `url(${messagesBackground})` }} className={styles.content}>
            <div className={styles.scroll}>
              {list?.map((value, index) => {
                if (value.type) {
                  return (
                    <ChatItem
                      key={index}
                      date={value.date}
                      profile={loginState.profile}
                      type="owner"
                    >
                      {value.content}
                    </ChatItem>
                  )
                } else {
                  return (
                    <ChatItem key={index} date={value.date} profile={profile} type="guess">
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
                  e.target.style.height = 'inherit'
                  e.target.style.height = `${e.target.scrollHeight}px`
                  setInput(e.target.value)
                }}
                value={input}
                rows={1}
                placeholder="Typing here ..."
              ></textarea>
            </div>
            <div
              onClick={() => {
                handleSend(input)
                setInput('')
              }}
              className={styles.chatSend}
            >
              <i className="fa-solid fa-paper-plane-top"></i>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Index
