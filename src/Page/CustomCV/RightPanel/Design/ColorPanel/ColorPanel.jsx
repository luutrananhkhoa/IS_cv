import React, { useState, useEffect, useContext } from 'react'
import { ColorPicker, useColor } from 'react-color-palette'
import './styles.scss'
import * as constant from '../../constant'
import styles from './styles.module.scss'
import { CustomCVContext } from '../../../CustomCVContext'
import clsx from 'clsx'
import update from 'immutability-helper'

function ColorPanel() {
  const { selected, linkColor, setLinkColor, list, setList } = useContext(CustomCVContext)
  const [color, setColor] = useColor('hex', '#000000')
  useEffect(() => {
    if (selected == linkColor.id && list[selected].hex != color.hex) {
      switch (linkColor.for) {
        case 'color':
          setList(update(list, { [selected]: { $merge: { color: color } } }))
          break
        case 'background':
          setList(update(list, { [selected]: { $merge: { background: color } } }))
          break
      }
    }
  }, [color])

  // useEffect(() => {
  //   console.log(list[selected]?.color)
  // }, [list])
  useEffect(() => {
    if (linkColor.id) {
      if (selected != linkColor.id) {
        setColor({
          hex: '#000000',
          rgb: {
            r: 0,
            g: 0,
            b: 0,
          },
          hsv: {
            h: 0,
            s: 0,
            v: 0,
          },
        })

        setLinkColor({})
      } else {
        switch (linkColor.for) {
          case 'color':
            setColor(list[selected].color)
            break
          case 'background':
            setColor(list[selected].background)
            break
        }
      }
    } else {
      setColor({
        hex: '#000000',
        rgb: {
          r: 0,
          g: 0,
          b: 0,
        },
        hsv: {
          h: 0,
          s: 0,
          v: 0,
        },
      })
    }
  }, [selected, linkColor.id])
  return (
    <div className={styles.container}>
      <div className={styles.targetWrapper}>
        <div className={styles.target}>Target</div>
        <div className={styles.string}>
          {selected && linkColor && selected == linkColor.id
            ? list[selected].name + ' ~ ' + linkColor.for
            : 'none'}
        </div>
      </div>
      <div className={clsx(styles.colorPicker)}>
        <ColorPicker
          width={constant.panelWidth - 20}
          onChangeComplete={() => {}}
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
