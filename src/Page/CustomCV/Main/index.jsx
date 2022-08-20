import React, { useCallback, useState } from 'react'
import { Container } from './Container'
import { CustomDragLayer } from './CustomDragLayer'
import styles from './styles.module.scss'
import { BOARDDIMENSION } from './config'

console.log(window.screen.width)

const caculatedDimension = {
  left: window.screen.width / 2 - BOARDDIMENSION.width / 2,
  top: BOARDDIMENSION.top,
  width: BOARDDIMENSION.width,
  height: BOARDDIMENSION.height,
}

function Index() {
  const style = {
    left: caculatedDimension.left + 'px',
    top: caculatedDimension.top + 'px',
  }
  return (
    <div className={styles.index} style={style}>
      <Container caculatedDimension={caculatedDimension} snapToGrid={true} />
      <CustomDragLayer snapToGrid={false} />
    </div>
  )
}

export default Index
