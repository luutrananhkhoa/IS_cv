import React, { useState, useContext, memo } from 'react'
import styles from './styles.module.scss'
import background from '@asset/register.png'
import Language from '@component/Language'
import avatarMen from '@asset/avatar_men.png'
import clsx from 'clsx'

function Index() {
  const [idCard, setIdCard] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [professional, setProfessional] = useState('')
  const [email, setEmail] = useState('')
  const [github, setGithub] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [avatar, setAvatar] = useState()
  const [password, setPassword] = useState('')
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.languageWrapper}>
          <div className={styles.language}>
            <Language></Language>
          </div>
        </div>
        <div className={styles.loginTitle}>Register your account</div>
        <div className={clsx(styles.boxWrapper, styles.avatarBox)}>
          <img src={avatar || avatarMen}></img>
          <input
            type="file"
            name="avatar"
            className={styles.input}
            value={avatar}
            onChange={(e) => setAvatar(e.target.files[0])}
          ></input>
        </div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>Address</label>
          <p className={styles.input}>0x000000</p>
        </div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>ID Card number</label>
          <input
            type="number"
            name="idcard"
            className={styles.input}
            value={idCard}
            onChange={(e) => setIdCard(e.target.value)}
          ></input>
        </div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>Full name</label>
          <input
            type="text"
            name="name"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>Phone</label>
          <input
            type="phone"
            name="phone"
            className={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>Password</label>
          <select
            className={clsx(styles.input, styles.select)}
            value={professional}
            onChange={(e) => setProfessional(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="senior">Senior</option>
            <option value="internship">Internship</option>
            <option value="fresher">Fresher</option>
            <option value="leader">Leader</option>
          </select>
        </div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>Github</label>
          <input
            type="text"
            name="github"
            className={styles.input}
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          ></input>
        </div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>LinkedIn</label>
          <input
            type="text"
            name="linkedin"
            className={styles.input}
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          ></input>
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
        <div className={styles.boxWrapper}>
          <button>Register</button>
        </div>
      </div>

      <div style={{ backgroundImage: `url(${background})` }} className={styles.right}>
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
    </div>
  )
}

export default memo(Index)
