import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import Group from './Group'
import Name from '../Components/Name'
import { Web3Context } from '@context/Web3ContextProvider'
import avatarDefault from '@asset/avatar.png'
import * as employeeApi from '@api/employee/profile'
import * as businessApi from '@api/business/profile'

function Index() {
  const { loginState } = useContext(Web3Context)
  const [avatar, setAvatar] = useState(avatarDefault)
  useEffect(() => {
    if (loginState.for == 'employee') {
      employeeApi
        .getAvatar(loginState.id)
        .then((success) => {
          setAvatar(success)
        })
        .catch((error) => console.error(error))
    }
    if (loginState.for == 'business') {
      businessApi
        .getAvatar(loginState.id)
        .then((success) => {
          setAvatar(success)
        })
        .catch((error) => console.error(error))
    }
  }, [loginState])
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Name avatar={avatar} title={loginState.profile.name} info={'Good morning!'}></Name>
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
