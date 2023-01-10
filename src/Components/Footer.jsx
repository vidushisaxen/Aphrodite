import React from 'react'
import './Footer.css';


function Footer() {
  return (
    <>
    <div className='topbrands'>
    <div className='line'></div>
    <h1>Stay in touch</h1>
    <div className="line"></div>
    </div>
    <div className='txt'>
    <p>Get the latest tips in your inbox.</p></div>
    <div className="sub">
    <input type={'email'} placeholder="        Enter your email"></input>
    <button>Subscribe</button></div>
    <div className="footer">
        <div className="icons">
        <img src='Aphrodite.png'></img>
            <div className="ficon"><img src='facebook.png'></img></div>
            <div className="ficon"><img src='twitter.png'></img></div>
            <div className="ficon"><img src='pinterest.png'></img></div>
            <div className="ficon"><img src='mail.png'></img></div>
            <div className="ficon"><img src='linkedin.png'></img></div>
        </div>
        <div className="fline"></div>
            <div className="ftext">
            <div className="fitems">
                <div className='flist'> Products
                <ul>
                    <li>Electronic gadgets</li>
                    <li>Accesories</li>
                    <li>Makeup products</li>
                    </ul></div>
                <div className='flist'> Resources
                <ul>
                    <li>Articles</li>
                    <li>Blogs</li>
                    <li>Research</li>
                    </ul></div>
                <div className='flist'>Company
                <ul>
               <li>Terms and conditions</li>
               <li>Privacy Policy</li>
                    </ul></div>
            </div>
            <p>Call us at:<br></br>
        (+91)00000-00000<br></br>
        Mon-Sat(8am-8pm)
        </p>
        </div>
        
        <div className="fline"></div>
        <p className='cpy'>
            Copyright 2022 Aphrodite . All rights reserved.
        
        <br></br></p>
    </div>
    </>
  )
}

export default Footer