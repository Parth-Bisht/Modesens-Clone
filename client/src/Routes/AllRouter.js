import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Products from '../products/Products'
import Product from '../products/Product'
import SingleProduct from '../products/SingleProduct'
function AllRouter() {
  return (
    <div>
 <Routes>
        <Route path="/" element={<SingleProduct/>}> </Route>

        <Route path="/:product" element={<SingleProduct/>}></Route>
          <Route path="/:product/:page" element={<Product></Product>}></Route>
           <Route path='/:product/:page/:id' element={<Products></Products>}></Route>
          
        </Routes>
    </div>
  )
}

export default AllRouter