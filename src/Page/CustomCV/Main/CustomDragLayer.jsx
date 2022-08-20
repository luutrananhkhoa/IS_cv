import { useContext } from 'react'
import { useDragLayer } from 'react-dnd'
import { dataTypes } from '../ItemTypes'
import { snapToGrid } from './snapToGrid'
import { CustomCVContext } from '../CustomCVContext'
import styles from './styles.module.scss'
import TextItem from './Component/TextItem'
import BoxItem from './Component/BoxItem'

function getItemStyles(initialOffset, currentOffset, isSnapToGrid) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    }
  }
  let { x, y } = currentOffset
  if (isSnapToGrid) {
    x -= initialOffset.x
    y -= initialOffset.y
    ;[x, y] = snapToGrid(x, y)
    x += initialOffset.x
    y += initialOffset.y
  }
  const transform = `translate(${x}px, ${y}px)`
  return {
    display: 'inline-block',
    transform,
    WebkitTransform: transform,
  }
}
export const CustomDragLayer = (props) => {
  const { list, setList } = useContext(CustomCVContext)
  const { itemType, isDragging, item, initialOffset, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }))

  if (!isDragging) {
    return null
  }
  return (
    <div className={styles.boardPreview}>
      <div
        style={{
          ...getItemStyles(initialOffset, currentOffset, props.snapToGrid),
          width: list[item.id].width + 'px',
          height: list[item.id].height + 'px',
          borderRadius: list[item.id].borderRadius + 'px',
        }}
        className={styles.active}
      >
        {(() => {
          if (list[item.id]) {
            switch (list[item.id].type) {
              case dataTypes.text.type:
                return <TextItem key={item.id} id={item.id} item={list[item.id]}></TextItem>
              case dataTypes.box.type:
                return <BoxItem key={item.id} id={item.id}></BoxItem>
            }
          } else {
            return <div>test</div>
          }
        })()}
      </div>
    </div>
  )
}
