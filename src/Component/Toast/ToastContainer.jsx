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
      ...options,
    }
    listOnShown.push(data)
    setListOnShown([...listOnShown])
  }

  useEffect(() => {
    eventEmitter.on('create', (type, message, options) => {
      createNewNotification(type, message, options)
    })

    eventEmitter.on('removeItem', (id) => {
      let listOnNoneTemp = [...listOnNone, id]

      let listOnShownTemp = listOnShown.map(function (item) {
        return item.id
      })
      if (_.isEqual(listOnNoneTemp.sort(), listOnShownTemp.sort())) {
        listOnShown.splice(0, listOnShown.length)
        listOnNone.splice(0, listOnNone.length)

        setListOnNone(listOnNone)
        setListOnShown([...listOnShown])
      } else {
        listOnNone.push(id)
        setListOnNone(listOnNone)
      }
    })

    eventEmitter.on('clear', () => {
      let listOnNoneTemp = [...listOnNone]

      let listOnShownTemp = listOnShown.map(function (item) {
        return item.id
      })
      let listIdRemove = _.differenceWith(listOnShownTemp, listOnNoneTemp, _.isEqual)

      for (let i = 0; i < listIdRemove.length; i++) {
        if (i > 0) {
          setTimeout(() => {
            eventEmitter.emit('removeItemFromContainer' + listIdRemove[i])
          }, i * 100)
        } else {
          eventEmitter.emit('removeItemFromContainer' + listIdRemove[i])
        }
      }
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
