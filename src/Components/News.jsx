import axios from 'axios';
import {React,useState,useEffect} from 'react'
import './News.css'

function News() {
  const [news, setnews] = useState([]);
  useEffect(() => {
    apicall();
  
  }, [])
   
 async function apicall(){
    var url ='https://newsapi.org/v2/top-headlines?country=in&' +
          'from=2023-01-09&' +
          'sortBy=popularity&' +
          'apiKey=3c8e72323f9248cf9dc3321faaf9bab1';

var req = new Request(url);

const value = await axios.get(url);
console.log(value.data.articles);
setnews(value.data.articles);



  }
  return (
    <>
    <div className="latestnews">
    {news.map((data)=>{
      return(
        <>
        <div className="news">
            <div className="nbox">
                <img src={data.urlToImage}></img>
                <p>{data.title}</p>
                <button><a href={data.url}>Read more</a></button>
            </div>
        </div>
        </>
      )
    })}
    </div>
    </>
  )
}

export default News