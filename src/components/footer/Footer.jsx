import React from 'react'
import styles from './Footer.module.scss'

import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__line}></div>
      <div className={styles.footer}>
        <div className={styles.footer__social}>
          <img className={styles.footer__img} src={Github} alt='' />
          <img className={styles.footer__img} src={Instagram} alt='' />
          <img className={styles.footer__img} src={LinkedIn} alt='' />
        </div>
        <div className=''>
          <img className={styles.footer__logo} src={Logo} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Footer
