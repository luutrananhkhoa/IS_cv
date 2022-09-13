import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import Group from './Group'
import Name from '../Components/Name'
import { Web3Context } from '@context/Web3ContextProvider'

function Index() {
  const { loginState } = useContext(Web3Context)

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
