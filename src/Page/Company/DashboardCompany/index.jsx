import React, { useState } from 'react'
import styles from './styles.module.scss'
import DashboardMenu from '@component/DashboardMenu'
import HeaderDashboard from '@component/HeaderDashboard'
import ListCertificate from './ListCertificate'
import { useTranslation } from 'react-i18next'

export default function Index() {
  const [closeMenu, setCloseMenu] = useState(false)
  const { t } = useTranslation('page', { keyPrefix: 'company.dashboard' })
  return (
    <>
      {console.log(t('title'))}
      <HeaderDashboard state={[closeMenu, setCloseMenu]}></HeaderDashboard>
      <div className={styles.container}>
        <DashboardMenu state={[closeMenu, setCloseMenu]}></DashboardMenu>
        <ListCertificate></ListCertificate>
      </div>
    </>
  )
}
