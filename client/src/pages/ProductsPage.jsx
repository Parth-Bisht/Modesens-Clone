import React from 'react';
import styled from 'styled-components';
import DesignerBeauty from '../components/Beauty/DesignerBeauty';
import { FilterDiv } from '../components/Beauty/FilterSection';
import ProductItem from '../components/Items';
import Pagination from '../components/Beauty/Pagination';


const Wrapper= styled.div`
    display:flex;
`
const Left= styled.div`
    width: 25%;
    border-right: 1px solid #f5f5f5;
`
const Right= styled.div`
    width: 75%;
    padding-left:10px;
`

const ProductsPage = () => {
  return (
    <div>
      <Wrapper>
            <Left>
                <FilterDiv/>
            </Left>
            <Right>
                <DesignerBeauty/>
                <Pagination/>
                <ProductItem/>
            </Right>
        </Wrapper>
    </div>
  )
}

export default ProductsPage
