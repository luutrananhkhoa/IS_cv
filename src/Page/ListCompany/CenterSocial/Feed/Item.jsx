import React, { useState } from 'react'
import styles from './styles.module.scss'
import avatarMen from '@asset/avatar_men.png'
import clsx from 'clsx'
import CommentIcon from './CommentItem'

function Item() {
  const [comment, setComment] = useState('')
  return (
    <div className={styles.item}>
      <div className={styles.head}>
        <div className={styles.personalWrapper}>
          <div className={styles.avatarWrapper}>
            <img src={avatarMen}></img>
          </div>
          <div className={styles.avatarTextWrapper}>
            <div className={styles.name}>Khanh Duy Le</div>
            <div className={styles.date}> 26/08/22</div>
          </div>
        </div>
        <div className={styles.option}>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <p>Contenttttttttttttttttttttttttttttttttttttt</p>
        <img
          className={styles.imageContent}
          src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png"
        ></img>
      </div>
      <div className={styles.foot}>
        <div className={styles.footItem}>
          <i className="fa-regular fa-heart"></i>
          <div className={styles.footItemTitle}>25 Like</div>
        </div>
        <div className={styles.footItem}>
          <i className="fa-regular fa-comment"></i>
          <div className={styles.footItemTitle}>10 Comment</div>
        </div>
        <div className={styles.footItem}>
          <i className="fa-regular fa-bookmark"></i>
          <div className={styles.footItemTitle}>Bookmark</div>
        </div>
        <div className={styles.footItem}>
          <i className="fa-light fa-share-nodes"></i>
          <div className={styles.footItemTitle}>Share</div>
        </div>
        <div className={styles.footItem}>
          <div className={styles.buttonApply}>Apply</div>
        </div>
      </div>
      <div className={styles.commentWrapper}>
        <div className={styles.commentItem}>
          <img src={avatarMen} className={styles.commentIcon}></img>
          <div className={styles.commentInputWrapper}>
            <input
              placeholder="Write your comment.."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></input>
            <div className={styles.commentTool}>
              <i className={clsx(styles.commentSend, 'fa-solid fa-paper-plane-top')}></i>
            </div>
          </div>
        </div>
        <CommentIcon></CommentIcon>
        <CommentIcon></CommentIcon>
        <CommentIcon></CommentIcon>
        <CommentIcon></CommentIcon>
      </div>
    </div>
  )
}

export default Item
