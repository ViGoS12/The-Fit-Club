import React, { useState } from 'react'
import styles from './Header.module.scss'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className={styles.header}>
      <img className={styles.header__logo} src={Logo} alt='' />
      {isVisible === false && mobile === true ? (
        <div
          className={styles.header__burger_btn}
          onClick={() => setIsVisible(true)}>
          <img className={styles.header__bars} src={Bars} alt='' />
        </div>
      ) : (
        <ul className={styles.header__list}>
          <li>
            <Link
              to='home'
              activeClass='active'
              spy={true}
              smooth={true}
              className={styles.header__item}
              onClick={() => setIsVisible(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to='programs'
              spy={true}
              smooth={true}
              className={styles.header__item}
              onClick={() => setIsVisible(false)}>
              Programs
            </Link>
          </li>
          <li>
            <Link
              to='reasons'
              spy={true}
              smooth={true}
              className={styles.header__item}
              onClick={() => setIsVisible(false)}>
              Why us
            </Link>
          </li>
          <li>
            <Link
              to='plans'
              spy={true}
              smooth={true}
              className={styles.header__item}
              onClick={() => setIsVisible(false)}>
              Plans
            </Link>
          </li>
          <li>
            <Link
              to='testimonials'
              spy={true}
              smooth={true}
              className={styles.header__item}
              onClick={() => setIsVisible(false)}>
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Header
