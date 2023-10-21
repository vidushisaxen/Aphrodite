import React from 'react'
import './Viewbook.css'
import { useLocation } from 'react-router-dom'

function Viewbook() {
const location = useLocation();

  return (
    <>
    <div className="cardcontainer">
        <div className="item1">
            <img src={location.state.ima}></img>
        </div>
        <div className="item2">
            <h1>{location.state.tit}.</h1>
        <p>{location.state.sub}.</p>
        <span><p1>Rs.{location.state.pri}</p1>
        <p2><strike>Rs.700</strike></p2>
        </span>
        
        
        
        </div>
        <div className="item3">
          <label>Address</label>
          <input placeholder='Enter your delivery address'></input>
          <span>
            <p>Shipping charges.</p>
            <p>Free</p>
          </span>
          <button>Add to cart</button>
          <button className='buy'>Buy now</button>
        </div>
    </div>
    </>
  )
}

export default Viewbook