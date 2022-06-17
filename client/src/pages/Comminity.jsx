import React, { useState } from "react";
// import { Link } from "react-router-dom";
import style from "../components/community/community.module.css";
import CommunityData from "../components/community/CommunityData";
import CommunitySlider from "../components/community/CommunitySlider";

import styled from "styled-components";
const Tab = styled.button`
  font-size: 22px;
  padding: 10px 20px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  transition: all 0.4s;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid crimson;
    opacity: 1;
    transition: all 0.4s;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  transition: all 0.4s;
`;
const types = ["Following", "Discover"];

const Community = () => {
  const [active, setActive] = useState(types[1]);

  console.log(active);
  return (
    <>
      <CommunitySlider />
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

        {active === "Discover" ? <CommunityData /> : "Hello"}
      </div>
    </>
  );
};

export default Community;
