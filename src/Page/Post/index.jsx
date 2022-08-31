import React, { useState } from 'react'
import styles from './styles.module.scss'
import photo from './photo.jpg'
import CommentItem from '@component/CommentItem'
import avatarMen from '@asset/avatar_men.png'

function Index() {
  const [comment, setComment] = useState()
  return (
    <section className={styles.container}>
      <div className={styles.photo}>
        <img src={photo}></img>
      </div>
      <div className={styles.comment}>
        <div className={styles.top}>
          <div className={styles.avatar}>
            <img
              src={
                'https://giaingo.info/wp-content/uploads/2021/07/Taylor-Swift-la-ai-2-1024x683.jpg'
              }
            ></img>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.title}>KMS</div>
            <div className={styles.time}> 10:00 AM</div>
            <div className={styles.tag}>
              <i className="fa-solid fa-star"></i>
              <p> Recruit</p>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <p>Lorem Ipsum</p>
        </div>
        <div className={styles.tool}>
          <div className={styles.item}>
            <i className="fa-regular fa-heart"></i>
            <div className={styles.title}>25 Like</div>
          </div>
          <div className={styles.item}>
            <i className="fa-regular fa-bookmark"></i>
            <div className={styles.title}>Bookmark</div>
          </div>
          <div className={styles.item}>
            <i className="fa-regular fa-share-nodes"></i>
            <div className={styles.title}>Share</div>
          </div>
          <div className={styles.item}>
            <div className={styles.apply}>Apply</div>
          </div>
        </div>
        <div className={styles.group}>
          <CommentItem></CommentItem>
          <CommentItem></CommentItem>
        </div>
        <div className={styles.input}>
          <div className={styles.avatar}>
            <img src={avatarMen}></img>
          </div>
          <div className={styles.wrapper}>
            <textarea
              onKeyDown={(e) => {
                e.target.style.height = 'inherit'
                e.target.style.height = `${e.target.scrollHeight}px`
              }}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment.."
            ></textarea>
            <div className={styles.send}>
              <i className={'fa-solid fa-paper-plane-top'}></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index
