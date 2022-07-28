import React from 'react'
import styles from './Footer.module.scss'

import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'
import classNames from 'classnames'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__line}></div>
      <div className={styles.footer}>
        <div className={classNames(styles.footer__blur_l, 'blur')} />
        <div className={classNames(styles.footer__blur_r, 'blur')} />
        <div className={styles.footer__social}>
          <img className={styles.footer__img} src={Github} alt='' />
          <img className={styles.footer__img} src={Instagram} alt='' />
          <img className={styles.footer__img} src={LinkedIn} alt='' />
        </div>
        <div className=''>
          <Link to='home' spy={true} smooth={true}>
            <img className={styles.footer__logo} src={Logo} alt='' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
