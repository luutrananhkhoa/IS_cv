import React, { useContext, useState } from 'react'
import styles from './styles.module.scss'
import Button from './Button'
import Logo from './Logo'
import clsx from 'clsx'
import Object from './Object'
import { CustomCVContext } from '../CustomCVContext'
import update from 'immutability-helper'
import { useToast } from '@component/Toast'
import DownloadModal from './DownloadModal'

function Index() {
  const { selected, setSelected, setList, list, copy, setCopy, getNewAutoCreatement } =
    useContext(CustomCVContext)
  const toast = useToast()
  const [openModalDownload, setOpenModalDownload] = useState(false)
  const handleCopy = () => {
    if (list[selected]) {
      setCopy({ ...list[selected] })
      toast.success('copy', {
        // time: 30000,
        closeOnClick: true,
        pauseOnHover: true,
      })
    }
  }
  const handlePaste = () => {
    if (copy) {
      let newId = getNewAutoCreatement()
      let newName = copy.type.toString()
      newName = newName[0].toUpperCase() + newName.slice(1)
      newName += ' ' + newId
      let temp = { ...copy, top: copy.top + 10, left: copy.left + 10, name: newName }
      setList(update(list, { $merge: { [newId]: temp } }))
      setSelected(newId)
      toast.success('paste', {
        // time: 30000,
        closeOnClick: true,
        pauseOnHover: true,
      })
    }
  }
  const handleDelete = () => {
    if (selected) {
      const { [selected]: _, ...newData } = list
      setList(newData)
      setSelected(undefined)
      toast.success('delete', {
        // time: 30000,
        closeOnClick: true,
        pauseOnHover: true,
      })
    }
  }
  const handleCut = () => {
    if (list[selected]) {
      setCopy({ ...list[selected] })
      const { [selected]: _, ...newData } = list
      setList(newData)
      setSelected(undefined)
      toast.success('cut', {
        // time: 30000,
        closeOnClick: true,
        pauseOnHover: true,
      })
    }
  }
  return (
    <>
      <DownloadModal state={[openModalDownload, setOpenModalDownload]}></DownloadModal>
      <div className={styles.container}>
        <div className={styles.left}>
          <Logo></Logo>
          <Button onClick={handlePaste} icon={'fa-thin fa-paste'}></Button>
          <Button onClick={handleCopy} icon={'fa-thin fa-copy'}></Button>

          <Button onClick={handleCut} icon={'fa-thin  fa-scissors'}></Button>
          <Button onClick={handleDelete} icon={'fa-thin fa-trash-can'}></Button>

          <Button icon=""></Button>
          <Button></Button>
          <Button></Button>
        </div>

        <div className={styles.targetContainer}>
          <Object></Object>
        </div>
        <div className={styles.right}>
          <Button onClick={setOpenModalDownload} icon="fa-thin fa-cloud-arrow-down"></Button>
          <Button icon="fa-thin fa-cloud-arrow-up"></Button>
          <Button icon="fa-thin fa-play"></Button>
        </div>
      </div>
    </>
  )
}

export default Index
