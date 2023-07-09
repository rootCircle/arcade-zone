import React from 'react'
import style from '../../css/Homepage/Banner.module.css'
import img from '../../assets/images/banner.jpeg'

const Banner = () => {
  return (
    <div className={`${style['banner']} flex flex-col-reverse`} id={style["home"]}>
            <img src={img} alt="" style={{"position":"absolute", "opacity":0.3,"zIndex":-1, "top":0}}/>
        <div className={style["bg"]}>
            <div className={style["content"]} >
                <h2>A New Home For <br/>
                Game Lovers
                </h2>
                <p>Are you ready to embark on an exhilarating gaming adventure?
                Join us at GameLair and get ready to immerse yourself in a world of gaming excitement. 
                </p>
                <a href="#" className={style["btn"]}>Join Now</a>
            </div>
        </div>
    </div>
  )
}

export default Banner