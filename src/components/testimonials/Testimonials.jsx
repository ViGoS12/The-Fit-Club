import React, { useState } from 'react'
import styles from './Testimonials.module.scss'
import classNames from 'classnames'
import { testimonialsData } from './../../data/testimonialsData'

import LeftArrow from '../../assets/leftArrow.png'
import RightArrow from '../../assets/rightArrow.png'

const Testimonials = () => {
  const [selected, setSelected] = useState(0)

  const testimonialsLength = testimonialsData.length

  return (
    <div className={styles.testimonials}>
      <div className={styles.testimonials__leftside}>
        <span className={styles.testimonials__subtitle}>Testimonials</span>
        <span className={classNames('stroke-text', styles.testimonials__title)}>
          What they
        </span>
        <span className={styles.testimonials__title}>say about us</span>
        <span className={styles.testimonials__slider}>
          {testimonialsData[selected].review}
        </span>
        <span>
          <span style={{ color: 'orange' }}>
            {testimonialsData[selected].name}
          </span>
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className={styles.testimonials__rightside}>
        <div className={styles.testimonials__rectangle}></div>
        <div className={styles.testimonials__back_rectangle}></div>

        <img
          className={styles.testimonials__img}
          src={testimonialsData[selected].image}
          alt=''
        />
        <div className={styles.testimonials__arrows}>
          <img
            onClick={() =>
              selected === 0
                ? setSelected(testimonialsLength - 1)
                : setSelected((prev) => prev - 1)
            }
            className={styles.testimonials__arrow}
            src={LeftArrow}
            alt=''
          />
          <img
            onClick={() =>
              selected === testimonialsLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1)
            }
            className={styles.testimonials__arrow}
            src={RightArrow}
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
