import React, { useState, Fragment } from 'react'
import Categories from './Categories'
import style from '../../css/Homepage/Game.module.css'
import { Link as ReactLink } from 'react-router-dom';

const Game = () => {
      
    const [data, setData] = useState(Categories);
    const  filterResult = (catItem) =>{
        const result=Categories.filter((curData) =>{
            return curData.category===catItem;
        });
        setData(result);

    }

  return (
    <div className={style["games"]} id={style["games"]}>
        <h1>Popular Games</h1>
        <ul>
            <li key="all" className={style["list"]}  onClick={() => setData(Categories)}>All</li>
            <li key="pcgame" className={style["list"]} onClick={() => filterResult('pc')}>Pc games</li>
            <li key="mobile" className={style["list"]}  onClick={() => filterResult('mobile')}>Mobile games</li>
        </ul>
        
        <div className={style["cardBx"]}>        
          {data.map((values) =>{
                const {id, title, rating, image} = values;
                return (
                    <Fragment key={id}>
                        <div className={style["card"]} key={id}>
                           <img src={image} alt="" />
                            <div className={style["content"]}>
                               <h2>{title}</h2>
                                <div className={style["progress-line"]}><span></span></div>
                                   <div className={style["info"]}>
                                   <p>Rating <br/> <span>⭐ {rating}</span></p>
                                   <ReactLink as={ReactLink} to={'/home'}>Play Now</ReactLink>
                                </div>
                            </div>
                        </div>  
                    </Fragment>
                )
            })}

        </div>
     </div>
        
    
  )
}

export default Game