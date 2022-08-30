import React, { useState, useContext, useEffect } from 'react'
import styles from './styles.module.scss'
import Modal from '@component/Modal'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Web3Context } from '@context/Web3ContextProvider'
import { useToast } from '@component/Toast'
import Item from './Item'

function Index() {
  const { loginState } = useContext(Web3Context)
  const [openAdd, setOpenAdd] = useState(false)
  const [listKills, setListSkills] = useState()
  const toast = useToast()
  const formik = useFormik({
    initialValues: {
      skill: '',
      level: 0,
    },
    validationSchema: Yup.object({
      skill: Yup.string().required('Skill name is required'),
      level: Yup.number('number').min(0, 'min0').max('100', 'max100').required('require level'),
    }),
    onSubmit: (values) => {
      loginState.contractEmployee.methods
        .addSkill(loginState.id, values.skill, values.level)
        .send({ from: loginState.address })
        .then((success) => {
          toast.success('Add success', { pauseOnHover: true, closeOnClick: true })
          setOpenAdd(false)
        })
        .catch((error) => {
          console.log(error)
          toast.error('Add error', { pauseOnHover: true, closeOnClick: true })
        })
    },
  })

  useEffect(() => {
    loginState.contractEmployee.methods
      .getListSkillOfEmployee(loginState.id)
      .call({ from: loginState.address })
      .then((success) => {
        setListSkills(success)
      })
      .catch((error) => console.log(error))
  }, [])
  return (
    <>
      <Modal
        state={[openAdd, setOpenAdd]}
        title="Add Skill"
        action={formik.handleSubmit}
        actionText="Submit"
      >
        <div className={styles.addSkillContainer}>
          <div className={styles.itemWrapper}>
            <label htmlFor="skill">Ki nang</label>
            <input
              type="text"
              name="skill"
              value={formik.values.skill}
              onChange={formik.handleChange}
            ></input>
            <p> {formik.errors.skill}</p>
          </div>
          <div className={styles.itemWrapper}>
            <label htmlFor="level">Phan tram</label>
            <input
              type="number"
              name="level"
              value={formik.values.level}
              onChange={formik.handleChange}
            ></input>
            <p>{formik.errors.level}</p>
          </div>
        </div>
      </Modal>

      <div className={styles.container}>
        <div className={styles.skills}>
          <div className={styles.title}>
            <div className={styles.titleText}>Skill</div>
            <div className={styles.toolTitle}>
              <div onClick={() => setOpenAdd(true)} className={styles.toolTitleWrapper}>
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          {listKills?.map((value, index) => {
            return (
              <Item
                key={index}
                id={value.id}
                skillId={value.skillId}
                title={value.title}
                level={value.level}
              ></Item>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Index
