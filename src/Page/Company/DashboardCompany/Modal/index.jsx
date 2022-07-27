import React, { memo } from 'react'
import { BsCheck2Circle } from 'react-icons/bs'
import styles from './styles.module.scss'
import { GrFormClose } from 'react-icons/gr'

/**
 * to Create ModalWarning
 * @param [openModal, setOpenModalModal]: [openModal: boolean, setOpenModalModal: React.Dispatch<React.SetStateAction<boolean>>]
 * @param title: string
 * @param content: string
 * @param action: function
 * @returns
 */
function Index(props) {
  const [openModal, setOpenModal] = props.state
  return (
    <>
      {openModal && (
        <>
          <div
            className={styles.wrapper}
            // className="w-[100vw] h-[100vh] top-0 fixed bg-slate-700 z-[8] opacity-60"
            onClick={() => {
              setOpenModal((e) => !e)
            }}
          ></div>
          <div className={styles.container}>
            <div className={styles.title}>
              <div className={styles.buttonWrapper}>
                {' '}
                <button
                  onClick={() => {
                    setOpenModal((e) => !e)
                  }}
                  className={styles.buttonClose}
                  // className="text-4xl text-white absolute top-0 right-2 align-center cursor-pointer alert-del"
                >
                  <i className={`fa-solid fa-xmark ${styles.iconClose}`}></i>
                </button>
              </div>
              <p className={styles.titleText}>Xac thuc tin chi</p>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.info}>Kiểm tra thông tin cá nhân và thông tin kết quả</div>
              <div className={styles.group}>
                <div className={styles.personalInfo}>Thong tin ca nhan </div>
                <div className={styles.infoRow}>
                  <div className={styles.infoRowCol1}>Nguyen Minh Nhut</div>
                  <div className={styles.infoRowCol2}>Ngày sinh: 09/07/1999</div>
                </div>
                <div className={styles.infoRow}>
                  <div className={styles.infoRowCol1}>Nguyen Minh Nhut</div>
                  <div className={styles.infoRowCol2}>Ngày sinh: 09/07/1999</div>
                </div>
              </div>

              <div className={styles.group}>
                <div className={styles.personalInfo}>THÔNG TIN KÌ THI</div>
                <div className={styles.infoRow}>
                  <div className={styles.infoRowCol1}>Ngày thi: 24/04/2022</div>
                  <div className={styles.infoRowCol2}>Giờ thi: 08h459</div>
                </div>
                <div className={styles.infoRow}>
                  <div className={styles.infoRowCol1}>Địa điểm thi: Trụ sở chính IIG VN</div>
                  <div className={styles.infoRowCol2}>
                    <a className={styles.resultTitle}>Kết quả:</a> 605
                  </div>
                </div>
              </div>
              <div className={styles.end}>
                <button
                  className={styles.cancel}
                  onClick={() => {
                    setOpenModal((e) => !e)
                  }}
                >
                  {props.title ? props.title : 'Go to homepage'}
                </button>
                <button
                  className={styles.accept}
                  onClick={() => {
                    setOpenModal((e) => !e)
                  }}
                >
                  {props.title ? props.title : 'Go to homepage'}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default memo(Index)
