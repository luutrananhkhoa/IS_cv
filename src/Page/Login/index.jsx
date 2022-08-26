import React, { useState, useContext, memo } from 'react'
import styles from './styles.module.scss'
import background from './background.jpg'
import Language from '@component/Language'
import { Web3Context } from '@context/Web3ContextProvider'
import { Context } from '@context/Context'
import { useToast } from '@component/Toast'
import { useNavigate } from 'react-router-dom'
function Index() {
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)
  const { contractStudentBusiness, address, setJwtEmployee } = useContext(Web3Context)

  const { setExistAccount, setIsLoggedIn } = useContext(Context)

  const toast = useToast()
  const navigation = useNavigate()
  async function handleLogin() {
    await contractStudentBusiness.methods
      .checkStudentProfile(address, password)
      .call()
      .then((result) => {
        if (parseInt(result) == 1) {
          toast.success('dang nhap thanh cong', { pauseOnHover: true, closeOnClick: true })
          remember && setJwtEmployee(address)
          setIsLoggedIn(true)
          setExistAccount(true)
          navigation('/')
        } else {
          toast.error('Username or passoword is incorrect', {
            pauseOnHover: true,
            closeOnClick: true,
          })
        }
      })
      .catch((error) => {
        console.log(error)
        if (error.code === 4001)
          toast.warning('Chua thanh toan hoa don', { pauseOnHover: true, closeOnClick: true })
      })
  }
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
          <p className={styles.input}>{address}</p>
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
              defaultChecked={true}
              value={remember}
              onChange={(e) => setRemember(e.target.checked)}
            ></input>
            <label>Remember me</label>
          </div>
          <div className={styles.forgot}>Forgot your password?</div>
        </div>
        <div onClick={handleLogin} className={styles.boxWrapper}>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default memo(Index)
