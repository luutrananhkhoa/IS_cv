import React from 'react'
import styles from './styles.module.scss'

function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.personalWrapper}>
        <div className={styles.personal}>
          <div className={styles.title}>Personal</div>
          <div className={styles.itemWrapper}>
            <span className={styles.item}>
              <div className={styles.iconWrapper}>
                <i className="fa-solid fa-address-card"></i>
                <label>Address</label>
              </div>
              <a>0x000000</a>
            </span>
            <span className={styles.tool}>
              <i className="fa-solid fa-pen-to-square"></i>
              <i className="fa-solid fa-trash-can"></i>
            </span>
          </div>
          <div className={styles.itemWrapper}>
            <span className={styles.item}>
              <div className={styles.iconWrapper}>
                <i className="fa-solid fa-address-card"></i>
                <label>ID Card</label>
              </div>
              <a>12312312</a>
            </span>
            <span className={styles.tool}>
              <i className="fa-solid fa-pen-to-square"></i>
              <i className="fa-solid fa-trash-can"></i>
            </span>
          </div>
          <div className={styles.itemWrapper}>
            <span className={styles.item}>
              <div className={styles.iconWrapper}>
                <i className="fa-solid fa-address-card"></i>
                <label>Name</label>
              </div>
              <a>Khanh duy le</a>
            </span>
            <span className={styles.tool}>
              <i className="fa-solid fa-pen-to-square"></i>
              <i className="fa-solid fa-trash-can"></i>
            </span>
          </div>
          <div className={styles.itemWrapper}>
            <span className={styles.item}>
              <div className={styles.iconWrapper}>
                <i className="fa-solid fa-address-card"></i>
                <label>Phone</label>
              </div>
              <a>091111</a>
            </span>
            <span className={styles.tool}>
              <i className="fa-solid fa-pen-to-square"></i>
              <i className="fa-solid fa-trash-can"></i>
            </span>
          </div>
          <div className={styles.itemWrapper}>
            <span className={styles.item}>
              <div className={styles.iconWrapper}>
                <i className="fa-solid fa-address-card"></i>
                <label>Professional</label>
              </div>
              <a>fresher</a>
            </span>
            <span className={styles.tool}>
              <i className="fa-solid fa-pen-to-square"></i>
              <i className="fa-solid fa-trash-can"></i>
            </span>
          </div>
          <div className={styles.itemWrapper}>
            <span className={styles.item}>
              <div className={styles.iconWrapper}>
                <i className="fa-solid fa-address-card"></i>
                <label>Email</label>
              </div>
              <a>@gmail</a>
            </span>
            <span className={styles.tool}>
              <i className="fa-solid fa-pen-to-square"></i>
              <i className="fa-solid fa-trash-can"></i>
            </span>
          </div>
          <div className={styles.itemWrapper}>
            <span className={styles.item}>
              <div className={styles.iconWrapper}>
                <i className="fa-solid fa-address-card"></i>
                <label>Github</label>
              </div>
              <a>@github</a>
            </span>
            <span className={styles.tool}>
              <i className="fa-solid fa-pen-to-square"></i>
              <i className="fa-solid fa-trash-can"></i>
            </span>
          </div>
          <div className={styles.itemWrapper}>
            <span className={styles.item}>
              <div className={styles.iconWrapper}>
                <i className="fa-solid fa-address-card"></i>
                <label>Linked In</label>
              </div>
              <a>@linkedin</a>
            </span>
            <span className={styles.tool}>
              <i className="fa-solid fa-pen-to-square"></i>
              <i className="fa-solid fa-trash-can"></i>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.personalWrapper}>
        <div className={styles.personal}>
          <div className={styles.title}>Skills</div>
          <div className={styles.itemWrapper}>
            <span className={styles.item}>
              <div className={styles.iconWrapper}>
                <label> CSS</label>
              </div>
              <a>0x000000</a>
            </span>
            <span className={styles.tool}>
              <i className="fa-solid fa-pen-to-square"></i>
              <i className="fa-solid fa-trash-can"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
