import React from 'react'
import styles from './styles.module.scss'
function Index(props) {
  const { value, onChange } = props
  return (
    <textarea
      className={styles.container}
      value={value}
      onKeyDown={(e) => {
        e.target.style.height = 'inherit'
        e.target.style.height = `${e.target.scrollHeight}px`
      }}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Start post in your profile..."
    ></textarea>
  )
}

export default Index
