import React, { useContext, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import cover from '@asset/cover.png'
import avatar from '@asset/avatar.jpg'
import clsx from 'clsx'
import { Outlet, Link, useLocation, useParams } from 'react-router-dom'
import { Web3Context } from '@context/Web3ContextProvider'
import { getContract } from '@contract/businessController'
import { getAvatar } from '@api/business/profile'

function Index() {
  const { loginState } = useContext(Web3Context)
  const location = useLocation()
  const [info, setInfo] = useState()
  const [hasAvatar, setHasAvatar] = useState()
  const id = parseInt(useParams().id)
  useEffect(() => {
    getContract()
      .then((success) => {
        success.methods
          .getProfile(id)
          .call()
          .then((success) => {
            setInfo({ ...success })
          })
          .catch((error) => console.log(error))
      })
      .catch((error) => console.log(error))

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
            <div className={styles.nameGroup}>
              <div className={styles.name}>{info?.name}</div>
              <Link to={`/messages/page/${id}`} className={styles.messages}>Messages</Link>
            </div>
          </div>
        </div>
        <div className={styles.tableWrapper}>
          <Link
            to={`/page/${id}`}
            className={clsx(styles.tab, { [styles.active]: location.pathname == `/page/${id}` })}
          >
            Post
          </Link>
          <Link
            to={`/page/${id}/about`}
            className={clsx(styles.tab, {
              [styles.active]: location.pathname == `/page/${id}/about`,
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

export default Index
