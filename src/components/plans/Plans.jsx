import React from 'react'
import styles from './Plans.module.scss'

import { plansData } from './../../data/plansData'

import WhiteTick from '../../assets/whiteTick.png'
import classNames from 'classnames'

const Plans = () => {
  return (
    <div className={styles.plans__container}>
      <div className={styles.plans__header}>
        <span className='stroke-text'>Ready to start</span>
        <span>Your journey</span>
        <span className='stroke-text'>now withus</span>
      </div>
      <div className={styles.plans}>
        {plansData.map((plan, idx) => (
          <div className={styles.plan} key={idx}>
            <div
              className={classNames(styles.plan__img, {
                [styles.plan__img_white]: idx === 1,
              })}>
              {plan.icon}
            </div>

            <span className={styles.plan__name}>{plan.name}</span>
            <span className={styles.plan__price}>$ {plan.price}</span>

            <div className={styles.features}>
              {plan.features.map((feature, idx) => (
                <div className={styles.feature} key={idx}>
                  <img className={styles.feature__img} src={WhiteTick} alt='' />
                  <span key={idx}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span className={styles.plans__more_btn}>
                See more benefits -{'>'}
              </span>
            </div>
            <button
              className={classNames(styles.plan__join_btn, {
                [styles.plan__join_btn_orange]: idx === 1,
              })}>
              Join now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans
