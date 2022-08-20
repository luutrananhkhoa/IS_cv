import { useCallback, useState, useRef, useEffect, useContext } from 'react'
import { useDrop } from 'react-dnd'
import { DraggableBox } from './DraggableBox'
import { ItemTypes } from '../ItemTypes'
import { snapToGrid as doSnapToGrid } from './snapToGrid'
import _ from 'lodash'
import { BOARDDIMENSION } from './config'
import { CustomCVContext } from '../CustomCVContext'
import styles from './styles.module.scss'
import update from 'immutability-helper'
import generate from '@helper/generate'

export const Container = (props) => {
  const { snapToGrid, caculatedDimension } = props
  const style = {
    width: caculatedDimension.width,
    height: caculatedDimension.height,
  }
  const { list, setList } = useContext(CustomCVContext)
  const moveBox = useCallback(
    (id, left, top) => {
      let item = _.find(list, (o) => {
        if (o.id === id) return true
      })
      setList(update(list, { [id]: { $merge: { top, left } } }))
    },
    [list]
  )
  const addBox = useCallback(
    (type, left, top) => {
      setList(update(list, { $merge: { id: generate(5), type, top, left, width: 20, height: 10 } }))
    },
    [list]
  )
  const [, drop] = useDrop(
    () => ({
      accept: 'box',
      drop(item, monitor) {
        let left, top
        let board = document.getElementById('custom_board')
        let boardPosition = {
          left: board.getBoundingClientRect().left,
          top: board.getBoundingClientRect().top,
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
        if (left < 0 || left > caculatedDimension.width) return
        if (top < 0 || top > caculatedDimension.height) return

        let temp = list[item.id]
        if (temp) {
          const delta = monitor.getDifferenceFromInitialOffset()
          left = Math.round(temp.left + delta.x)
          top = Math.round(temp.top + delta.y)
          if (snapToGrid) {
            ;[left, top] = doSnapToGrid(left, top)
          }
          moveBox(item.id, left, top)
        } else {
          addBox(left, top)
        }

        return undefined
      },
    }),
    [moveBox]
  )
  return (
    <div ref={drop} id="custom_board" style={style} className={styles.board}>
      {Object.keys(list).map((id, index) => {
        return <DraggableBox key={index} id={id} />
      })}
    </div>
  )
}
