import React, { useEffect, useContext } from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import background from '@asset/background.jpg'
import SlideShow from './SlideShow'
import ItemCategory from './ItemCategory'
import Footer from '@component/Footer'
const Index = () => {
  const { t, i18n } = useTranslation()

  return (
    <>
      <section className={styles.container}>
        <div style={{ backgroundImage: `url(${background})` }} className={styles.background}>
          <div className={styles.left}>
            <div className={styles.title}>Think. Make. Solve.</div>
            <div className={styles.boxMid}>
              <div className={styles.dash}></div>
              <div className={styles.text}>What we do</div>
            </div>
            <div className={styles.content}>
              We enjoy creating delightful,
              <br></br>
              human-centered digital experiences
            </div>
          </div>
          <div className={styles.right}></div>
        </div>
        <div className={styles.category}>
          <div className={styles.categoryTitle}>
            <a>Categories</a>
          </div>
          <div className={styles.categoryItemWrapper}>
            {[...Array(4)].map((value, index) => {
              return <ItemCategory key={value}></ItemCategory>
            })}
          </div>
        </div>
        <SlideShow key={10}></SlideShow>
      </section>
      <Footer key={11}></Footer>
    </>
  )
}

export default Index
