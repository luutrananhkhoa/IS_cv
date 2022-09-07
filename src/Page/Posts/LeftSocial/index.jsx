import React, { useContext } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import SkillsPanel from './SkillsPanel'
import IIGRequestPanel from './IIGRequestPanel'
import { Web3Context } from '@context/Web3ContextProvider'

function Index() {
  const { loginState } = useContext(Web3Context)
  return (
    <div className={styles.container}>
      {location.pathname.includes('profile') && <SkillsPanel></SkillsPanel>}

      {location.pathname.includes('page') && loginState.for == 'employee' && (
        <IIGRequestPanel></IIGRequestPanel>
      )}
    </div>
  )
}

export default Index
