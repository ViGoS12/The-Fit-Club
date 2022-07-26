import React from 'react'
import classNames from 'classnames'

import styles from './Reasons.module.scss'

import Image1 from '../../assets/image1.png'
import Image2 from '../../assets/image2.png'
import Image3 from '../../assets/image3.png'
import Image4 from '../../assets/image4.png'
import Tick from '../../assets/tick.png'
import Nb from '../../assets/nb.png'
import Adidas from '../../assets/adidas.png'
import Nike from '../../assets/nike.png'

const Reasons = () => {
  return (
    <div className={styles.reasons} id='reasons'>
      <div className={styles.reasons__leftside}>
        <img
          className={classNames(styles.reasons__img, styles.reasons__image1)}
          src={Image1}
          alt=''
        />
        <img
          className={classNames(styles.reasons__img, styles.reasons__image2)}
          src={Image2}
          alt=''
        />
        <img
          className={classNames(styles.reasons__img, styles.reasons__image3)}
          src={Image3}
          alt=''
        />
        <img
          className={classNames(styles.reasons__img, styles.reasons__image4)}
          src={Image4}
          alt=''
        />
      </div>
      <div className={styles.reasons__rightside}>
        <span className={styles.reasons__subtitle}>some reasons</span>
        <div>
          <span className={classNames('stroke-text', styles.reasons__title)}>
            why
          </span>
          <span className={styles.reasons__title}> choose us?</span>
        </div>

        <div className={styles.details}>
          <div className={styles.details__item}>
            <img className={styles.details__img} src={Tick} alt=''></img>
            <span>Over 140+ expert coachs</span>
          </div>
          <div className={styles.details__item}>
            <img className={styles.details__img} src={Tick} alt='' />
            <span>Train smarter and faster than before</span>
          </div>
          <div className={styles.details__item}>
            <img className={styles.details__img} src={Tick} alt='' />
            <span>1 Free program for new member</span>
          </div>
          <div className={styles.details__item}>
            <img className={styles.details__img} src={Tick} alt='' />
            <span>Reliable partners</span>
          </div>
          <span className={styles.details__text}>our partners</span>
          <div className={styles.partners}>
            <img className={styles.partners__img} src={Nb} alt='' />
            <img className={styles.partners__img} src={Adidas} alt='' />
            <img className={styles.partners__img} src={Nike} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reasons
