import React, { useEffect, useContext } from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'

const Index = () => {
  const { t, i18n } = useTranslation()

  return (
    <>
      <section className={styles.container}>Home</section>
    </>
  )
}

export default Index
