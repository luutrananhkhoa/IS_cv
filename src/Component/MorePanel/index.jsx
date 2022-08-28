import React, { useContext, useRef, useEffect, useLayoutEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Web3Context } from '@context/Web3ContextProvider'
import clsx from 'clsx'
import _ from 'lodash'
import Profile from './Profile'
import Notification from './Notification'

export const Index = (props) => {
  const { showMorePanel, setShowMorePanel } = useContext(Web3Context)
  const ref = useRef()
  const buttonRef = useRef()
  buttonRef.current = [
    document.getElementById('profile_header_button'),
    document.getElementById('notification_header_button'),
  ]
  useOutsideAlerter(ref, buttonRef, setShowMorePanel)
  return (
    <div ref={ref} className={clsx(styles.container, { [styles.hide]: !showMorePanel.show })}>
      {showMorePanel.panel == 1 && <Profile></Profile>}
      {showMorePanel.panel == 2 && <Notification></Notification>}
    </div>
  )
}

function useOutsideAlerter(ref, toggleRef, setOnShow) {
  useLayoutEffect(() => {
    /**
     * Alert if clicked on outside of element
     */

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && toggleRef.current) {
        let yes = true
        _.forEach(toggleRef.current, (value, index) => {
          if (value?.contains(event.target)) yes = false
        })
        if (yes)
          setOnShow((e) => {
            return { ...e, show: false }
          })
      }
    }
    if (ref !== undefined) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    // Bind the event listener

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}
