import React, { memo } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

function Index(props) {
  const [disabled, setDisabled] = props.state
  return (
    <>
      {disabled ? (
        <i
          onClick={() => setDisabled((e) => !e)}
          className={clsx('fa-solid fa-lock', styles.lock, styles.lockHidden)}
        ></i>
      ) : (
        <i
          onClick={() => setDisabled((e) => !e)}
          className={clsx('fa-solid fa-lock-open', styles.lock)}
        ></i>
      )}
    </>
  )
}
export default memo(Index)
