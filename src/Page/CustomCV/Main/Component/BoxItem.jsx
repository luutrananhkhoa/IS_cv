import { memo, useState } from 'react'
import { defaultStyle } from '../../config'
import styles from '../styles.module.scss'

function BoxItem(props) {
  const { item } = props
  return (
    <div className={styles.componentText} style={defaultStyle(item)}>
    </div>
  )
}

export default memo(BoxItem)
