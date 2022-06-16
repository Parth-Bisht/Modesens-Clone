import React, { useState } from "react";
// import { Link } from "react-router-dom";
import style from "./community.module.css";
import CommunityData from "./CommunityData";
// import Communitydata from "./CommunityData";

import styled from 'styled-components';
const Tab = styled.button`
  font-size: 22px;
  padding: 10px 20px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid crimson;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ['Following', 'Discover'];


       


const Community = () => {

    const [active, setActive] = useState(types[0]);
   
console.log(active);
  return (
          <>
          <div className="container">
<div className={style.community_bar_links}>

   <ButtonGroup>
          {types.map((type, index) => (
            <Tab
              key={index}
              active={active === type}
              onClick={() => setActive(type)}
            >
              {type}
            </Tab>
          ))}
        </ButtonGroup>
          
        </div>

{
    active==='Discover'?  <CommunityData/> : 'Hello'
}
         

          </div>
          </>
       

  );
};

export default Community;