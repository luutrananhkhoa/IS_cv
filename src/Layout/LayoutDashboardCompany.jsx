import React from 'react'
import HeaderDashboard from '@component/HeaderDashboard'
import { Outlet } from 'react-router-dom'

export default function LayoutDashboardCompany() {
  return (
    <>
      <HeaderDashboard></HeaderDashboard>
      <Outlet></Outlet>
    </>
  )
}
