import React from 'react'
import {useParams} from "react-router-dom"
function Products() {
    const {product,page,id}=useParams();
  return (
    <div>{product}+{page}+{id}</div>
  )
}

export default Products