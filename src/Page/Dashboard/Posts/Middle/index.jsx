import React from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
function Index() {
  const [searchParams, setSearchParams] = useSearchParams()

  const gotoViewPost = () => {
    searchParams.set('view', '1')
    setSearchParams(searchParams)
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>Manage post</p>
        </div>
        <div className={styles.tool}>
          <Link to="/dashboard?tab=posts&create=true" className={styles.create}>
            Create post
          </Link>
        </div>
        <div className={styles.tableWrapper}>
          <div className={styles.panel}>
            <table cellspacing="0">
              <tr>
                <th>Post name</th>
                <th>Date</th>
                <th>Status</th>
                <th>Detail</th>
                <th>Apply</th>
              </tr>
              <tr onClick={gotoViewPost}>
                <td>
                  <div class={styles.name}>
                    <img
                      src={
                        'https://image.thanhnien.vn/1200x630/Uploaded/2022/zxaijr/2021_03_16/rosealbumkyluc1_lgic.png'
                      }
                    ></img>
                    <p>Bai dang Tuyen dung 1 nhan vien FE</p>
                  </div>
                </td>
                <td>10:00AM 20/07/2022</td>
                <td>
                  <div className={styles.status}>
                    <a>Upcoming</a>
                  </div>
                </td>
                <td>
                  <div className={styles.detail}>
                    <div className={styles.recruit}>Mobile App</div>
                    <p>Ngon ngu Java</p>
                  </div>
                </td>
                <td>
                  <div className={styles.apply}>
                    <div className={styles.iconWrapper}>
                      <div className={styles.icon}>
                        <img
                          className={styles.itemIcon}
                          src="https://image.thanhnien.vn/1200x630/Uploaded/2022/zxaijr/2021_03_16/rosealbumkyluc1_lgic.png"
                        ></img>
                        <div className={clsx(styles.itemIcon, styles.push)}>+1</div>
                      </div>
                      <p className={styles.quantity}> 10 nguoi apply</p>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
