import React, { useContext, useEffect, useState, useRef } from 'react'
import styles from './styles.module.scss'
import avatarMen from '@asset/avatar_men.png'
import { Web3Context } from '@context/Web3ContextProvider'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { phoneRegExp, emailRegExp, urlRegExp } from '@helper/regex'
import { useLoading } from '@component/Loading'
import { useToast } from '@component/Toast'
import { getContract as getContractEmployee } from '@contract/employeeController'
import { getContract as getContractBusiness } from '@contract/businessController'

function Index() {
  const { loginState } = useContext(Web3Context)
  const [list, setList] = useState()
  const loading = useLoading()
  const toast = useToast()
  const [fileAvatar, setFileAvatar] = useState()
  const fileAvatarRef = useRef()
  const [editName, setEditName] = useState(false)
  const [editPhone, setEditPhone] = useState(false)
  const [editProfessional, setEditProfessional] = useState(false)
  const [editEmail, setEditEmail] = useState(false)
  const [editGithub, setEditGithub] = useState(false)
  const [editLinkedin, setEditLinkedin] = useState(false)
  const formik = useFormik({
    initialValues: {
      name: undefined,
      phone: undefined,
      professional: undefined,
      email: undefined,
      github: undefined,
      linkedin: undefined,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      phone: Yup.string()
        .required('Phone is required')
        .matches(phoneRegExp, 'Phone number is not valid'),
      professional: Yup.string().required('is required'),
      email: Yup.string().required('is required').matches(emailRegExp, 'Not an email'),
      github: Yup.string().required('is required').matches(urlRegExp, 'Github not '),
      linkedin: Yup.string().required('is required'),
    }),
    onSubmit: async (values) => {
      loading.open()
      await loginState.contractEmployee.methods
        .editEmployee(
          parseInt(list.id),
          parseInt(list.idCardNumber),
          values.name.toString(),
          values.phone.toString(),
          values.professional.toString(),
          values.email.toString(),
          values.github.toString(),
          values.linkedin.toString(),
          '/'
        )
        .send({ from: loginState.address })
        .then((success) => {
          toast.success('success', { pauseOnHover: true, closeOnClick: true })
          console.log(success)
        })
        .catch((error) => {
          toast.error('error', { pauseOnHover: true, closeOnClick: true })
          console.log(error)
        })

      loading.close()
    },
  })

  useEffect(() => {
    if (loginState.for != 'employee') return
    getContractEmployee()
      .then((contractEmployee) => {
        contractEmployee.methods
          .getProfile(loginState.id)
          .call({ from: loginState.address })
          .then((success) => {
            let temp = { ...success }
            formik.setFieldValue('name', temp.name)
            formik.setFieldValue('phone', temp.phone)
            formik.setFieldValue('professional', temp.professional)
            formik.setFieldValue('email', temp.email)
            formik.setFieldValue('github', temp.github)
            formik.setFieldValue('linkedin', temp.linkedin)
            console.log(temp)
            setList(temp)
          })
          .catch((error) => console.log(error))
      })
      .catch((error) => console.error(error))
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.avatarWrapper}>
        <img src={fileAvatar ? URL.createObjectURL(fileAvatar) : avatarMen}></img>
        <div className={styles.buttonWrapper}>
          <input
            type="file"
            id="file"
            multiple={false}
            accept="image/png, image/gif, image/jpeg"
            onChange={(e) => setFileAvatar(e.target.files[0])}
            ref={fileAvatarRef}
            style={{ display: 'none' }}
          />
          <button className={styles.delete}>Delete</button>
          <button onClick={() => fileAvatarRef.current.click()} className={styles.upload}>
            Upload
          </button>
        </div>
      </div>
      {list && (
        <>
          <div className={styles.itemWrapper}>
            <label htmlFor="name">Name</label>
            <div className={styles.inputGroup}>
              <input
                disabled={!editName}
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              ></input>
              <p>{editName && !formik.values.name && formik.errors.name}</p>
            </div>
            <button onClick={() => setEditName((e) => !e)}>
              {editName ? (
                <i className="fa-regular fa-xmark"></i>
              ) : (
                <i className="fa-regular fa-pen-line"></i>
              )}
            </button>
          </div>
          <div className={styles.itemWrapper}>
            <label htmlFor="phone">Phone</label>
            <div className={styles.inputGroup}>
              <input
                disabled={!editPhone}
                type="number"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
              ></input>
              <p>{editPhone && !formik.values.phone && formik.errors.phone}</p>
            </div>
            <button onClick={() => setEditPhone((e) => !e)}>
              {editPhone ? (
                <i className="fa-regular fa-xmark"></i>
              ) : (
                <i className="fa-regular fa-pen-line"></i>
              )}
            </button>
          </div>
          <div className={styles.itemWrapper}>
            <label htmlFor="professional">Professional</label>
            <div className={styles.inputGroup}>
              <input
                disabled={!editProfessional}
                type="text"
                name="professional"
                value={formik.values.professional}
                onChange={formik.handleChange}
              ></input>
              <p>{editPhone && !formik.values.professional && formik.errors.professional}</p>
            </div>
            <button onClick={() => setEditProfessional((e) => !e)}>
              {editProfessional ? (
                <i className="fa-regular fa-xmark"></i>
              ) : (
                <i className="fa-regular fa-pen-line"></i>
              )}
            </button>
          </div>
          <div className={styles.itemWrapper}>
            <label htmlFor="email">Email</label>
            <div className={styles.inputGroup}>
              <input
                disabled={!editEmail}
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              ></input>
              <p>{editEmail && !formik.values.email && formik.errors.email}</p>
            </div>
            <button onClick={() => setEditEmail((e) => !e)}>
              {editEmail ? (
                <i className="fa-regular fa-xmark"></i>
              ) : (
                <i className="fa-regular fa-pen-line"></i>
              )}
            </button>
          </div>
          <div className={styles.itemWrapper}>
            <label htmlFor="github">Github</label>
            <div className={styles.inputGroup}>
              <input
                disabled={!editGithub}
                type="text"
                name="github"
                value={formik.values.github}
              ></input>
              <p>{editGithub && !formik.values.github && formik.errors.github}</p>
            </div>
            <button onClick={() => setEditGithub((e) => !e)}>
              {editGithub ? (
                <i className="fa-regular fa-xmark"></i>
              ) : (
                <i className="fa-regular fa-pen-line"></i>
              )}
            </button>
          </div>
          <div className={styles.itemWrapper}>
            <label htmlFor="linkedin">Linked In</label>
            <div className={styles.inputGroup}>
              <input
                disabled={!editLinkedin}
                type="text"
                name="linkedin"
                value={formik.values.linkedin}
                onChange={formik.handleChange}
              ></input>
              <p>{editLinkedin && !formik.values.linkedin && formik.errors.linkedin}</p>
            </div>
            <button onClick={() => setEditLinkedin((e) => !e)}>
              {editLinkedin ? (
                <i className="fa-regular fa-xmark"></i>
              ) : (
                <i className="fa-regular fa-pen-line"></i>
              )}
            </button>
          </div>
        </>
      )}

      <div className={styles.saveWrapper}>
        <button type="submit" onClick={formik.handleSubmit}>
          Save
        </button>
      </div>
    </div>
  )
}

export default Index
