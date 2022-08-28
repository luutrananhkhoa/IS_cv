import React, { useContext } from 'react'
import styles from './styles.module.scss'
import { SocialContext } from '@context/SocialContext'
import StatusPanel from './StatusPanel'
import PostItem from '@component/PostItem'

function Index() {
  return (
    <div className={styles.container}>
      <StatusPanel></StatusPanel>
      <PostItem></PostItem>
      <PostItem></PostItem>
      <PostItem></PostItem>
      <PostItem></PostItem>
    </div>
  )
}

export default Index
