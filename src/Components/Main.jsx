import React from 'react'
import './Main.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {MdFavoriteBorder} from 'react-icons/md';
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
    <div className="hero">
        <div className="carousel1">
    <CarouselProvider
            naturalSlideWidth={150}
            naturalSlideHeight={100}
            totalSlides={3}
            isPlaying  = {true}
            > 	
  <Slider>
  <Slide index={0}><img src="https://i.pinimg.com/originals/7c/e0/b8/7ce0b8145c2a8150f4b971d18fc48d5c.jpg"></img></Slide>
  <Slide index={1}><img src="https://img.freepik.com/free-vector/new-collection-banner-template_1361-1325.jpg?w=2000"></img></Slide>
  <Slide index={2}><img src="https://thumbs.dreamstime.com/b/flat-line-design-website-banner-e-commerce-modern-vector-illustration-web-marketing-print-material-68581557.jpg"></img></Slide>
</Slider>

</CarouselProvider>
</div>
</div>
    <div className='topbrands'>
    <h1>Top picks</h1>
    </div>
    <div className='bcards1'>
    <div className="brandcard">
    <img src='https://i.pinimg.com/originals/cb/31/87/cb318789eecdbe77c9375cf78ba0f25e.jpg'></img>
    <p>Men's products</p>
    <div className="bcardtxt">
    <Link to="/men" className='links'><button>View collections</button></Link>
    <MdFavoriteBorder/>
    </div>
    </div>
    <div className="brandcard">
    <img src='https://i.pinimg.com/originals/b4/6e/b7/b46eb746f7664083877a42aa05062dfe.jpg'></img>
    <p>Womens' products</p>
    <div className="bcardtxt">
    <Link to="/women" className='links'><button>View collections</button></Link>
    <MdFavoriteBorder/>
    </div>
    </div>
    
    <div className="brandcard">
    <img src='https://i.pinimg.com/originals/c7/28/58/c72858992482c70d5ec3a585eec352ed.png'></img>
    <p>Electronic gadets</p>
    <div className="bcardtxt">
    <Link to='/electronic' className='links'><button>View collections</button></Link>
    <MdFavoriteBorder/>
    </div>
    </div>
    <div className="brandcard">
    <img src='https://i.ytimg.com/vi/eAhI2_UsMXY/maxresdefault.jpg'></img>
    <p>Jewellery</p>
    <div className="bcardtxt">
    <Link to='/accessories' className='links'><button>View collections</button></Link>
    <MdFavoriteBorder/>
    </div>
    </div>
    
    
    </div>



    <div className='topbrands'>
    <h1>Shop by brands</h1>
    </div>
    <div className='dcards'>
        <div className='dealcard'>
            <img src='https://images.puma.net/images/fn/~global~others~logosforexternalpartners~PUMA-clothes-shoes-accessories-for-women-men-kids.jpg'></img>
        </div>
        <div className='dealcard'>
            <img src='https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg'></img>
        </div>
        <div className='dealcard'>
            <img src='https://1000logos.net/wp-content/uploads/2017/03/Lenovo-Logo-2003.png'></img>
        </div>
        <div className='dealcard'>
            <img src='https://i.pinimg.com/474x/7d/8c/6c/7d8c6c0a85b2cfbb9d2785ea6dd18083.jpg'></img>
        </div>
        <div className='dealcard'>
            <img src='https://static.dezeen.com/uploads/2019/02/new-zara-logo-col-2.jpg'></img>
        </div>
        <div className='dealcard'>
            <img src='https://1000logos.net/wp-content/uploads/2020/07/SUGAR-Cosmetics-Logo.jpg'></img>
        </div>
    </div>







    <div className='topbrands'>
    <h1>Deals of the day</h1>
    </div>
    <div className='deal'>
        <div className="dealoftheday">
            <p1>Sale! </p1>
        <h2>Ladies bag</h2>
        <p2>$500</p2><p3>$300</p3>
        <p>Choose from a wide range of Handbags For Ladies.</p>
        <button>Shop Now</button>
        </div>
        <img src='https://johnlewis.scene7.com/is/image/JohnLewis/237192513?$rsp-pdp-port-320$'></img>
    </div>
    
    <div className='topbrands'>
    <h1>Trending products</h1>
    </div>
    <div className="trendingproducts">
    <div className="trending">
            <div className="tbox1">
                <img src='https://m.media-amazon.com/images/I/71QpJCWJb1L._UX569_.jpg'></img>
                <p>Backpacks</p>
                <span>
                <p>$100</p>
                <button>Add to cart</button>
                </span>
            </div>
        </div>

        <div className="trending">
            <div className="tbox1">
                <img src='https://rukminim1.flixcart.com/image/416/416/kk4c13k0/eye-shadow/l/i/f/70-exotic-35-colors-eyeshadow-palette-ronzille-original-imafzjbjgnfppu3h.jpeg?q=70'></img>
                <p>Makeup products</p>
                <span>
                <p>$200</p>
                <button>Add to cart</button>
                </span>
            </div>
        </div>

        <div className="trending">
            <div className="tbox1">
                <img src='https://m.media-amazon.com/images/I/61X1b09mK0L._SL1500_.jpg'></img>
                <p>Water bottles</p>
                <span>
                <p>$150</p>
                <button>Add to cart</button>
                </span>
            </div>
        </div>

        <div className="trending">
            <div className="tbox1">
                <img src='https://m.media-amazon.com/images/I/61q73U+W3SL._SX425_.jpg'></img>
                <p>Homedecor</p>
                <span>
                <p>$300</p>
                <button>Add to cart</button>
                </span>
            </div>
        </div>

        <div className="trending">
            <div className="tbox1">
                <img src='https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg'></img>
                <p>Shoes</p>
                <span>
                <p>$350</p>
                <button>Add to cart</button>
                </span>
            </div>
        </div>

        <div className="trending">
            <div className="tbox1">
                <img src='https://m.media-amazon.com/images/I/81yYBcbD-0L._SL1500_.jpg'></img>
                <p>Quilts</p>
                <span>
                <p>$700</p>
                <button>Add to cart</button>
                </span>
            </div>
        </div>
        </div>

        <div className='topbrands'>
    <h1>Latest News</h1>
    </div>
    <div className="latestnews">
    <div className="news">
            <div className="nbox">
                <img src='https://etimg.etb2bimg.com/photo/83942033.cms'></img>
                <p>Indian online fashion industry grows 51% in FY21: Report</p>
                <button><a href="https://retail.economictimes.indiatimes.com/news/apparel-fashion/apparel/indian-online-fashion-industry-grows-51-in-fy21-report/83942020">Read more</a></button>
            </div>
        </div>

        <div className="news">
            <div className="nbox">
                <img src='https://etimg.etb2bimg.com/photo/77034228.cms'></img>
                <p>Huge export opportunities for apparel players in Colombia.</p>
                <button><a href="https://retail.economictimes.indiatimes.com/news/apparel-fashion/apparel/huge-export-opportunities-for-apparel-players-in-colombia-aepc/81171953">Read more</a></button>
            </div>
        </div>

        <div className="news">
            <div className="nbox">
                <img src='https://etimg.etb2bimg.com/photo/78676753.cms'></img>
                <p>Unsuited to new era? Fate of formal fashion hangs by a thread.</p>
                <button><a href="https://retail.economictimes.indiatimes.com/news/apparel-fashion/apparel/unsuited-to-new-era-fate-of-formal-fashion-hangs-by-a-thread/78676609">Read more</a></button>
            </div>
        </div>

        </div>

    </>
  )
}

export default Main