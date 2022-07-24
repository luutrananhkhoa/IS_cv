import React, { useState } from 'react'
import styles from './styles.module.scss'
import DashboardMenu from '@component/DashboardMenu'
import HeaderDashboard from '@component/HeaderDashboard'
import ListCertificate from './ListCertificate'

export default function Index() {
  const [closeMenu, setCloseMenu] = useState(false)
  return (
    <>
      <HeaderDashboard state={[closeMenu, setCloseMenu]}></HeaderDashboard>
      <div className={styles.container}>
        <DashboardMenu state={[closeMenu, setCloseMenu]}></DashboardMenu>
        <ListCertificate></ListCertificate>
      </div>
    </>
  )
}
