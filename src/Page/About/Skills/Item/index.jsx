import React, { useState, useContext, useCallback } from 'react'
import styles from './styles.module.scss'
import { ProgressBar } from '@component/ProgressBar'
import Modal from '@component/Modal'
import { Web3Context } from '@context/Web3ContextProvider'
import { useToast } from '@component/Toast'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useLoading } from '@component/Loading'
import { getContract as getContractEmployee } from '@contract/employeeController'

function Item({ id, owner, title, level, skillId }) {
  const { loginState } = useContext(Web3Context)
  const [openDelete, setOpenDelete] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const loading = useLoading()
  const toast = useToast()
  const formik = useFormik({
    initialValues: {
      title: title,
      level: level,
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      level: Yup.number('numer').required('require').min(0, 'min0').max(100, 'max100'),
    }),
    onSubmit: async (values) => {
      loading.open()
      await getContractEmployee()
        .then(async (contractEmployee) => {
          await contractEmployee.methods
            .editSkill(
              parseInt(id),
              parseInt(skillId),
              values.title.toString(),
              parseInt(values.level)
            )
            .send({ from: loginState.address })
            .then((success) => {
              toast.success('success', { pauseOnHover: true, closeOnClick: true })
              setOpenEdit(false)
            })
            .catch((error) => {
              console.log(error)
              toast.error('error', { pauseOnHover: true, closeOnClick: true })
            })
        })
        .catch((error) => {
          console.error(error)
        })

      loading.close()
    },
  })

  const handleDelete = useCallback(async () => {
    loading.open()
    await loginState.contractEmployee.methods
      .removeSkill(id, skillId)
      .send({ from: loginState.address })
      .then((success) => {
        toast.success('success', { pauseOnHover: true, closeOnClick: true })
        setOpenDelete(false)
      })
      .catch((error) => {
        console.log(error)
        toast.error('error', { pauseOnHover: true, closeOnClick: true })
      })
    loading.close()
  }, [loginState])

  return (
    <>
      <Modal
        state={[openDelete, setOpenDelete]}
        title="Delete skill"
        actionText="Delete"
        action={handleDelete}
      >
        <p className={styles.delete}>Are you sure to delete this skill?</p>
      </Modal>
      <Modal state={[openEdit, setOpenEdit]} title="Edit skill" action={formik.handleSubmit}>
        <div className={styles.editContainer}>
          <label htmlFor="title">New Title</label>
          <input
            type="text"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          ></input>
          <p>{formik.errors.title}</p>
        </div>
        <div className={styles.editContainer}>
          <label htmlFor="level">New Level</label>
          <input
            type="number"
            name="level"
            value={formik.values.level}
            onChange={formik.handleChange}
          ></input>
          <p>{formik.errors.level}</p>
        </div>
      </Modal>
      <div className={styles.itemWrapper}>
        <span className={styles.item}>
          <div className={styles.iconWrapper}>
            <label> {title}</label>
          </div>
          <a>{level}%</a>
          <div className={styles.progressBar}>
            <ProgressBar percent={level}></ProgressBar>
          </div>
        </span>
        {owner && (
          <span className={styles.tool}>
            <i onClick={() => setOpenEdit(true)} className="fa-solid fa-pen-to-square"></i>
            <i onClick={() => setOpenDelete(true)} className="fa-solid fa-trash-can"></i>
          </span>
        )}
      </div>
    </>
  )
}

export default Item
