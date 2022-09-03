import React from 'react'
import styles from './styles.module.scss'
import People from "./People"
import Chat from "./Chat"
import Tools from './Tools'

function Index() {
  return (
    <section className={styles.container}>
        <People></People>
        <Chat></Chat>
        <Tools></Tools>
    </section>
  )
}

export default Index