import React from 'react'
import styles from './styles.module.scss'
import { BsChevronDown } from 'react-icons/bs'

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Xac thuc chung chi </div>

      <div className={styles.filterWrapper}>
        <p>Loc: </p>
        <div className={styles.inputWrapper}>
          <input type="date" id="date" name="date" className={styles.filterDate} />
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Nhap dia diem thi"
            className={styles.filterLocation}
          ></input>
          <div className={styles.filterDropdown}>
            <BsChevronDown size="20px"></BsChevronDown>
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            id="status"
            name="status"
            placeholder="Nhap trang thai"
            className={styles.filterStatus}
          />
          <div className={styles.filterDropdown}>
            <BsChevronDown size="20px"></BsChevronDown>
          </div>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.body}>
              <th className={`${styles.theaderStyle} ${styles.column1}`}>STT</th>
              <th className={`${styles.theaderStyle} ${styles.column2}`}>Ho va ten</th>
              <th className={`${styles.theaderStyle} ${styles.column3}`}>Ngay thi</th>
              <th className={`${styles.theaderStyle} ${styles.column4}`}>Dia diem thi</th>
              <th className={`${styles.theaderStyle} ${styles.column5}`}>Diem thi</th>
              <th className={`${styles.theaderStyle} ${styles.column6}`}>Trang thai</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.body}>
              <th className={styles.column1}>Class name</th>
              <th className={styles.column2}>Type</th>
              <th className={styles.column3}>Hours</th>
              <th className={styles.column4}>Trainer</th>
              <th className={styles.column5}>Spots</th>
              <th className={styles.column6}>Spots</th>
            </tr>
            <tr className={styles.body}>
              <th className={styles.column1}>Class name</th>
              <th className={styles.column2}>Type</th>
              <th className={styles.column3}>Hours</th>
              <th className={styles.column4}>Trainer</th>
              <th className={styles.column5}>Spots</th>
              <th className={styles.column6}>Spots</th>
            </tr>
            <tr className={styles.body}>
              <th className={styles.column1}>Class name</th>
              <th className={styles.column2}>Type</th>
              <th className={styles.column3}>Hours</th>
              <th className={styles.column4}>Trainer</th>
              <th className={styles.column5}>Spots</th>
              <th className={styles.column6}>Spots</th>
            </tr>
            <tr className={styles.body}>
              <th className={styles.column1}>Class name</th>
              <th className={styles.column2}>Type</th>
              <th className={styles.column3}>Hours</th>
              <th className={styles.column4}>Trainer</th>
              <th className={styles.column5}>Spots</th>
              <th className={styles.column6}>Spots</th>
            </tr>
            <tr className={styles.body}>
              <th className={styles.column1}>Class name</th>
              <th className={styles.column2}>Type</th>
              <th className={styles.column3}>Hours</th>
              <th className={styles.column4}>Trainer</th>
              <th className={styles.column5}>Spots</th>
              <th className={styles.column6}>Spots</th>
            </tr>
            <tr className={styles.body}>
              <th className={styles.column1}>Class name</th>
              <th className={styles.column2}>Type</th>
              <th className={styles.column3}>Hours</th>
              <th className={styles.column4}>Trainer</th>
              <th className={styles.column5}>Spots</th>
              <th className={styles.column6}>Spots</th>
            </tr>
            <tr className={styles.body}>
              <th className={styles.column1}>Class name</th>
              <th className={styles.column2}>Type</th>
              <th className={styles.column3}>Hours</th>
              <th className={styles.column4}>Trainer</th>
              <th className={styles.column5}>Spots</th>
              <th className={styles.column6}>Spots</th>
            </tr>
            <tr className={styles.body}>
              <th className={styles.column1}>Class name</th>
              <th className={styles.column2}>Type</th>
              <th className={styles.column3}>Hours</th>
              <th className={styles.column4}>Trainer</th>
              <th className={styles.column5}>Spots</th>
              <th className={styles.column6}>Spots</th>
            </tr>
            <tr className={styles.body}>
              <th className={styles.column1}>Class name</th>
              <th className={styles.column2}>Type</th>
              <th className={styles.column3}>Hours</th>
              <th className={styles.column4}>Trainer</th>
              <th className={styles.column5}>Spots</th>
              <th className={styles.column6}>Spots</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
