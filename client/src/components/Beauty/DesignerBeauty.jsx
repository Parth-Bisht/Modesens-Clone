import React from 'react';
import styled from "styled-components";

const DesignerBeauty = () => {
    const Header= styled.h1`
        font-size: 24px;
        font-family: 'Open Sans', sans-serif;
    `
    const SubHead= styled.p`
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    text-align: left;

    `
  return (
    <div>
       
            <Header>Designer Beauty</Header>
            <SubHead>Shop designer beauty with price comparison across 500+ stores in one place. Discover the latest designer beauty at ModeSens.</SubHead>
        
    </div>
  )
}

export default DesignerBeauty