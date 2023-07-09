import React from 'react'
import style from '../../css/Homepage/Contact.module.css'
import img21 from '../../assets/images/contact.jpg'

const Contact = () => {

  return (<>
            <h1 style={{"fontSize":"38px","textAlign":"center", "marginTop":"15vmin"}}>Contact Us</h1>
      <p style={{ "fontSize": "22px", "textAlign": "center", "marginTop": "1vmin" }}>Share your Views and Opinions with Us</p>
    <div className={style["contact"]} id={style["contact"]}>
        {<img src={img21} alt="" />}
        <div className={style["form"]}>
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
    </>
  )
}

export default Contact