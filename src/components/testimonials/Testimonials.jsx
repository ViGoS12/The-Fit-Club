import React, { useState } from 'react'
import styles from './Testimonials.module.scss'
import classNames from 'classnames'
import { testimonialsData } from './../../data/testimonialsData'

import LeftArrow from '../../assets/leftArrow.png'
import RightArrow from '../../assets/rightArrow.png'

import { motion } from 'framer-motion'

const Testimonials = () => {
  const [selected, setSelected] = useState(0)

  const transition = { type: 'spring', duration: 3 }
  const testimonialsLength = testimonialsData.length

  return (
    <div className={styles.testimonials} id='testimonials'>
      <div className={styles.testimonials__leftside}>
        <span className={styles.testimonials__subtitle}>Testimonials</span>
        <span className={classNames('stroke-text', styles.testimonials__title)}>
          What they
        </span>
        <span className={styles.testimonials__title}>say about us</span>
        <motion.span
          className={styles.testimonials__slider}
          key={selected}
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition}>
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: 'orange' }}>
            {testimonialsData[selected].name}
          </span>
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className={styles.testimonials__rightside}>
        <motion.div
          className={styles.testimonials__rectangle}
          initial={{ opacity: 0, x: -50 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}></motion.div>
        <motion.div
          className={styles.testimonials__back_rectangle}
          initial={{ opacity: 0, x: 50 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}></motion.div>

        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          className={styles.testimonials__img}
          transition={transition}
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
