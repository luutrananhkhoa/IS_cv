import React, { useState, useRef, useEffect } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

function useOutsideAlerter(ref, toggleRef, setOnShow) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      // console.log('target', event.target)
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setOnShow(false)
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

export default function Index(props) {
  const { type, content, children } = props
  const [onShow, setOnShow] = props.state
  const wrapperRef = useRef(null)
  const toggleRef = useRef(null)
  useOutsideAlerter(wrapperRef, toggleRef, setOnShow)

  return (
    <div ref={toggleRef} className={styles.tooltip}>
      {children || 'Button'}
      {onShow && (
        <span
          ref={wrapperRef}
          className={clsx(styles.tooltipContent, type ? { [styles[type]]: true } : styles.bottom)}
        >
          {content}
        </span>
      )}
    </div>
  )
}
