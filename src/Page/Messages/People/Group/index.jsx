import React, { useContext, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import CompactItem from '../../Components/CompactItem'
import _ from 'lodash'
import { Web3Context } from '@context/Web3ContextProvider'
import { getContract as getContractEmployee } from '@contract/employeeController'
function Index() {
  const { loginState } = useContext(Web3Context)
  const [list, setList] = useState()
  useEffect(() => {
    getContractEmployee()
      .then((contract) => {
        contract.methods
          .getListApppointmentByEmployeeId(loginState.id)
          .call()
          .then((success) => {
            let temp = []
            _.forEach(success, (value, index) => {
              temp.push({ ...value })
            })
            setList(temp)
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => console.error(error))
  }, [])
  return (
    <div className={styles.group}>
      <div className={styles.title}>
        <div className={styles.iconGroupName}>
          <div className={styles.icon}>
            <i className="fa-sharp fa-solid fa-location-check"></i>
          </div>
          <div className={styles.name}>Pinned Messages</div>
        </div>
        <div className={styles.more}>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>

      <div className={styles.main}>
        {list?.map((value, index) => {
          return <CompactItem key={index} {...value}></CompactItem>
        })}
      </div>
    </div>
  )
}

export default Index
