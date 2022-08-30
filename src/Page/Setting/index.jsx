import React from 'react'
import styles from './styles.module.scss'
import Left from './Left'
import { useSearchParams } from 'react-router-dom'
import Personal from './Personal'

function Index() {
  const [searchParams] = useSearchParams()
  return (
    <section className={styles.container}>
      <Left></Left>
      <div className={styles.right}>
        <div className={styles.title}>General Account Settings</div>
        <div className={styles.main}>

          {searchParams.get('tab') == 'account' && <Personal></Personal>}
        </div>
      </div>
    </section>
  )
}

export default Index
