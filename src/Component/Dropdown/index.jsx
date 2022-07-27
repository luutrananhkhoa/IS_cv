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
  const [onShow, setOnShow] = props.state
  const [selected, setSelected] = props.selected
  const { list } = props
  const wrapperRef = useRef(null)
  const toggleRef = useRef(null)
  useOutsideAlerter(wrapperRef, toggleRef, setOnShow)

  return (
    <div className={clsx(styles.dropdown)}>
      <span
        className={styles.toggle}
        type="button"
        ref={toggleRef}
        onClick={() => setOnShow(!onShow)}
      >
        {list?.at(selected)}
        {onShow ? (
          <i className={clsx('fa-light fa-angle-up', styles.icon)}></i>
        ) : (
          <i className={clsx('fa-light fa-angle-down', styles.icon)}></i>
        )}
      </span>

      {onShow && (
        <div
          className={styles.menu}
          ref={wrapperRef}
          style={{ marginTop: toggleRef.current.clientHeight + 2 }}
        >
          {list?.map((value, index) => {
            return (
              <span
                key={index}
                className={styles.item}
                onClick={() => {
                  setSelected(index)
                  setOnShow(false)
                }}
              >
                {value}
              </span>
            )
          })}
        </div>
      )}
    </div>
  )
}
