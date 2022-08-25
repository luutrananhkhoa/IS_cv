import React, { memo, useRef, useEffect } from 'react'
import Modal from '@component/Modal'
import styles from './styles.module.scss'
import html2canvas from 'html2canvas'
import { useReactToPrint } from 'react-to-print'

function Index(props) {
  const [open, setOpen] = props.state
  const boardRef = useRef()
  useEffect(() => {
    boardRef.current = document.getElementById('draw_child')
  }, [])
  const handlePDF = useReactToPrint({
    content: () => boardRef.current,
  })
  const handlePNG = () => {
    html2canvas(document.getElementById('draw_child')).then(function (canvas) {
      var link = document.createElement('a')
      document.body.appendChild(link)
      link.download = 'iscv.png'
      link.href = canvas.toDataURL()
      link.target = '_blank'
      link.click()
    })
  }
  return (
    <Modal state={[open, setOpen]} title={'download'}>
      <div className={styles.container}>
        <div onClick={handlePDF} className={styles.item}>
          <i className="fa-light fa-file-pdf"></i>
          <a>Save to PDF</a>
        </div>

        <div onClick={handlePNG} className={styles.item}>
          <i className="fa-light fa-file-pdf"></i>
          <a>Save to PNG</a>
        </div>
        <div className={styles.item}>
          <i className="fa-light fa-file-pdf"></i>
          <a>Save to JSON</a>
        </div>
      </div>
    </Modal>
  )
}

export default memo(Index)
