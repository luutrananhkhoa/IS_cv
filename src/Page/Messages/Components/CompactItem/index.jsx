import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import avatarMen from '@asset/avatar_men.png'
import clsx from 'clsx'
import { getContract as getContractBusiness } from '@contract/businessController'
import { getContract as getContractEmployee } from '@contract/employeeController'
import { Link } from 'react-router-dom'

function Index({ applyId, appointmentId, status, time }) {
  const [profile, setProfile] = useState()
  useEffect(() => {
    getContractBusiness()
      .then((contractBusiness) => {
        contractBusiness.methods
          .getApply(applyId)
          .call()
          .then((apply) => {
            contractBusiness.methods
              .getPost(apply.postId)
              .call()
              .then((post) => {
                contractBusiness.methods
                  .getProfile(post.id)
                  .call()
                  .then((success) => {
                    setProfile({ ...success })
                  })
                  .catch((error) => {
                    console.error(error)
                  })
              })
              .catch((error) => {
                console.log(error)
              })
          })

          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => console.error(error))
  }, [])
  return (
    <>
      {profile && (
        <Link to={`/messages/page/${profile?.id}`} className={styles.container}>
          <div className={styles.left}>
            <div className={styles.icon}>
              <img src={avatarMen}></img>
            </div>
            <div className={styles.text}>
              <div className={styles.name}>{profile?.name}</div>
              <div className={styles.message}>Lorem ipsum dolor sit am</div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.time}>10:45</div>
            <div className={styles.count}>10</div>
          </div>
        </Link>
      )}
    </>
  )
}

export default Index
