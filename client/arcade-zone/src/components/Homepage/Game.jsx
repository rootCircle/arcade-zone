import React, { useState, Fragment } from 'react'
import Categories from './Categories'
import '../../css/Homepage/Game.css'

const Game = () => {
      
    const [data, setData] = useState(Categories);
    const  filterResult = (catItem) =>{
        const result=Categories.filter((curData) =>{
            return curData.category===catItem;
        });
        setData(result);

    }

  return (
    <div className="games" id="games">
        <h1>Popular Games</h1>
        <ul>
            <li key="all" className="list"  onClick={() => setData(Categories)}>All</li>
            <li key="pcgame" className="list" onClick={() => filterResult('pc')}>Pc games</li>
            <li key="mobile" className="list"  onClick={() => filterResult('mobile')}>Mobile games</li>
        </ul>
        
        <div className="cardBx">        
          {data.map((values) =>{
                const {id, title, rating, image} = values;
                return (
                    <Fragment key={id}>
                        <div className="card" key={id}>
                           <img src={image} alt="" />
                            <div className="content">
                               <h2>{title}</h2>
                                <div className="progress-line"><span></span></div>
                                   <div className="info">
                                   <p>Rating <br/> <span>⭐ {rating}</span></p>
                                   <a href="#">Play Now</a>
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