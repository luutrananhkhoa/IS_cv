import React, { useEffect, useRef, useState, useMemo, memo, useCallback, useReducer } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import Progressbar from './ProgressBar'
import { eventEmitter } from './ToastContainer'
import * as constants from './constants'

function ToastItem(props) {
  const [display, setDisplay] = useState(true)

  const { type, message, id, time, closeOnClick, pauseOnHover } = props

  const removeItem = () => {
    eventEmitter.emit('removeItem', id)
    setDisplay(false)
  }

  return (
    <div
      onClick={() => {
        if (!closeOnClick) return
        else removeItem()
      }}
      className={clsx(
        id,
        styles.notificationAnimation,
        styles.notificationsItem,
        styles[type ],
        {
          [styles.pauseOnHover]: pauseOnHover,
          [styles.displayNone]: !display,
        }
      )}
    >
      <div className={styles.notificationContent}>
        {type === constants.INFO && (
          <a className={clsx('fa-solid fa-circle-info', styles.icon, styles.info)}></a>
        )}
        {type === constants.SUCCESS && (
          <a className={clsx('fa-solid fa-circle-check', styles.icon, styles.success)}></a>
        )}
        {type === constants.WARNING && (
          <a className={clsx('fa-solid fa-circle-exclamation', styles.icon, styles.warning)}></a>
        )}
        {type === constants.ERROR && (
          <a className={clsx('fa-solid fa-triangle-exclamation', styles.icon, styles.error)}></a>
        )}
        <a className={styles.text}> {message}</a>
      </div>
      <Progressbar totalTime={time ? time : 3000} id={id} removeItem={removeItem}></Progressbar>
    </div>
  )
}

export default memo(ToastItem)
