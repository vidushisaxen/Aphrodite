import React from 'react'
import './Navbar.css';
import {AiFillHome} from 'react-icons/ai';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {BiSearchAlt2} from 'react-icons/bi';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function Navbar() {
  return (
    <>
    <div className='top'><p><marquee> Get 50% off on your first three orders! Order Now!</marquee></p></div>
    <div className='navbar'>
        <img src='https://cdn.dribbble.com/users/606206/screenshots/2034939/b-logo-round-light-dribbble.png'></img>
        <h1> Beautify</h1>
        {/* <p2><AiFillHome/><pre>  </pre>Home</p2> */}
        <p2>Home</p2>
        <p1>About</p1>
        <p1>Category</p1>
        <p1>Deals</p1>
        <span><input type="text" placeholder='    Search'></input><button><BiSearchAlt2/></button>
        <p1><CgProfile size={27} className='ricon'/></p1>
        <p1><AiOutlineShoppingCart size={27} className='ricon'/></p1></span>   
    </div>
    <div className='hero'>
    <CarouselProvider
            naturalSlideWidth={150}
            naturalSlideHeight={100}
            totalSlides={2}
            isPlaying  = {true}
            > 	
  <Slider>
  <Slide index={0}><img src="https://img.freepik.com/free-vector/realistic-beauty-offer-sale-banner-template_52683-94984.jpg?w=2000"></img></Slide>
  <Slide index={1}><img src="https://storage.pixteller.com/designs/designs-images/2020-12-21/06/flash-sale-makeup-banner-1-5fe0c6b084377.png"></img></Slide>
</Slider>

</CarouselProvider>
    </div>

    </>
  )
}

export default Navbar