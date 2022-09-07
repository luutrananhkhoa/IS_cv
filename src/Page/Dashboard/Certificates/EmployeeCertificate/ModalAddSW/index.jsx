import React, { useState, useLayoutEffect, useContext, useEffect, useReducer } from 'react'
import Modal from '@component/Modal'
import styles from '../styles.module.scss'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { Web3Context } from '@context/Web3ContextProvider'
import { useToast } from '@component/Toast'
import { getContract as getContractIIG } from '@contract/iigController'
import { useLoading } from '@component/Loading'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function Index({ state, request, profile }) {
  const [open, setOpen] = state
  const { t } = useTranslation('page', { keyPrefix: 'company.dashboard.employeeCertificate' })
  const { loginState } = useContext(Web3Context)
  const loading = useLoading()
  const toast = useToast()

  const formik = useFormik({
    initialValues: {
      shiftTest: undefined,
      expireDate: undefined,
      testDate: undefined,
      speakingScore: undefined,
      writingScore: undefined,
    },
    validationSchema: Yup.object({
      shiftTest: Yup.number().required('require').min(1, 'min1').max(4, 'max4'),
      expireDate: Yup.date().required('require'),
      testDate: Yup.date().required('require'),
      speakingScore: Yup.number().required('require').min(0, 'min0').max(195, 'max495'),
      writingScore: Yup.number().required('require').min(0, 'min0').max(195, 'max495'),
    }),
    onSubmit: async (values) => {
      loading.open()
      await getContractIIG()
        .then(async (contractIIG) => {
          await contractIIG.methods
            .addSWResult(
              parseInt(request.businessId),
              parseInt(request.employeeId),
              new Date(values.testDate).getTime(),
              parseInt(values.shiftTest),
              new Date(values.expireDate).getTime(),
              parseInt(values.speakingScore),
              parseInt(values.writingScore),
              parseInt(request.requestId)
            )
            .send({ from: loginState.address })
            .then((success) => {
              toast.success('success', { pauseOnHover: true, closeOnClick: true })
              setOpen(false)
            })
            .catch((error) => console.error(error))
        })
        .catch((error) => console.log(error))
      loading.close()
    },
  })
  return (
    <>
      <Modal
        state={[open, setOpen]}
        action={formik.handleSubmit}
        actionText={t('add')}
        title={t('add_a_speaking_writing_certificate')}
      >
        <div className={styles.modalContainer}>
          <div className={styles.content}>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>Name</label>
              <a className={clsx(styles.input, styles.addressTitle)}>{profile.name}</a>
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>{t('id')}</label>
              <a className={clsx(styles.input, styles.addressTitle)}>{profile.idCardNumber}</a>
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>{t('test_date')}</label>
              <input
                type="date"
                name="testDate"
                id="testDate"
                value={formik.values.testDate}
                className={styles.input}
                placeholder={`${t('enter')} ${t('test_date').toLowerCase()}`}
                onChange={formik.handleChange}
              ></input>
              <p className={styles.error}>{formik.touched.testDate && formik.errors.testDate}</p>
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>{t('test_shift')}</label>
              <input
                type="number"
                name="shiftTest"
                id="shiftTest"
                className={styles.input}
                value={formik.values.shiftTest}
                placeholder={`${t('enter')} ${t('test_shift').toLowerCase()}`}
                onChange={formik.handleChange}
              ></input>
              <p className={styles.error}>{formik.errors.shiftTest}</p>
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>{t('expire_date')}</label>
              <input
                type="date"
                name="expireDate"
                id="expireDate"
                className={styles.input}
                value={formik.values.expireDate}
                placeholder={`${t('enter')} ${t('expire_date').toLowerCase()}`}
                onChange={formik.handleChange}
              ></input>
              <p className={styles.error}>{formik.errors.expireDate}</p>
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>{t('speaking_score')}</label>
              <input
                type="number"
                name="speakingScore"
                id="speakingScore"
                className={styles.input}
                value={formik.values.speakingScore}
                placeholder={`${t('enter')} ${t('speaking_score').toLowerCase()}`}
                onChange={formik.handleChange}
              ></input>
              <p className={styles.error}>{formik.errors.speakingScore}</p>
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>{t('writing_score')}</label>
              <input
                type="number"
                name="writingScore"
                id="writingScore"
                className={styles.input}
                placeholder={`${t('enter')} ${t('writing_score').toLowerCase()}`}
                value={formik.values.writingScore}
                onChange={formik.handleChange}
              ></input>
              <p className={styles.error}>{formik.errors.writingScore}</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
