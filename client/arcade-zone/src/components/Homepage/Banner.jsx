import React from 'react'
import style from '../../css/Homepage/Banner.module.css'
import img from '../../assets/images/banner.jpeg'

const Banner = () => {
  return (
    <div className={style['banner']} id={style["home"]}>
        <div className={style["bg"]}>
            <div className={style["content"]}>
                <h2>A New Home For <br/>
                Game Lovers
                </h2>
                <p>Are you ready to embark on an exhilarating gaming adventure?
                Join us at GameLair and get ready to immerse yourself in a world of gaming excitement. 
                </p>
                <a href="#" className={style["btn"]}>Join Now</a>
            </div>
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Banner