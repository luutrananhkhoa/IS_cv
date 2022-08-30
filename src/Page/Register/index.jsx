import React, { useState, useContext, memo, useRef } from 'react'
import styles from './styles.module.scss'
import background from '@asset/register.png'
import Language from '@component/Language'
import avatarMen from '@asset/avatar_men.png'
import clsx from 'clsx'
import { Web3Context } from '@context/Web3ContextProvider'
import { useToast } from '@component/Toast'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function Index() {
  const { loginState, dispatchLogin } = useContext(Web3Context)
  const inputImageRef = useRef()
  const toast = useToast()
  const [avatar, setAvatar] = useState()
  const formik = useFormik({
    initialValues: {
      idcard: '',
      fullname: '',
      phone: '',
      professional: '',
      email: '',
      github: '',
      linkedin: '',

      password: '',
      confirmpassword: '',
    },
    validationSchema: Yup.object({
      idcard: Yup.number('not a number')
        .min(0, 'invalid')
        .required('require')
        .integer('not a number'),
      fullname: Yup.string().required('require'),
      phone: Yup.string().required('require'),
      professional: Yup.string().required('require'),
      email: Yup.string().email('not email').required('require'),
      github: Yup.string().required('require'),
      linkedin: Yup.string().required('require'),

      password: Yup.string().required('require'),
      confirmpassword: Yup.string()
        .oneOf([Yup.ref('password')], 'not match')
        .required('require'),
    }),
    onSubmit: (values) => {
      loginState.contractEmployee.methods
        ._checkExistEmployeeAccount()
        .call({ from: loginState.address })
        .then((success) => {
          if (success) {
            toast.warning('had logged in')
            return
          } else {
            loginState.contractEmployee.methods
              .addEmployee(
                1,
                parseInt(values.idcard),
                values.fullname.toString(),
                values.phone.toString(),
                values.professional.toString(),
                values.email.toString(),
                values.github.toString(),
                values.linkedin.toString(),
                '/',
                values.password.toString()
              )
              .send({ from: loginState.address })
              .then((success) => {
                toast.success('login success', { pauseOnHover: true, closeOnClick: true })
                dispatchLogin({
                  type: 'employeee_login',
                  isLoggedIn: true,
                  id: success,
                  jwt: loginState.address,
                })
                navigate('/', { replace: true })
              })
              .catch((error) => {
                console.log(error)
              })
          }
        })
        .catch((error) => console.log(error))
    },
  })

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
          <img src={avatar ? URL.createObjectURL(avatar) : avatarMen}></img>
          <input
            type="file"
            name="avatar"
            ref={inputImageRef}
            className={styles.input}
            accept="image/png, image/gif, image/jpeg"
            style={{ display: 'none' }}
            onChange={(e) => setAvatar(e.target.files[0])}
          ></input>
          <div className={styles.iconAvatar}>
            <i onClick={() => inputImageRef.current.click()} className="fa-solid fa-camera"></i>
          </div>
        </div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>Address</label>
          <p className={styles.input}>{loginState.address}</p>
        </div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>ID Card number</label>
          <input
            type="text"
            name="idcard"
            className={styles.input}
            value={formik.values.idcard}
            onChange={formik.handleChange}
          ></input>
          <p className={styles.error}>
            {formik.errors.idcard && formik.touched.idcard && formik.errors.idcard}
          </p>
        </div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>Full name</label>
          <input
            type="text"
            name="fullname"
            className={styles.input}
            value={formik.values.fullname}
            onChange={formik.handleChange}
          ></input>
          <p className={styles.error}>
            {formik.errors.fullname && formik.touched.fullname && formik.errors.fullname}
          </p>
        </div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>Phone</label>
          <input
            type="phone"
            name="phone"
            className={styles.input}
            value={formik.values.phone}
            onChange={formik.handleChange}
          ></input>
          <p className={styles.error}>
            {formik.errors.phone && formik.touched.phone && formik.errors.phone}
          </p>
        </div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>Profressional</label>
          <input
            type="text"
            name="professional"
            className={clsx(styles.input, styles.select)}
            value={formik.values.professional}
            onChange={formik.handleChange}
          ></input>
          <p className={styles.error}>
            {formik.errors.professional &&
              formik.touched.professional &&
              formik.errors.professional}
          </p>
        </div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            className={styles.input}
            value={formik.values.email}
            onChange={formik.handleChange}
          ></input>
          <p className={styles.error}>
            {formik.errors.email && formik.touched.email && formik.errors.email}
          </p>
        </div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>Github</label>
          <input
            type="text"
            name="github"
            className={styles.input}
            value={formik.values.github}
            onChange={formik.handleChange}
          ></input>
          <p className={styles.error}>
            {formik.errors.github && formik.touched.github && formik.errors.github}
          </p>
        </div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>LinkedIn</label>
          <input
            type="text"
            name="linkedin"
            className={styles.input}
            value={formik.values.linkedin}
            onChange={formik.handleChange}
          ></input>
          <p className={styles.error}>
            {formik.errors.linkedin && formik.touched.linkedin && formik.errors.linkedin}
          </p>
        </div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            className={styles.input}
            value={formik.values.password}
            onChange={formik.handleChange}
          ></input>
          <p className={styles.error}>
            {formik.errors.password && formik.touched.password && formik.errors.password}
          </p>
        </div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>Confirm Password</label>
          <input
            type="password"
            name="confirmpassword"
            className={styles.input}
            value={formik.values.confirmpassword}
            onChange={formik.handleChange}
          ></input>
          <p className={styles.error}>
            {formik.errors.confirmpassword &&
              formik.touched.confirmpassword &&
              formik.errors.confirmpassword}
          </p>
        </div>
        <div className={styles.boxWrapper}>
          <div onClick={formik.handleSubmit} className={styles.button}>
            Register
          </div>
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
