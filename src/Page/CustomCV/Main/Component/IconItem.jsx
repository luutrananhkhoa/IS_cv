import { memo, useState } from 'react'
import { defaultStyle, defaultImageStyle } from '../../config'
import styles from '../styles.module.scss'

function IconItem(props) {
  const { id, item } = props
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className={styles.componentIcon}>
        {item.icon ? (
          <i
            style={{
              fontSize: item.width < item.height ? item.width : item.height,
              color: item.color.hex,
            }}
            className={item.icon}
          ></i>
        ) : (
          <i className="fa-thin fa-icons"></i>
        )}
      </div>
    </>
  )
}

export default memo(IconItem)
