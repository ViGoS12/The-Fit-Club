import React from 'react'
import styles from './Hero.module.scss'
import Header from './../header/'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__leftside}>
        <Header />
      </div>
      <div className={styles.hero__rightside}>2</div>
    </div>
  )
}

export default Hero
