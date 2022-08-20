import { memo, useRef, useContext } from 'react'
import { useDrag } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import { dataTypes } from '@page/CustomCV/ItemTypes'
import BoxItem from './Component/BoxItem'
import TextItem from './Component/TextItem'
import { CustomCVContext } from '../CustomCVContext'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { Rnd } from 'react-rnd'

import update from 'immutability-helper'

export const DraggableBox = memo(function DraggableBox(props) {
  const { id, boardDimension } = props
  const { list, setList, selected, setSelected } = useContext(CustomCVContext)
  const preWDrag = useRef()
  const preHDrag = useRef()
  const handleClick = () => {
    if (list[id].lock) return
    setSelected(id)
  }
  return (
    <Rnd
      style={{
        display: 'flex',
        borderRadius: list[id].borderRadius,
      }}
      size={{ width: list[id].width, height: list[id].height }}
      position={{ x: list[id].left, y: list[id].top }}
      onResizeStart={(e, d, ref) => {
        preWDrag.current = list[id].width
        preHDrag.current = list[id].height
      }}
      onResize={(e, dir, ref, delta, position) => {
        setList(
          update(list, {
            [id]: {
              $merge: {
                left: position.x,
                top: position.y,
                width: preWDrag.current + delta.width,
                height: preHDrag.current + delta.height,
              },
            },
          })
        )
      }}
      onResizeStop={(e, direction, ref, delta, position) => {}}
      onDrag={(e, d) => {
        !list[id].lock &&
          setList(
            update(list, {
              [id]: {
                $merge: {
                  top: d.y,
                  left: d.x,
                },
              },
            })
          )
      }}
      enableResizing={selected == id && !list[id].lock}
      onDragStop={(e, d) => {}}
      onClick={handleClick}
      className={clsx(
        styles.draggableBox,
        { [styles.active]: selected == id },
        { [styles.canNotHover]: list[id].lock && selected != id }
      )}
    >
      {(() => {
        switch (list[id].type) {
          case dataTypes.text.type:
            return <TextItem key={id} id={id} item={list[id]}></TextItem>
          case dataTypes.box.type:
            return <BoxItem key={id} id={id}></BoxItem>
        }
      })()}
    </Rnd>
  )
})
