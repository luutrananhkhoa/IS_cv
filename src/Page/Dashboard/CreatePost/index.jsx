import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import PostItem from '@component/PostItem'
import { Dropdown } from '@component/Dropdown'

function Index() {
  const [hashtag, setHashtag] = useState('hashtag')
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Link to={-1} className="fa-solid fa-angle-left"></Link>
        <p>Create post</p>
      </div>

      <div className={styles.group}>
        <div className={styles.left}>
          <div className={styles.image}>
            <div className={styles.panelTitle}>
              <a>Media</a>
            </div>
            <button className={styles.imageTool}>
              <i className="fa-regular fa-hexagon-image"></i>
              <a>Add Photo</a>
            </button>
          </div>
          <div className={styles.content}>
            <div className={styles.panelTitle}>
              <a>Text</a>
            </div>
            <Dropdown
              content={
                <>
                  <div onClick={() => setHashtag('hash tag')}>Hashtag</div>
                  <div onClick={() => setHashtag('recruit')}>Recruit</div>
                </>
              }
              state={[hashtag, setHashtag]}
            >
              <div className={styles.hashtag}>
                <i className={'fa-solid fa-star'}></i>
                <a>{hashtag}</a>
              </div>
            </Dropdown>

            <textarea
              onKeyDown={(e) => {
                e.target.style.height = 'inherit'
                e.target.style.height = `${e.target.scrollHeight}px`
              }}
              placeholder="Start post in your profile..."
            ></textarea>
            <div className={styles.tool}></div>
          </div>
          <div className={styles.button}>
            <button className={styles.publish}>Publish</button>
            <button className={styles.cancel}>Cancel</button>
          </div>
        </div>
        <div className={styles.right}>
          <PostItem></PostItem>
        </div>
      </div>
    </div>
  )
}

export default Index
