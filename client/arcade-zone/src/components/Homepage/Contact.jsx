import React from 'react'
import style from '../../css/Homepage/Contact.module.css'
import img21 from '../../assets/images/contact.jpg'

const Contact = () => {
  return (
    <div className={style["contact"]} id={style["contact"]}>
        {<img src={img21} alt="" />}
        <div className={style["form"]}>
            <h1>Contact Us</h1>
            <div className={style["inputBx"]}>
                <p>Enter Name</p>
                <input type="text" placeholder='Full Name' />
            </div>
            <div className={style["inputBx"]}>
                <p>Enter Email</p>
                <input type="text" placeholder='Email' />
            </div>
            <div className={style["inputBx"]}>
                <p>Message</p>
                <textarea placeholder='Type here...'></textarea>
            </div>
            <div className={style["inputBx"]}>
                <input type="submit" name='Submit' />
            </div>
        </div>
    </div>
  )
}

export default Contact