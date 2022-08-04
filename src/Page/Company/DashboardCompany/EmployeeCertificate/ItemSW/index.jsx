import React from 'react'
import styles from '../styles.module.scss'

export default function Index(props) {
  const { value, index } = props
  return (
    <tr className={styles.body}>
      <th className={styles.column1}>{index}</th>
      <th className={styles.column2}>{value.testDate.toLocaleDateString()}</th>
      <th className={styles.column3}>{value.shiftTest}</th>
      <th className={styles.column4}>{value.expireDate.toLocaleDateString()}</th>
      <th className={styles.column5}>{value.speakingScore}</th>
      <th className={styles.column6}>{value.writingScore}</th>
      <th className={styles.column7}>{value.totalScore}</th>
    </tr>
  )
}
