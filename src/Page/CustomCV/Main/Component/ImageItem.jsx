import { memo, useState } from 'react'
import { defaultStyle, defaultImageStyle } from '../../config'
import styles from '../styles.module.scss'

function ImageItem(props) {
  const { item } = props
  return (
    <>
      {item.file ? (
        <img
            
          className={styles.componentImage}
          style={{ ...defaultImageStyle(item) }}
          src={URL.createObjectURL(item.file)}
        ></img>
      ) : (
        <div className={styles.componentImage}>
          <i className="fa-thin fa-image"></i>
        </div>
      )}
    </>
  )
}

export default memo(ImageItem)
