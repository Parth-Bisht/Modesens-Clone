import React from 'react'
import {useParams} from "react-router-dom"

function Product() {
    const {product,page}=useParams();
  return (
    <div>{product}{page}</div>
  )
}

export default Product