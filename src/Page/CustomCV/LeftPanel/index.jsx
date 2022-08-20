import React, { useState, useEffect, useContext } from 'react'
import styles from './styles.module.scss'
import { ResizeableContainer } from '@component/Resizeable'
import clsx from 'clsx'
import LayerGroup from './LayerGroup'
import generate from '@helper/generate'
import ComponentGroup from './ComponentGroup'

const width = '300px'
function Index(props) {
  // const [dimension, setDimension] = useState()
  return (
    <ResizeableContainer
      dimension={{ left: 0, width: 400 }}
      resizeRight
      // setDimension={setDimension}
      active
      // minWidth={200}
      style={{
        position: 'fixed',
        zIndex: 7,
        top: 48,
        bottom: 0,
        minWidth: '250px',
        height: '100%',
      }}
    >
      <div className={styles.container}>
        <ComponentGroup></ComponentGroup>
        <LayerGroup></LayerGroup>
      </div>
    </ResizeableContainer>
  )
}

export default Index
