import React, { memo } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

function Index(props) {
  const [hidden, setHidden] = props.state
  return (
    <>
      {hidden ? (
        <i
          onClick={() => setHidden((e) => !e)}
          className={clsx('fa-solid fa-eye-slash', styles.view, styles.viewHidden)}
        ></i>
      ) : (
        <i
          onClick={() => setHidden((e) => !e)}
          className={clsx('fa-solid fa-eye', styles.view)}
        ></i>
      )}
    </>
  )
}
export default memo(Index)
