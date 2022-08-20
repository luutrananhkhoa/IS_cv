import { useCallback, useState, useRef, useEffect, useContext } from 'react'
import { useDrop } from 'react-dnd'
import { DraggableBox } from './DraggableBox'
import { defaultComponent } from '../config'
import { dataTypes } from '../ItemTypes'
import { snapToGrid as doSnapToGrid } from './snapToGrid'
import _ from 'lodash'
import { BOARDDIMENSION } from '../config'
import { CustomCVContext } from '../CustomCVContext'
import styles from './styles.module.scss'
import update from 'immutability-helper'
import generate from '@helper/generate'
import { id } from 'ethers/lib/utils'

const boardDimension = {
  left: window.screen.width / 2 - BOARDDIMENSION.width / 2,
  top: BOARDDIMENSION.top,
  width: BOARDDIMENSION.width,
  height: BOARDDIMENSION.height,
}
export default function Container(props) {
  const { snapToGrid } = props

  const { list, setList, setSelected } = useContext(CustomCVContext)

  const addComponent = useCallback(
    (type, top, left) => {
      let newData
      let newId = generate(5)
      switch (type) {
        case dataTypes.text.type:
          newData = {
            top,
            left,
            type: dataTypes.text.type,
            name: 'Text' + newId,
            ...defaultComponent.text,
          }
          break
        case dataTypes.box.type:
          newData = {
            top,
            left,
            type: dataTypes.box.type,
            name: 'Box' + newId,
            ...defaultComponent.box,
          }
          break
      }
      setList({ ...list, [newId]: newData })
      setSelected(newId)
    },
    [list]
  )
  const [, drop] = useDrop(
    () => ({
      accept: 'box',
      drop(item, monitor) {
        let left, top
        let boardPosition = {
          left: boardDimension.left,
          top: boardDimension.top,
        }
        let newBoxPosition = {
          left: monitor.getClientOffset().x,
          top: monitor.getClientOffset().y,
        }
        left = Math.round(newBoxPosition.left - boardPosition.left)
        top = Math.round(newBoxPosition.top - boardPosition.top)
        if (snapToGrid) {
          ;[left, top] = doSnapToGrid(left, top)
        }
        if (left < 0 || left > boardDimension.width) return
        if (top < 0 || top > boardDimension.height) return
        addComponent(item.type, top, left)
        return undefined
      },
    }),
    [list]
  )
  return (
    <div ref={drop} style={boardDimension} className={styles.board}>
      {Object.keys(list).map((id, index) => {
        return <DraggableBox key={index} id={id} boardDimension={boardDimension} />
      })}
    </div>
  )
}
