import React from 'react'
import styles from './styles.module.scss'
import Skills from './Skills'
import Infos from './Infos'
import clsx from 'clsx'
function Index() {
  return (
    <>
      <div className={styles.container}>
        <Infos></Infos>
        <Skills></Skills>
      </div>
    </>
  )
}

export default Index
