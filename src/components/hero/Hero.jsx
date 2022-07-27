import React from 'react'
import classNames from 'classnames'

import styles from './Hero.module.scss'
import Header from './../header/'

import Heart from './../../assets/heart.png'
import Calories from './../../assets/calories.png'
import Hero_img from './../../assets/hero_image.png'
import Hero_img_back from './../../assets/hero_image_back.png'
import { motion } from 'framer-motion'

const Hero = () => {
  const transition = { type: 'spring', duration: 3 }
  const mobile = window.innerWidth <= 768 ? true : false
  return (
    <div className={styles.hero} id='home'>
      <div className={classNames(styles.hero__blur, 'blur')} />
      <div className={styles.hero__leftside}>
        <Header />
        <div className={styles.fitness_ads}>
          <motion.div
            className={styles.fitness_ads__circle}
            initial={{ left: mobile ? '185px' : '240px' }}
            whileInView={{ left: '9px' }}
            transition={transition}></motion.div>
          <span className={styles.fitness_ads__text}>
            the best fitness club in the town
          </span>
        </div>

        <div className={styles.hero__title}>
          <div className=''>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <span> ideal body</span>
        </div>
        <div className={styles.hero__text}>
          In here we will help you to shape and build your ideal body and live
          up your life to fullest
        </div>
        <div className={styles.figures}>
          <div className={styles.figures__column}>
            <span className={styles.figures__numbers}>+ 140</span>
            <span className={styles.figures__subtext}>Expert coaches</span>
          </div>
          <div className={styles.figures__column}>
            <span className={styles.figures__numbers}>+ 978</span>
            <span className={styles.figures__subtext}>Members joined</span>
          </div>
          <div className={styles.figures__column}>
            <span className={styles.figures__numbers}>+ 50</span>
            <span className={styles.figures__subtext}>Fintess programs</span>
          </div>
        </div>

        <div className={styles.hero__buttons}>
          <button
            className={classNames(styles.hero__start_btn, styles.hero__btn)}>
            Get Started
          </button>
          <button
            className={classNames(styles.hero__more_btn, styles.hero__btn)}>
            Learn More
          </button>
        </div>
      </div>
      <div className={styles.hero__rightside}>
        <button className={classNames(styles.hero__join_btn, styles.hero__btn)}>
          Join Now
        </button>
        <motion.div
          className={styles.heart_rate}
          initial={{ right: '-1rem' }}
          whileInView={{ right: '3rem' }}
          transition={transition}>
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,
              borderRadius: '100%',
            }}
            className={styles.heart_rate__img}
            src={Heart}
            alt=''
          />
          <span className={styles.heart_rate__text}>Heart Rate</span>
          <span className={styles.heart_rate__numbers}>116 bpm</span>
        </motion.div>
        <img className={styles.hero__image} src={Hero_img} alt='' />
        <motion.img
          className={styles.hero__image_back}
          src={Hero_img_back}
          alt=''
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
        />

        <motion.div
          className={styles.calories}
          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          transition={transition}>
          <img className={styles.calories__img} src={Calories} alt='' />
          <div className={styles.calories__textside}>
            <span className={styles.calories__text}>Calories Burned</span>
            <span className={styles.calories__numbers}>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
