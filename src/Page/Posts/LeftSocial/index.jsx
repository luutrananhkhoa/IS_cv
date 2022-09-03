import React, { useContext } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import SkillsPanel from './SkillsPanel'
import { Web3Context } from '@context/Web3ContextProvider'

function Index() {
  const { loginState } = useContext(Web3Context)
  return (
    <div className={styles.container}>
      {location.pathname.includes('profile') && <SkillsPanel></SkillsPanel>}
    </div>
  )
}

export default Index
