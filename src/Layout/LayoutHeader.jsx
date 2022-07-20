import React from 'react'
import Header from '@component/Header'
import { Outlet } from 'react-router-dom'

export default function LayoutHeader() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}
