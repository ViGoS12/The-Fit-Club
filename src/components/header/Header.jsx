import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.header__logo} src={logo} alt='' />

      <ul className={styles.header__list}>
        <li className={styles.header__item}>Home</li>
        <li className={styles.header__item}>Programs</li>
        <li className={styles.header__item}>Why us</li>
        <li className={styles.header__item}>Plans</li>
        <li className={styles.header__item}>Testimonials</li>
      </ul>
    </div>
  )
}

export default Header
