import React from 'react'
import style from '../../css/Homepage/About.module.css'
import img1 from '../../assets/images/about.jpg'

const About = () => {
  return (<>

  <br /><br /><br /><br /><br /><br />
    <div className={`${style["about"]} flex`} id={style["about"]}>
         {<img src={img1} alt="" />} 
        <div className={style["contentBx"]}>
            <h3>About Us</h3>
            <p>At GameLair, we understand that gaming is more fun when you can share the experience with others. That's why we've integrated a robust multiplayer feature into our platform. Connect with friends and gamers from across the globe, form teams, and compete in thrilling multiplayer battles.Whether you're playing cooperatively or engaging in intense PvP matches, GameLair provides an interactive and social gaming experience like no other.

Our website is designed to be user-friendly and intuitive, ensuring that you can dive straight into the gaming action without any hassle. <br />Discover new games through personalized recommendations based on your preferences, read reviews from fellow gamers, and stay updated with the latest gaming news and releases. GameLair is your one-stop destination for all things gaming.</p>
            <a href="#">Read more</a>
        </div>
    </div>

  </>
  )
}

export default About