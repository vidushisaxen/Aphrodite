import {React, useState,useEffect} from 'react'
import axios from 'axios';
import {MdFavoriteBorder} from 'react-icons/md';
import './All.css';
import { AiFillStar ,AiOutlineStar} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';



function All() {
    const [productdata, setproductdata] = useState([]);
    async function apicall(){
      const arr=await axios.get("https://api.itbook.store/1.0/new");
      console.log(arr.data.books);
      console.table(arr.data.books[0]);
      setproductdata(arr.data.books);
      
    }
    useEffect(() => {
     apicall()
    
    }, [])
    const navigate = useNavigate();
    function viewbook(image,title,subtitle,price){
        navigate('/View',{state:{id:1,ima:image,tit:title,sub:subtitle,pri:price}})
       console.log(image);   
   
    }
    
    return (
     <>
     <div className="bigcontainer">
        {
            productdata.map((info)=>{
                return(
                    <>
                     <div className="bookcard">
            <div className="box1">
          <img src={info.image}></img>
            </div>
            <div className="box2">
                <span>
                    <h1>{info.title}</h1>
                    <h2>₹ {info.price.substring(1,info.price.length-1)}</h2>
                </span>
                <p1>{info.subtitle}</p1>
            <span>
            <AiFillStar color='orange' size={20}/>
            <AiFillStar color='orange' size={20}/>
            <AiOutlineStar color='orange' size={20}/>
            <AiOutlineStar color='orange' size={20}/>
            <AiOutlineStar color='orange' size={20}/>
            </span>
            <div>
                <button> Add to cart</button>
                <button onClick={()=>viewbook(info.image,info.title,info.subtitle,info.price)}>View book</button>
            </div>
            
            </div>
        </div>
                    </>
                )
            })
        }
     </div>
     
     
     </>
    )
}

export default All