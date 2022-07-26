import React from 'react'
import styles from './Programs.module.scss'

import { programsData } from './../../data/programsData'

import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className={styles.programs} id='programs'>
      <div className={styles.programs__header}>
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>To shape you</span>
      </div>

      <div className={styles.programs__categories}>
        {programsData.map((program) => (
          <div className={styles.category}>
            <div className={styles.category__icon}>{program.image}</div>
            <span className={styles.category__title}>{program.heading}</span>
            <span className={styles.category__text}>{program.details}</span>
            <div className={styles.programs__join_btn}>
              <span>Join Now</span>
              <img className={styles.programs__img} src={RightArrow} alt='' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Programs
