import React from 'react'
import style from '../../css/Homepage/Banner.module.css'
import img from '../../assets/images/banner.jpeg'
import { Link as ReactLink } from 'react-router-dom';

const Banner = () => {
  return (
    <div className={`${style['banner']} flex flex-col-reverse`} id={style["home"]}>
            <img src={img} alt="" style={{"position":"absolute", "opacity":0.3,"zIndex":-1}}/>
        <div className={style["bg"]}>
            <div className={style["content"]} >
                <h2>A New Home For <br/>
                Game Lovers
                </h2>
                <p>Are you ready to embark on an exhilarating gaming adventure?
                Join us at Arcade-Zone and get ready to immerse yourself in a world of gaming excitement. 
                </p>
                
                <ReactLink href="#" className={style["btn"]} as={'a'} to={'/register'}>Join Now</ReactLink>
            </div>
        </div>
    </div>
  )
}

export default Banner