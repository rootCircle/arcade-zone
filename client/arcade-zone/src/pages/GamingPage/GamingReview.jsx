import React from "react"
import style from "../../css/GamingReview.module.css";

const GamingReview=()=>{
return(
 <>

<div className={style.rev_card}>
<div className={style.identity}>
  <img src="Icon\man.png" />
  <p>Mohit Raghav</p>
  <h6>Guest</h6>
  <div className={style.rating}>
    <img src="Icon\star.png" />
    <img src="Icon\star.png" />
    <img src="Icon\star.png" />
    <img src="Icon\star.png" />
    <img src="Icon\star.png" />
  </div>
</div>

<div className={style.rev_cont}>
  <p id={style.title}>Review:</p>
  <p id={style.content} style={{ color: "black" }}>
    The duration of updates is to much to begin with. The heroes
    are main thing to be considered. It takes like months to years
    to a max a TH due to heroes and troops upgrade . THe
    avvaibility of potions and magic items should be a little easy
    and in a littele greater amount.
  </p>
</div>
</div>
</>
);
}
export default GamingReview;