import { memo, useEffect, useContext } from 'react'
import { useDrag } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import { dataTypes } from '@page/CustomCV/ItemTypes'
import BoxItem from './Component/BoxItem'
import TextItem from './Component/TextItem'
import { CustomCVContext } from '../CustomCVContext'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { ResizeableContainer } from '../Resizeable'

export const DraggableBox = memo(function DraggableBox(props) {
  const { id } = props
  const { list, selected, setSelected } = useContext(CustomCVContext)
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: 'box',
      item: { id },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id]
  )
  const handleClick = () => {
    setSelected(id)
  }
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [])
  return (
    <div
      onClick={handleClick}
      ref={drag}
      style={{
        transform: `translate3d(${list[id].left}px, ${list[id].top}px, 0)`,
        width: list[id].width + 'px',
        height: list[id].height + 'px',
        borderRadius: list[id].borderRadius + 'px',
      }}
      role="DraggableBox"
      className={clsx(styles.draggableBox, { [styles.active]: selected == id })}
    >
      <ResizeableContainer
        // endResize={(e) => console.log(e)}
        dimension={{
          top: list[id].top,
          left: list[id].left,
          width: list[id].width,
          height: list[id].height,
        }}
        resizeTop
        resizeLeft
        resizeBottom
        resizeRight
        setDimension={(e) => {
          console.log(e)
        }}
        minTop={100}
  
      >
        {(() => {
          switch (list[id].type) {
            case dataTypes.text.type:
              return <TextItem key={id} id={id} item={list[id]}></TextItem>
            case dataTypes.box.type:
              return <BoxItem key={id} id={id}></BoxItem>
          }
        })()}
      </ResizeableContainer>
    </div>
  )
})
