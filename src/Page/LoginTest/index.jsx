import React, { useState } from 'react'
import styles from './styles.module.scss'
import background from './background.jpg'
import Language from '@component/Language'
function Index() {
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  return (
    <div className={styles.container}>
      <div style={{ backgroundImage: `url(${background})` }} className={styles.left}>
        <div className={styles.backgroundWrapper}>
          <div className={styles.backgroundText}>
            You don’t need to be a designer have an impressive CV
          </div>
          <div className={styles.smallBackgroundText}>
            <i className="fa-solid fa-star"></i> Effortlessly build a job worthy resume that gets
            you weird faster.
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.languageWrapper}>
          <div className={styles.language}>
            <Language></Language>
          </div>
        </div>
        <div className={styles.loginTitle}>Login into your account</div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>Address</label>
          <p className={styles.input}>0x6A63D8848fED28fFafc8ce2c868e2e450B0E094e</p>
        </div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className={styles.rememberForgot}>
          <div className={styles.remenber}>
            <input
              type="checkbox"
              value={remember}
              onChange={(e) => setRemember(e.target.checked)}
            ></input>
            <label>Remember me</label>
          </div>
          <div className={styles.forgot}>Forgot your password?</div>
        </div>
        <div className={styles.boxWrapper}>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Index
