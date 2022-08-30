import React, { useContext, useState, useEffect } from 'react'
import styles from './styles.module.scss'
import Item from './Item'
import { Web3Context } from '@context/Web3ContextProvider'

function Index() {
  const [list, setList] = useState()
  const { loginState } = useContext(Web3Context)
  useEffect(() => {
    loginState.contractEmployee.methods
      .getListSkillOfEmployee(loginState.id)
      .call({ from: loginState.address })
      .then((success) => {
        setList(success)
      })
      .catch((error) => {
        console.log(error)
      })
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
