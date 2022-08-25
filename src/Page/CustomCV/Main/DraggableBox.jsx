import { memo, useRef, useContext, useState } from 'react'
import { useDrag } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import { dataTypes } from '@page/CustomCV/ItemTypes'
import BoxItem from './Component/BoxItem'
import TextItem from './Component/TextItem'
import ImageItem from './Component/ImageItem'
import IconItem from './Component/IconItem'
import { CustomCVContext } from '../CustomCVContext'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { Rnd } from 'react-rnd'

import update from 'immutability-helper'
import SelectIconModal from './Component/SelectIconModal'

export const DraggableBox = memo(function DraggableBox(props) {
  const { id, boardDimension } = props
  const { list, setList, selected, setSelected, setSelectedFor } = useContext(CustomCVContext)
  const preWDrag = useRef()
  const preHDrag = useRef()
  const [openIcon, setOpenIcon] = useState(false)
  const handleClick = (e) => {
    if (list[id].lock) return
    if (selected != id) {
      setSelected(id)
      return
    }
    switch (e.detail) {
      case 2:
        if (list[id].type == dataTypes.icon.type) setOpenIcon(true)
        else if (list[id].type == dataTypes.text.type)
          setList(update(list, { [id]: { $merge: { typing: true } } }))
        break
    }
  }
  return (
    <>
      <SelectIconModal id={id} state={[openIcon, setOpenIcon]}></SelectIconModal>
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
              return <BoxItem key={id} id={id} item={list[id]}></BoxItem>
            case dataTypes.image.type:
              return <ImageItem key={id} id={id} item={list[id]}></ImageItem>
            case dataTypes.icon.type:
              return <IconItem key={id} id={id} item={list[id]}></IconItem>
          }
        })()}
      </Rnd>
    </>
  )
})
