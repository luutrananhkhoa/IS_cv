import React from 'react'
import styles from './styles.module.scss'
import LeftSocial from './LeftSocial'
import RightSocial from './RightSocial'
import CenterSocial from './CenterSocial'

function Index() {
  return (
    <div className={styles.container}>
      <LeftSocial></LeftSocial>
      <CenterSocial></CenterSocial>
      <RightSocial></RightSocial>
    </div>
  )
}

export default Index
