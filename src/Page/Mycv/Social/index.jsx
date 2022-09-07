import React from 'react'
import styles from './styles.module.scss'
import facebookIcon from '../images/facebook.png'
import linkedinIcon from '../images/linkedin.png'
import githubIcon from '../images/github.png'

function Index({ github, linkedin }) {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.image}>
          <img src={facebookIcon}></img>
        </div>
        <div className={styles.group}>
          <div className={styles.title}>Facebook</div>
          <div className={styles.content}>facebook.com</div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.image}>
          <img src={githubIcon}></img>
        </div>
        <div className={styles.group}>
          <div className={styles.title}>Github</div>
          <div className={styles.content}>{github}</div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.image}>
          <img src={linkedinIcon}></img>
        </div>
        <div className={styles.group}>
          <div className={styles.title}>LinkedIn</div>
          <div className={styles.content}>{linkedin}</div>
        </div>
      </div>
    </div>
  )
}

export default Index
