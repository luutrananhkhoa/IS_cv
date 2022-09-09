import { memo, useRef, useContext, useState } from 'react'
import { useDrag } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import { designTabComponents } from '@page/CustomCV/ItemTypes'

import { CustomCVContext } from '../CustomCVContext'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { Rnd } from 'react-rnd'

import update from 'immutability-helper'
import SelectIconModal from './Component/SelectIconModal'
import { Web3Context } from '@context/Web3ContextProvider'

export const DraggableBox = memo(function DraggableBox(props) {
  const { id, boardDimension } = props
  const { list, setList, selected, setSelected, setSelectedFor } = useContext(CustomCVContext)
  const { loginState } = useContext(Web3Context)
  const preWDrag = useRef()
  const preHDrag = useRef()
  const [openIcon, setOpenIcon] = useState(false)
  const handleClick = (e) => {
    if (list[id].lock) return
    if (selected != id) {
      setSelected(id)
      return
    }
    if (e.detail == 2) {
      if (list[id].type == 'icon') {
        setOpenIcon(true)
        return
      }
      if (list[id].type == 'text') {
        setList(update(list, { [id]: { $merge: { typing: true } } }))
        return
      }
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
        {designTabComponents[list[id].type].view(
          id,
          list[id],
          loginState.profile,
          selected,
          list,
          setList
        )}
      </Rnd>
    </>
  )
})
