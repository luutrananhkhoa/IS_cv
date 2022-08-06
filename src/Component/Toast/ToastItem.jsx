import React, { useEffect, useRef, useState, useMemo, memo, useCallback, useReducer } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import Progressbar from './ProgressBar'
import { eventEmitter } from './ToastContainer'
import * as constants from './constants'

function ToastItem(props) {
  const [display, setDisplay] = useState(true)

  const ref = useRef()

  const { type, message, id, time, closeOnClick, pauseOnHover } = props

  const removeItem = () => {
    eventEmitter.emit('removeItem', id)
  }

  useEffect(() => {
    eventEmitter.on('removeItemFromContainer' + id, () => {
      setDisplay(false)
    })
  }, [])

  useEffect(() => {
    const handleEnd = () => {
      removeItem()
    }
    if (!display) {
      ref.current.addEventListener('animationend', handleEnd)
    }
    return () => {
      ref && ref.current && ref.current.removeEventListener('animationend', () => {
        
      })
    }
  }, [display])

  return (
    <div
      className={clsx(styles.container, {
        [styles.pauseOnHover]: pauseOnHover,
        [styles.displayNone]: !display,
      })}
    >
      <div
        onClick={() => {
          closeOnClick && setDisplay(false)
        }}
        ref={ref}
        className={clsx(id, styles.notificationAnimation, styles.notificationsItem, styles[type])}
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
        <Progressbar
          totalTime={time ? time : 3000}
          id={id}
          nonDisplay={() => setDisplay(false)}
        ></Progressbar>
      </div>
    </div>
  )
}

export default memo(ToastItem)
