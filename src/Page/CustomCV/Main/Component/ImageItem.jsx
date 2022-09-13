import { memo, useState } from 'react'
import { defaultStyle, defaultImageStyle } from '../../config'
import styles from '../styles.module.scss'

function ImageItem({ id, data }) {
  console.log(data.file)
  return (
    <>
      {data.file && Object.keys(data.file).length !== 0 ? (
        <img
          className={styles.componentImage}
          style={{ ...defaultImageStyle(data) }}
          src={
            typeof data.file == 'string'
              ? data.file
              : typeof data.file == 'object' && URL.createObjectURL(data.file)
          }
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
