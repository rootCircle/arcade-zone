import React from 'react'
import style from '../../css/Homepage/Tournaments.module.css'
import img10 from '../../assets/images/forza.jpeg'
import img11 from '../../assets/images/cr.jpeg'
import img12 from '../../assets/images/asphalt9.jpeg'
import img13 from '../../assets/images/minecraft.jpeg'
import img14 from '../../assets/images/valorant.jpeg'
import img15 from '../../assets/images/roblox.jpeg'


const Tournaments = () => {
  return (
    <div className={style["tournaments"]} id={style["tournament"]}>
        <h2>Live Tournaments</h2>
        <h3>Enjoy live stream gaming with your friends and family.</h3>
        <div className={style["boxBx"]}>
            <div className={style["box"]}>
                 {<img src={img10} alt="" />}
                <div className={style["content"]}>
                    <h4><span> 50 </span> Matches in progress...</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quibusdam expedita, deleniti illum corrupti magnam eaque eius sit mollitia vero.</p>
                    <div className={style["btn"]}>
                        <a href="#" className={style["watch"]}>Watch</a>
                    </div>
                </div>
            </div>

            <div className={style["box"]}>
                {<img src={img11} alt="" />}
                <div className={style["content"]}>
                    <h4><span> 50 </span> Matches in progress...</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quibusdam expedita, deleniti illum corrupti magnam eaque eius sit mollitia vero.</p>
                    <div className={style["btn"]}>
                        <a href="#" className={style["watch"]}>Watch</a>
                    </div>
                </div>
            </div>

            <div className={style["box"]}>
                {<img src={img12} alt="" />}
                <div className={style["content"]}>
                    <h4><span> 50 </span> Matches in progress...</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quibusdam expedita, deleniti illum corrupti magnam eaque eius sit mollitia vero.</p>
                    <div className={style["btn"]}>
                        <a href="#" className={style["watch"]}>Watch</a>
                    </div>
                </div>
            </div>

            <div className={style["box"]}>
                 {<img src={img13} alt="" />}
                <div className={style["content"]}>
                    <h4><span> 50 </span> Matches in progress...</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quibusdam expedita, deleniti illum corrupti magnam eaque eius sit mollitia vero.</p>
                    <div className={style["btn"]}>
                        <a href="#" className={style["watch"]}>Watch</a>
                    </div>
                </div>
            </div>

            <div className={style["box"]}>
                {<img src={img14} alt="" />}
                <div className={style["content"]}>
                    <h4><span> 50 </span> Matches in progress...</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quibusdam expedita, deleniti illum corrupti magnam eaque eius sit mollitia vero.</p>
                    <div className={style["btn"]}>
                        <a href="#" className={style["watch"]}>Watch</a>
                    </div>
                </div>
            </div>

            <div className={style["box"]}>
                 {<img src={img15} alt="" />} 
                <div className={style["content"]}>
                    <h4><span> 50 </span> Matches in progress...</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quibusdam expedita, deleniti illum corrupti magnam eaque eius sit mollitia vero.</p>
                    <div className={style["btn"]}>
                        <a href="#" className={style["watch"]}>Watch</a>
                    </div>
                </div>
            </div>



        </div>
    </div>
  )
}

export default Tournaments