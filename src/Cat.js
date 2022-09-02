import React,{useState} from 'react'

import './style.css'
export default function Cat() {
    const [imgurl,seturl]=useState("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg");


   const callimg=()=>{
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(res=>res.json())
        .then(data=>seturl(data[0].url))
    }
    
  return (
    <div>
        <div className='container'>
            <div className='box'>
                <h2>Enjoy the kitty 😺</h2>
                <img src={imgurl}></img><br></br>
                <button onClick={()=>callimg()}> Click  me</button>
            </div>
        </div>
    </div>
  )
}
