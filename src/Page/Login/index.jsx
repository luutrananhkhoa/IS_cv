import React, { useState, useContext, memo } from 'react'
import styles from './styles.module.scss'
import background from './background.jpg'
import Language from '@component/Language'
import { Web3Context } from '@context/Web3ContextProvider'
import { useToast } from '@component/Toast'
import { useNavigate, Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import Toggle from '@component/Toggle'
import { getContract as getContractBusiness } from '@contract/businessController'
import { getContract as getContractEmployee } from '@contract/employeeController'
import { useLoading } from '@component/Loading'
import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'

function Index() {
  const { loginState, dispatchLogin } = useContext(Web3Context)
  const loading = useLoading()
  const toast = useToast()
  const [typeFor, setTypeFor] = useState(false)
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
    onSubmit: async (values) => {
      loading.open()
      if (typeFor) {
        await getContractBusiness()
          .then(async (contract) => {
            await contract.methods
              .login(values.password)
              .call({ from: loginState.address })
              .then(async (success) => {
                const id = parseInt(success)
                if (id > 0) {
                  await contract.methods
                    .getProfile(id)
                    .call({ from: loginState.address })
                    .then((profile) => {
                      toast.success("", { pauseOnHover: true, closeOnClick: true })
                      dispatchLogin({
                        type: 'business_login',
                        id: id,
                        profile: { ...profile },
                        remember: values.remember,
                      })
                      navigate('/', { replace: true })
                    })
                    .catch((error) => {
                      console.log(error)
                    })
                }
              })
              .catch((error) => {
                console.log(error)
                if (error.code === 4001)
                  toast.warning('Chua thanh toan hoa don', {
                    pauseOnHover: true,
                    closeOnClick: true,
                  })
              })
          })
          .catch((error) => console.error(error))
      }

      if (!typeFor) {
        await getContractEmployee()
          .then(async (contract) => {
            await contract.methods
              .login(values.password)
              .call({ from: loginState.address })
              .then(async (success) => {
                const id = parseInt(success)
                if (id > 0) {
                  await contract.methods
                    .getProfile(id)
                    .call({ from: loginState.address })
                    .then((profile) => {
                      toast.success("", { pauseOnHover: true, closeOnClick: true })
                      dispatchLogin({
                        type: 'employee_login',
                        id: id,
                        profile: { ...profile },
                        remember: values.remember,
                      })
                      navigate('/', { replace: true })
                    })
                    .catch((error) => {
                      console.log(error)
                    })
                }
              })
              .catch((error) => {
                console.log(error)
                if (error.code === 4001)
                  toast.warning('Chua thanh toan hoa don', {
                    pauseOnHover: true,
                    closeOnClick: true,
                  })
              })
          })
          .catch((error) => console.error(error))
      }
      loading.close()
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
        <div className={styles.toggleWrapper}>
          <span>Employee</span>
          <Toggle
            positiveColor="blue"
            negativeColor="purple"
            state={[typeFor, setTypeFor]}
          ></Toggle>
          <span>Company</span>
        </div>
        <div className={styles.boxWrapper}>
          <label className={styles.label}>Address</label>
          <p className={clsx(styles.input, styles.address, styles.notedit)}>{loginState.address}</p>
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
