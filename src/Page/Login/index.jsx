import React, { useState, useContext, memo } from 'react'
import styles from './styles.module.scss'
import background from './background.jpg'
import Language from '@component/Language'
import { Web3Context } from '@context/Web3ContextProvider'
import { useToast } from '@component/Toast'
import { useNavigate, Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function Index() {
  const { loginState, dispatchLogin } = useContext(Web3Context)

  const toast = useToast()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      password: '',
      remember: true,
    },
    validationSchema: Yup.object({
      password: Yup.string().required('Password is required'),
      remember: Yup.boolean(),
    }),
    onSubmit: (values) => {
      loginState.contractEmployee.methods
        .login(values.password)
        .call({ from: loginState.address })
        .then((success) => {
          const id = parseInt(success)
          if (parseInt(id) > 0) {
            toast.success('Thanh cong', { pauseOnHover: true, closeOnClick: true })
            dispatchLogin({
              type: 'employeee_login',
              isLoggedIn: true,
              id: id,
              jwt: loginState.address,
              remember: values.remember,
            })
            navigate('/', { replace: true })
          }
        })
        .catch((error) => {
          console.log(error)
          if (error.code === 4001)
            toast.warning('Chua thanh toan hoa don', { pauseOnHover: true, closeOnClick: true })
        })
    },
  })

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
        <div className={styles.topWrapper}>
          <div className={styles.register}>
            <Link to="/register">Register</Link>
          </div>
          <div className={styles.language}>
            <Language></Language>
          </div>
        </div>
        <div className={styles.loginTitle}>Login into your account</div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>Address</label>
          <p className={styles.input}>{loginState.address}</p>
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
          {
            <p className={styles.error}>
              {formik.errors.password && formik.touched.password && formik.errors.password}
            </p>
          }
        </div>
        <div className={styles.rememberForgot}>
          <div className={styles.remenber}>
            <input
              type="checkbox"
              name="remember"
              // defaultChecked={true}
              checked={formik.values.remember}
              onChange={formik.handleChange}
            ></input>
            <label>Remember me</label>
          </div>
          <div className={styles.forgot}>Forgot your password?</div>
        </div>
        <div onClick={formik.handleSubmit} className={styles.boxWrapper}>
          <button type="submit">Login</button>
        </div>
      </div>
    </div>
  )
}

export default memo(Index)
