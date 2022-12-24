import React from 'react'
import './Hero.css';
import {GrFavorite} from 'react-icons/gr';

function Hero() {
  return (
    <>
    <div className="bodybox">
       <div> <h1> Best Picks</h1></div>
        <div className='cards'>
          <div className='card'>
            <div className='innercard'>
                <img src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1571779199-becca-1571779144.jpg?crop=1xw:1xh;center,top&resize=480:*'></img>
            <p>Glow silk drops highlighter.</p>
            <p>₹ 450 </p>
            <p><GrFavorite/> <button>Add to Cart</button></p>
            </div>
        </div>
          <div className='card'>
            <div className="innercard">
                <img src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13105598/2021/1/25/31c4c5f6-8540-46a1-952e-bf2094943cb71611572545003-Lakme-Women-Lipstick-361611572544138-1.jpg'></img>
              <p>9 to 5 Matte Lipstick.</p>
              <p>₹ 250 </p>
              <p><GrFavorite/> <button>Add to Cart</button></p>
            </div>
          </div>
          <div className='card'>
          <div className="innercard">
                <img src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13609226/2022/4/18/97d94ea7-1e5e-4cba-be97-1daaa4fc900b1650282213442-Maybelline-New-York-Fit-Me-12Hr-Oil-Control-Compact---115-Iv-1.jpg'></img>
              <p>Fit Me compact powder.</p>
              <p>₹ 400 </p>
              <p><GrFavorite/> <button>Add to Cart</button></p>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Hero