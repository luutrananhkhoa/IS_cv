import React, { useCallback, useState } from 'react'
import styles from './styles.module.scss'
import { BOARDDIMENSION } from '../config'
import Container from './Container'
import CustomDragLayer from './CustomDragLayer'


function Index() {

  return (
    <div className={styles.index} >
      <Container snapToGrid={true} />
      <CustomDragLayer></CustomDragLayer>
    </div>
  )
}

export default Index
