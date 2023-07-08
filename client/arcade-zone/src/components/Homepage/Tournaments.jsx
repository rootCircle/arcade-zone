import React from 'react'
import '../../css/Homepage/Tournaments.css'
import img10 from '../../assets/images/forza.jpeg'
import img11 from '../../assets/images/cr.jpeg'
import img12 from '../../assets/images/asphalt9.jpeg'
import img13 from '../../assets/images/minecraft.jpeg'
import img14 from '../../assets/images/valorant.jpeg'
import img15 from '../../assets/images/roblox.jpeg'


const Tournaments = () => {
  return (
    <div className="tournaments" id="tournament">
        <h2>Live Tournaments</h2>
        <h3>Enjoy live stream gaming with your friends and family.</h3>
        <div className="boxBx">
            <div className="box">
                 {<img src={img10} alt="" />}
                <div className="content">
                    <h4><span> 50 </span> Matches in progress...</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quibusdam expedita, deleniti illum corrupti magnam eaque eius sit mollitia vero.</p>
                    <div className="btn">
                        <a href="#" className="watch">Watch</a>
                    </div>
                </div>
            </div>

            <div className="box">
                {<img src={img11} alt="" />}
                <div className="content">
                    <h4><span> 50 </span> Matches in progress...</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quibusdam expedita, deleniti illum corrupti magnam eaque eius sit mollitia vero.</p>
                    <div className="btn">
                        <a href="#" className="watch">Watch</a>
                    </div>
                </div>
            </div>

            <div className="box">
                {<img src={img12} alt="" />}
                <div className="content">
                    <h4><span> 50 </span> Matches in progress...</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quibusdam expedita, deleniti illum corrupti magnam eaque eius sit mollitia vero.</p>
                    <div className="btn">
                        <a href="#" className="watch">Watch</a>
                    </div>
                </div>
            </div>

            <div className="box">
                 {<img src={img13} alt="" />}
                <div className="content">
                    <h4><span> 50 </span> Matches in progress...</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quibusdam expedita, deleniti illum corrupti magnam eaque eius sit mollitia vero.</p>
                    <div className="btn">
                        <a href="#" className="watch">Watch</a>
                    </div>
                </div>
            </div>

            <div className="box">
                {<img src={img14} alt="" />}
                <div className="content">
                    <h4><span> 50 </span> Matches in progress...</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quibusdam expedita, deleniti illum corrupti magnam eaque eius sit mollitia vero.</p>
                    <div className="btn">
                        <a href="#" className="watch">Watch</a>
                    </div>
                </div>
            </div>

            <div className="box">
                 {<img src={img15} alt="" />} 
                <div className="content">
                    <h4><span> 50 </span> Matches in progress...</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quibusdam expedita, deleniti illum corrupti magnam eaque eius sit mollitia vero.</p>
                    <div className="btn">
                        <a href="#" className="watch">Watch</a>
                    </div>
                </div>
            </div>



        </div>
    </div>
  )
}

export default Tournaments