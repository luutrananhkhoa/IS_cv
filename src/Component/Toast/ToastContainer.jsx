import React, { useState, useEffect, useReducer, useCallback } from 'react'
import events from 'events'
import styles from './styles.module.scss'
import ToastItem from './ToastItem'
import _ from 'lodash'
import { generate } from './helper'

/**
 * @const eventEmitter
 * @return controller to manager Event
 */
export const eventEmitter = new events.EventEmitter()

/**
 * @component ToastContainer
 * @param listOnShown list item is showing
 * @param listOnNone list item is hiddening
 * @function createNewNotification to create new notification
 * @function create is an event to create new notification
 * @function removeItem event to create new notification
 * @returns
 */
export default function ToastContainer() {
  const [listOnShown, setListOnShown] = useState([])
  const [listOnNone, setListOnNone] = useState([])

  const createNewNotification = (type, message, options) => {
    let data = {
      type,
      message,
      id: generate(7),
      time: options.time,
      closeOnClick: options.closeOnClick,
      pauseOnHover: options.pauseOnHover,
    }
    listOnShown.push(data)
    setListOnShown([...listOnShown])
  }

  useEffect(() => {
    eventEmitter.on('create', (type, message, options) => {
      createNewNotification(type, message, options)
    })

    eventEmitter.on('removeItem', (id) => {
      let listOnNoneTemp = listOnNone
      listOnNoneTemp.push(id)

      let listOnShownTemp = listOnShown.map(function (item) {
        return item.id
      })
      if (_.isEqual(listOnNoneTemp.sort(), listOnShownTemp.sort())) {
        listOnShown.splice(0, listOnShown.length)
        listOnNone.splice(0, listOnNone.length)
        setListOnShown([])
        setListOnNone([])
      } else {
        setListOnNone([...listOnNoneTemp])
      }
    })

    eventEmitter.on('clear', () => {
      listOnShown.splice(0, listOnShown.length)
      listOnNone.splice(0, listOnNone.length)
      setListOnShown([])
      setListOnNone([])
    })
  }, [])

  return (
    <div className={styles.notifications}>
      {listOnShown.map((value, index) => {
        return <ToastItem {...value} key={index}></ToastItem>
      })}
    </div>
  )
}
