import React, { useContext, useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { Web3Context } from '@context/Web3ContextProvider'
import { useLocation, useParams } from 'react-router-dom'
import { getContract as getContractEmployee } from '@contract/employeeController'
import { getContract as getContractBusiness } from '@contract/businessController'
import { getContract as getContractIGG } from '@contract/iigController'
import { useLoading } from '@component/Loading'
import { useToast } from '@component/Toast'

function Index() {
  const [list, setList] = useState()
  const { loginState } = useContext(Web3Context)
  const [profile, setProfile] = useState()
  const params = useParams()
  const id = params.id
  const toast = useToast()
  const loading = useLoading()
  const handleLR = async () => {
    loading.open()
    await getContractIGG()
      .then(async (contractIIG) => {
        await contractIIG.methods
          ._checkExistRequestLR(loginState.id, id)
          .call({ from: loginState.address })
          .then(async (success) => {
            if (success) {
              toast.warning('has request lr', { pauseOnHover: true, closeOnClick: true })
              return
            }
            await contractIIG.methods
              .addLRRequest(loginState.id, id)
              .send({ from: loginState.address })
              .then((success) => {
                toast.success('success', { pauseOnHover: true, closeOnClick: true })
              })
              .catch((error) => console.error(error))
          })
          .catch((error) => console.error(error))
      })
      .catch((error) => console.error(error))
    loading.close()
  }
  const handleSW = async () => {
    loading.open()
    await getContractIGG()
      .then(async (contractIIG) => {
        await contractIIG.methods
          ._checkExistRequestSW(loginState.id, id)
          .call({ from: loginState.address })
          .then(async (success) => {
            if (success) {
              toast.warning('has request SW', { pauseOnHover: true, closeOnClick: true })
              return
            }
            await contractIIG.methods
              .addSWRequest(loginState.id, id)
              .send({ from: loginState.address })
              .then((success) => {
                toast.success('success', { pauseOnHover: true, closeOnClick: true })
              })
              .catch((error) => console.error(error))
          })
          .catch((error) => console.error(error))
      })
      .catch((error) => console.error(error))
    loading.close()
  }
  useEffect(() => {
    // getContractBusiness()
    //   .then((success) => {
    //     success.methods
    //       .getProfile(id)
    //       .call()
    //       .then((success) => {
    //         console.log(success)
    //       })
    //       .catch((error) => console.log(error))
    //   })
    //   .catch((error) => console.log(error))
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <a>Request certificates</a>
      </div>
      <div className={styles.content}>
        <div onClick={handleLR} className={styles.item}>
          <label>Request Listening & Reading</label>
          <i className="fa-solid fa-play"></i>
        </div>
        <div onClick={handleSW} className={styles.item}>
          <label>Request Speaking & Writing</label>
          <i className="fa-solid fa-play"></i>
        </div>
      </div>
    </div>
  )
}

export default Index
