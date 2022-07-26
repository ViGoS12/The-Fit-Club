import React, { useRef } from 'react'
import styles from './Join.module.scss'
import emailjs from '@emailjs/browser'

const Join = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_hod3g58',
        'template_m9gfhxt',
        form.current,
        'i6HvZEu_u86lHjqLA'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div className={styles.join} id='join-us'>
      <div className={styles.join__leftside}>
        <div className={styles.join__line} />
        <div className=''>
          <span className='stroke-text'>Ready to </span>
          <span>Level up</span>
        </div>
        <div className=''>
          <span>Your body </span>
          <span className='stroke-text'>with us?</span>
        </div>
      </div>
      <div className={styles.join__rightside}>
        <form
          ref={form}
          onSubmit={sendEmail}
          action=''
          className={styles.join__email}>
          <input
            className={styles.join__input}
            type='email'
            name='user_email'
            placeholder='Enter your Email address'
          />
          <button className={styles.join__btn}>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join
