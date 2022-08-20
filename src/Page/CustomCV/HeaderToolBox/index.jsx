import React from 'react'
import styles from './styles.module.scss'
import Button from './Button'
import Logo from './Logo'
import clsx from 'clsx'
import Object from "./Object"

function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Logo></Logo>
        <Button icon={'fa-thin fa-paste'}></Button>
        <Button icon={'fa-thin fa-copy'}></Button>
        <Button icon={'fa-thin  fa-scissors'}></Button>
        <Button icon={'fa-thin fa-trash-can'}></Button>

        <Button icon=""></Button>
        <Button></Button>
        <Button></Button>
      </div>

      <div className={styles.targetContainer}>
        <Object></Object>
      </div>
      <div className={styles.right}>
        <Button icon="fa-thin fa-cloud-arrow-down"></Button>
        <Button icon="fa-thin fa-play"></Button>
      </div>
    </div>
  )
}

export default Index
