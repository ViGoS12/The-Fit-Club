import React from 'react'
import classNames from 'classnames'

import styles from './Hero.module.scss'
import Header from './../header/'

import Heart from './../../assets/heart.png'
import Calories from './../../assets/calories.png'
import Hero_img from './../../assets/hero_image.png'
import Hero_img_back from './../../assets/hero_image_back.png'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__leftside}>
        <Header />

        <div className={styles.fitness_ads}>
          <div className={styles.fitness_ads__circle}></div>
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
        <div className={styles.heart_rate}>
          <img className={styles.heart_rate__img} src={Heart} alt='' />
          <span className={styles.heart_rate__text}>Heart Rate</span>
          <span className={styles.heart_rate__numbers}>116 bpm</span>
        </div>
        <img className={styles.hero__image} src={Hero_img} alt='' />
        <img className={styles.hero__image_back} src={Hero_img_back} alt='' />

        <div className={styles.calories}>
          <img className={styles.calories__img} src={Calories} alt='' />
          <div className={styles.calories__textside}>
            <span className={styles.calories__text}>Calories Burned</span>
            <span className={styles.calories__numbers}>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
