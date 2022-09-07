import React, { useContext, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import cover from '@asset/cover.png'
import avatar from '@asset/avatar.png'
import clsx from 'clsx'
import ProfileContextProvider, { ProfileContext } from './ProfileContext'
import { Outlet, Link, useLocation, useParams } from 'react-router-dom'
import { Web3Context } from '@context/Web3ContextProvider'
import { getContract as getContractEmployee } from '@contract/employeeController'
import { getAvatar } from '@api/employee/profile'

function Index() {
  const { loginState } = useContext(Web3Context)
  const location = useLocation()
  const [info, setInfo] = useState()
  const [hasAvatar, setHasAvatar] = useState()
  const id = parseInt(useParams().id)
  useEffect(() => {
    getContractEmployee().then((contractEmployee) => {
      contractEmployee.methods
        .getProfile(id)
        .call()
        .then((success) => {
          setInfo({ ...success })
        })
        .catch((error) => console.log(error))
    })
    getAvatar(id)
      .then((success) => {
        setHasAvatar(success)
      })
      .catch((error) => {
        setHasAvatar(undefined)
        console.log(error)
      })
  }, [])
  return (
    <>
      <section className={styles.container}>
        <div className={styles.panel}>
          <div className={styles.cover}>
            <img src={cover} className={styles.image}></img>
          </div>
          <div className={styles.avatarWrapper}>
            <img src={hasAvatar || avatar}></img>
            <div className={styles.name}>{info?.name}</div>
          </div>
        </div>
        <div className={styles.tableWrapper}>
          <Link
            key={0}
            to={`/profile/${id}`}
            className={clsx(styles.tab, { [styles.active]: location.pathname == `/profile/${id}` })}
          >
            Post
          </Link>
          <Link
            key={1}
            to={`/profile/${id}/mycv`}
            className={clsx(styles.tab, {
              [styles.active]: location.pathname == `/profile/${id}/mycv`,
            })}
          >
            Mycv
          </Link>
          <Link
            key={1}
            to={`/profile/${id}/about`}
            className={clsx(styles.tab, {
              [styles.active]: location.pathname == `/profile/${id}/about`,
            })}
          >
            About
          </Link>
        </div>
        <Outlet></Outlet>
      </section>
    </>
  )
}

function Wrapper() {
  return (
    <ProfileContextProvider>
      <Index></Index>
    </ProfileContextProvider>
  )
}

export default Wrapper
