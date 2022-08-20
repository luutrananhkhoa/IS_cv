import React from 'react'
import styles from './styles.module.scss'
import logo from '@asset/LogoCV.png'

function Index() {
  return (
    <div className={styles.container}>
      <img alt="logo" src={logo}></img>
    </div>
  )
}

export default Index
