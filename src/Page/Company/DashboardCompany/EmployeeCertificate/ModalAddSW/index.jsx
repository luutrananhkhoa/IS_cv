import React from 'react'
import Modal from '@component/Modal'
import styles from '../styles.module.scss'

export default function Index(props) {
  const [openModalSW, setOpenModalSW] = props.state
  
  const handleAddSW = () => {
  }

  return (
    <Modal state={[openModalSW, setOpenModalSW]} action={() => {}} nonaction={() => {}}>
      Modal
    </Modal>
  )
}
