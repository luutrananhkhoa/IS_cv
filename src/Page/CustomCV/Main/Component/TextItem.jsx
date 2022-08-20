import { memo, useContext } from 'react'
import { dataTypes } from '@page/CustomCV/ItemTypes'
import styles from '../styles.module.scss'

function TextItem(props) {
  const { item } = props
  return (
    <div className={styles.component} style={{}}>
      {item.content}
    </div>
  )
}

export default memo(TextItem)
