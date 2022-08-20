import React, { useContext, useLayoutEffect, useState } from 'react'
import styles from '../styles.module.scss'
import { CustomCVContext } from '../../CustomCVContext'

function Index() {
  const { list, selected } = useContext(CustomCVContext)
  const [item, setItem] = useState()
  useLayoutEffect(() => {
    setItem(list[selected])
  }, [selected])
  return <div className={styles.target}>
    <p>{item?.name}</p>
  </div>
}

export default Index
