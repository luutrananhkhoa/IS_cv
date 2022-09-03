import React, { useContext, useState, useEffect } from 'react'
import styles from './styles.module.scss'
import Item from './Item'
import { Web3Context } from '@context/Web3ContextProvider'
import { useLocation } from 'react-router-dom'
import { getContract as getContractEmployee } from '@contract/employeeController'

function Index() {
  const [list, setList] = useState()
  const { loginState } = useContext(Web3Context)
  const location = useLocation()
  useEffect(() => {
    if (location.pathname.includes('profile')) {
      getContractEmployee()
        .then((success) => {
          success.methods
            .getListSkillOfEmployee(loginState.id)
            .call({ from: loginState.address })
            .then((success) => {
              setList(success)
            })
            .catch((error) => {
              console.log(error)
            })
        })
        .catch((error) => console.error(error))
    }
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <a>Skills</a>
      </div>
      {list?.map((value, index) => {
        return <Item key={index} title={value.title} level={value.level}></Item>
      })}
    </div>
  )
}

export default Index
