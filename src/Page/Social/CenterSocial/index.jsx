import React, { useContext } from 'react'
import styles from './styles.module.scss'
import { SocialContext } from '@context/SocialContext'
import Feed from './Feed'

function Index() {
  const { tab, setTab } = useContext(SocialContext)
  return <div className={styles.container}>{tab == 1 && <Feed></Feed>}</div>
}

export default Index
