import React, { useEffect, useState, useContext } from 'react'
import styles from './styles.module.scss'
import { Link, useSearchParams } from 'react-router-dom'
import clsx from 'clsx'
import avatarDefault from '@asset/avatar.png'
import { useTranslation } from 'react-i18next'
import { getAvatar } from '@api/business/profile'
import { Web3Context } from '@context/Web3ContextProvider'
function Index() {
  const { loginState } = useContext(Web3Context)
  const { t } = useTranslation('page', { keyPrefix: 'dashboard.index' })
  const [searchParams] = useSearchParams()
  const [avatar, setAvatar] = useState()
  useEffect(() => {
    getAvatar(loginState.id)
      .then((success) => setAvatar(success))
      .catch((error) => console.error(error))
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.topWrapper}>
        <img src={avatar || avatarDefault}></img>
        <div className={styles.titleWrapper}>
          <a className={styles.title}>{loginState.profile.name}</a>
          <p className={styles.text}>Group</p>
        </div>
      </div>
      <div className={styles.tableWrapper}>
        {(() => {
          let active = 'dashboard'
          switch (searchParams.get('tab')) {
            case 'posts':
              active = 'posts'
              break
            case 'certificates':
              active = 'certificates'
              break
            case 'schedule':
              active = 'schedule'
              break
            default:
              active = 'dashboard'
              break
          }
          return (
            <>
              <Link
                key={1}
                to="/dashboard"
                className={clsx(styles.tab, { [styles.active]: active == 'dashboard' })}
              >
                <i className="fa-regular fa-house-heart"></i>
                <a>{t('dashboard')}</a>
              </Link>
              <Link
                key={2}
                to="/dashboard?tab=posts"
                className={clsx(styles.tab, { [styles.active]: active == 'posts' })}
              >
                <i className="fa-regular fa-blog"></i>
                <a>{t('posts')}</a>
              </Link>
              <Link
                key={3}
                to="/dashboard?tab=certificates"
                className={clsx(styles.tab, { [styles.active]: active == 'certificates' })}
              >
                <i className="fa-regular fa-certificate"></i>
                <a>{t('certificate')}</a>
              </Link>
              <Link
                key={4}
                to="/dashboard?tab=schedule"
                className={clsx(styles.tab, { [styles.active]: active == 'schedule' })}
              >
                <i className="fa-regular fa-calendar-star"></i>
                <a>Schedule</a>
              </Link>
            </>
          )
        })()}
      </div>
    </div>
  )
}

export default Index
