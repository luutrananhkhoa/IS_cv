import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import ColorPanel from './ColorPanel/ColorPanel'
import Dimension from './Dimension'
import Text from './Text'
import Style from './Style'

function Index() {
  return (
    <div className={styles.container}>
      <ColorPanel></ColorPanel>
      <Dimension></Dimension>
      <Text></Text>
      <Style></Style>
    </div>
  )
}

export default Index
