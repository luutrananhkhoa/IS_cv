import { useCallback, useState, useRef, useEffect, useContext, useLayoutEffect } from 'react'
import { useDrop } from 'react-dnd'
import { DraggableBox } from './DraggableBox'
import { defaultComponent } from '../config'
import { dataTypes } from '../ItemTypes'
import { snapToGrid as doSnapToGrid } from './snapToGrid'
import _ from 'lodash'
import { BOARDDIMENSION } from '../config'
import { CustomCVContext } from '../CustomCVContext'
import styles from './styles.module.scss'
import events from 'events'

export const customcvEmitter = new events.EventEmitter()

const boardDimension = {
  left: window.screen.width / 2 - BOARDDIMENSION.width / 2,
  top: BOARDDIMENSION.top,
  width: BOARDDIMENSION.width,
  height: BOARDDIMENSION.height,
}
export default function Container(props) {
  const { snapToGrid } = props

  const { list, setList, setSelected, getNewAutoCreatement } = useContext(CustomCVContext)

  const addComponent = useCallback(
    (type, top, left) => {
      let newData
      let newId = getNewAutoCreatement()
      switch (type) {
        case dataTypes.text.type:
          newData = {
            top,
            left,
            type: dataTypes.text.type,
            name: 'Text ' + newId,
            ...defaultComponent.common,
            ...defaultComponent.text,
          }
          break
        case dataTypes.box.type:
          newData = {
            top,
            left,
            type: dataTypes.box.type,
            name: 'Box ' + newId,
            ...defaultComponent.common,
            ...defaultComponent.box,
          }
          break
        case dataTypes.image.type:
          newData = {
            top,
            left,
            type: dataTypes.image.type,
            name: 'Image ' + newId,
            // ...defaultComponent.common,
            ...defaultComponent.image,
          }
          break
        case dataTypes.icon.type:
          newData = {
            top,
            left,
            type: dataTypes.icon.type,
            name: 'Icon ' + newId,
            // ...defaultComponent.common,
            ...defaultComponent.icon,
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
    <div ref={drop} id={'custom_board'} style={boardDimension} className={styles.board}>
      <div id="draw_child" className={styles.drawChild}>
        {Object.keys(list).map((id, index) => {
          return <DraggableBox key={index} id={id} boardDimension={boardDimension} />
        })}
        <div id="draw_table" style={{ width: '100vw', height: '100vh', background: 'white' }}></div>
      </div>
    </div>
  )
}
