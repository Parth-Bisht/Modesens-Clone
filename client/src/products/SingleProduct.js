import React from 'react'
import {useParams} from "react-router-dom"
function SingleProduct() {
    const {product }=useParams();
  return (
    <div>{product}</div>
  )
}

export default SingleProduct