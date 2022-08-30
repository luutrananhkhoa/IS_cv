import React, { useContext } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import SkillsPanel from './SkillsPanel'

function Index() {
  return (
    <div className={styles.container}>
      <SkillsPanel></SkillsPanel>
    </div>
  )
}

export default Index
