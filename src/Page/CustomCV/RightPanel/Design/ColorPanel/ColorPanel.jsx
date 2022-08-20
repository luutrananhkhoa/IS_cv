import React, { useState, useEffect } from 'react'
import { ColorPicker, useColor } from 'react-color-palette'
import './styles.scss'
import * as constant from '../../constant'
import styles from './styles.module.scss'

function ColorPanel() {
  const [color, setColor] = useColor('hex', '#121212')
  useEffect(() => {
    // console.log(color)
  }, [color])
  return (
    <div className={styles.container}>
      <div className={styles.targetWrapper}>
        <div className={styles.target}>Target</div>
        <div className={styles.string}>doit1</div>
      </div>

      <div className={styles.colorPicker}>
        <ColorPicker
          width={constant.panelWidth - 20}
          onChangeComplete={() => {
            console.log('complete')
          }}
          height={200}
          color={color}
          onChange={setColor}
          hideHSV
        />
      </div>
    </div>
  )
}

export default ColorPanel
