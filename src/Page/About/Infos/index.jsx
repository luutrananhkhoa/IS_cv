import React, { useContext, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Web3Context } from '@context/Web3ContextProvider'
import Item from './Item'
import { useLocation } from 'react-router-dom'
import { getContract as getContractBusiness } from '@contract/businessController'
import { getContract as getContractEmployee } from '@contract/employeeController'

function Index() {
  const { loginState } = useContext(Web3Context)
  const [list, setList] = useState()
  const location = useLocation()
  useEffect(() => {
    if (location.pathname.includes('profile')) {
      getContractEmployee()
        .then((success) => {
          success.methods
            .getProfile(loginState.id)
            .call({ from: loginState.address })
            .then((success) => setList({ ...success }))
            .catch((error) => console.log(error))
        })
        .catch((error) => console.log(error))
    }
    if (location.pathname.includes('page')) {
      getContractBusiness()
        .then((success) => {
          success.methods
            .getProfile(loginState.id)
            .call({ from: loginState.address })
            .then((success) => setList({ ...success }))
            .catch((error) => console.log(error))
        })
        .catch((error) => console.log(error))
    }
  }, [])
  return (
    <div className={styles.personalWrapper}>
      {list && (
        <div className={styles.personal}>
          <div className={styles.title}>Personal</div>
          {Object.keys(list).map((key) => {
            if (
              !Number.isInteger(parseInt(key)) &&
              key != 'catergory' &&
              key != 'id' &&
              key != 'idCardNumber' &&
              key != 'user' &&
              key != 'sourceImage' &&
              key != 'password'
            )
              return <Item key={key} label={key} value={list[key]}></Item>
          })}
        </div>
      )}
    </div>
  )
}

export default Index
