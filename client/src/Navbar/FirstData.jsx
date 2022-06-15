import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import SecondData from './SecondData';
function FirstData({r}) {
    const [menu,setMenu]=useState("");
    let secData =["SHOPPING","CLOTHING","BAGS","SHOES","ACCEESSORIES","BEAUTY","SALES","PRE OWNED","OCCASIONS"];
  
  return (
    <div>
        {secData.map((el,i)=>{
            let a = el.toLowerCase();
            return <div key ={i} className="secData"><a href={`/${r}/${a}`} onClick={(e)=>{
              e.preventDefault()
             setMenu(<SecondData f={r} s={a}></SecondData>)
            }}>{el}</a></div>
        })}
        <div>{menu}</div>
    </div>
  )
}

export default FirstData