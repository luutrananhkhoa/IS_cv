import React, { useState, useContext } from 'react'
import styles from './styles.module.scss'
import DashboardMenu from './DashboardMenu'
import HeaderDashboard from './/HeaderDashboard'
import { useTranslation } from 'react-i18next'

import DashboardContextProvider, { DashboardContext } from './DashboardContextProvider'

function Index() {
  const { t } = useTranslation('page', { keyPrefix: 'company.dashboard.index' })
  const { menuSelected, closeMenu, setCloseMenu } = useContext(DashboardContext)
  return (
    <>
      {/* {console.log(t('title'))} */}
      <HeaderDashboard></HeaderDashboard>
      <div className={styles.container}>
        <DashboardMenu></DashboardMenu>
        {menuSelected.element}
      </div>
    </>
  )
}

export default function Wrapper() {
  return (
    <DashboardContextProvider>
      <Index></Index>
    </DashboardContextProvider>
  )
}
