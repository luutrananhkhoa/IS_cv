import React, { useState, useEffect, useContext } from 'react'
import styles from './styles.module.scss'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Item from './Item'
import { getContract as getContractBusiness } from '@contract/businessController'
import { Web3Context } from '@context/Web3ContextProvider'
import Navigation from '../../Components/Navigation'

function Index() {
  const { loginState } = useContext(Web3Context)
  const [list, setList] = useState()
  useEffect(() => {
    getContractBusiness()
      .then(async (contract) => {
        contract.methods
          .getListPostOfBusiness(loginState.id, 1659312020, Date.now())
          .call({ from: loginState.address })
          .then((success) => {
            let temp = []
            _.forEach(success, (value, index) => {
              temp.push({ ...value })
            })
            temp = _.orderBy(temp, (o) => parseInt(o.time), 'desc')
            setList(temp)
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => console.log(error))
  }, [])
  return (
    <>
      <div className={styles.container}>
        <Navigation title={"Manager Posts"}></Navigation>
        <div className={styles.tool}>
          <Link to="/dashboard?tab=posts&create=true" className={styles.create}>
            Create post
          </Link>
        </div>
        <div className={styles.tableWrapper}>
          <div className={styles.panel}>
            <table cellSpacing="0">
              <tr>
                <th>Post name</th>
                <th>Date</th>
                <th>Status</th>
                <th>Detail</th>
                <th>Apply</th>
              </tr>
              {list?.map((value, index) => {
                return <Item key={index} {...value}></Item>
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
