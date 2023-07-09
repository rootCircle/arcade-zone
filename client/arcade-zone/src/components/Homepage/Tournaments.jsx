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
                    <h4><span>  </span> FORZA HORIZON 5</h4>
                    <p>Ignite your engine and unleash the power that lies within, as every curve becomes an opportunity to showcase your skill and prove yourself as a true racer. </p>
                    <div className={style["btn"]}>
                        <a href="https://www.youtube.com/watch?v=djSw1xi06D8" className={style["watch"]}>Watch</a>
                    </div>
                </div>
            </div>

            <div className={style["box"]}>
                {<img src={img11} alt="" />}
                <div className={style["content"]}>
                    <h4><span> </span> CLASH ROYALE</h4>
                    <p>"Strategize, clash, and wire your way to victory in the thrilling world of Clashwire!"This line emphasizes the elements of strategy and competition in the game.</p>
                    <div className={style["btn"]}>
                        <a href="https://www.youtube.com/watch?v=bpRdM-rKrP0" className={style["watch"]}>Watch</a>
                    </div>
                </div>
            </div>

            <div className={style["box"]}>
                {<img src={img12} alt="" />}
                <div className={style["content"]}>
                    <h4><span>  </span> ASPHALT LEGENDS</h4>
                    <p>The road ahead may be challenging, but with determination and skill, you can conquer anything. Welcome to the thrilling world of car games, where speed is your ally.</p>
                    <div className={style["btn"]}>
                        <a href="https://www.youtube.com/watch?v=exwTDxaCHIM" className={style["watch"]}>Watch</a>
                    </div>
                </div>
            </div>

            <div className={style["box"]}>
                 {<img src={img13} alt="" />}
                <div className={style["content"]}>
                    <h4><span>  </span>MINECRAFT</h4>
                    <p>Its open-world nature, the ability to build and create, and the vast possibilities for exploration and discovery. It aims to capture the imagination and spark curiosity in players.</p>
                    <div className={style["btn"]}>
                        <a href="https://www.youtube.com/watch?v=hn39ebSravc" className={style["watch"]}>Watch</a>
                    </div>
                </div>
            </div>

            <div className={style["box"]}>
                {<img src={img14} alt="" />}
                <div className={style["content"]}>
                    <h4><span>  </span>VALORANT</h4>
                    <p>emphasizing its strategic gameplay, team-based tactics, and intense competition. It conveys the thrill and  gunplay and coordinate strategies with their teammates.</p>
                    <div className={style["btn"]}>
                        <a href="https://www.youtube.com/watch?v=YRag0pe85Ws" className={style["watch"]}>Watch</a>
                    </div>
                </div>
            </div>

            <div className={style["box"]}>
                 {<img src={img15} alt="" />} 
                <div className={style["content"]}>
                    <h4><span> </span> ROBLOX</h4>
                    <p>It invites players to explore the vast virtual world of Roblox, where they can build, play, and connect with millions of other players. By using words like "unlock" and "unleash,".</p>
                    <div className={style["btn"]}>
                        <a href="https://www.youtube.com/watch?v=Xpx7HDgy0sM" className={style["watch"]}>Watch</a>
                    </div>
                </div>
            </div>



        </div>
    </div>
  )
}

export default Tournaments