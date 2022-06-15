import React,{useState} from 'react'
import {Link} from 'react-router-dom';

import Data from './Data'
function Navbar() {
 const[menu,setMenu]=useState("")
  return (
    <div>
        <Link to='women' onClick={()=>{
            let d="women";
           setMenu(<Data r={d}/>)
        }}>WOMEN </Link>
        <Link to='men'
        onClick={()=>{
            let d="men";
           setMenu(<Data r={d}/>)
        }}
        >MEN</Link>
        <Link to='beauty'
        onClick={()=>{
            let d="beauty";
           setMenu(<Data r={d}/>)
        }}
        >BEAUTY</Link>
        <Link to='kids'
        onClick={()=>{
            let d="kids";
           setMenu(<Data r={d}/>)
        }}
        >KIDS</Link>
        <Link to='home'
        onClick={()=>{
            let d="home";
           setMenu(<Data r={d}/>)
        }}
        >HOME</Link>
        <Link to='offers'
        onClick={()=>{
            let d="offers";
           setMenu(<Data r={d}/>)
        }}
        >OFFERS</Link>
        <Link to='designers'
        onClick={()=>{
            let d="designers";
           setMenu(<Data r={d}/>)
        }}
        >DESIGNERS</Link>
        <Link to='community'
        onClick={()=>{
            let d="community";
           setMenu(<Data r={d}/>)
        }}
        >COMMUNITY</Link>
        <Link to='why'
        onClick={()=>{
            let d="why";
           setMenu(<Data r={d}/>)
        }}
        >WHY MODESENS</Link>
<div>{menu}</div>
       
    </div>
    
  )
}

export default Navbar