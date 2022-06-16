import styled from "styled-components";
import { useEffect, useState } from "react";
import CommunityPost from "../components/Sliders/Community";
import Bottom from "../components/Footer/Bottom";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  padding: 100px 0;
  margin: auto;
`;
const Path = styled.h5`
  letter-spacing: 0.7px;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
`;
const PicInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const LeftDiv = styled.div`
  width: 110px;
`;
const Img = styled.img`
  vertical-align: middle;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  transition: all 0.5s ease;
`;
const SliderWrapper = styled.div`
  width: 110px;
  height: 360px;
  overflow: hidden;
`;
const SideImgDiv = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin: 4px 0;
  width: 100%;
  height: 30%;
  opacity: 0.6;
  transition: all 0.5s ease;
  border: 1px solid gray;
  overflow: hidden;
  &:hover {
    opacity: 1;
  }
  &:hover ${Img} {
    transition: all 0.5s ease;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

const SideImgArrow = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  width: 110px;
  height: 20px;
  background: rgba(0, 0, 0, 0)
    url("https://modesens.com/static/img/slidertop_hover.svg") no-repeat scroll
    50% 50% / 15% padding-box border-box;
  margin: 2px;
`;
const CenterDiv = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 503px;
  height: 350px;
  padding: 10px;
`;
const ImgDiv = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 533px;
  height: 350px;
  padding: 10px;
`;

const LogoDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  position: absolute;
  top: 10px;
  right: 16px;
  width: 30px;
  height: 70px;
`;
const RightDiv = styled.div`
  display: block;
  position: relative;
  width: 505px;
  padding: 0 35px;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 19px;
  letter-spacing: 1px;
`;
const Desc = styled.div`
  font-size: 15px;
  padding: 10px 0;
  font-weight: 500;
`;
const PriceDiv = styled.div`
  display: flex;
  max-width: 55%;
  justify-content: space-between;
  margin: 10px 0;
`;
const Price = styled.div`
  font-weight: 500;
  font-size: 18px;
`;
const PriceAlert = styled.div`
  color: gray;
  width: 50%;

  &:hover {
    color: black;
    text-decoration: underline;
    cursor: pointer;
  }
`;
const AdditionalDesc = styled.div`
  padding: 4px 0;
  text-decoration: underline;
  font-weight: 500;
`;
const BuyButton = styled.button`
  background-color: black;
  color: white;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  font-weight: bolder;
  letter-spacing: 1px;
  word-spacing: 2px;
  margin: 10px 0;
  cursor: pointer;
  border: none;
`;
const PointsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2px 0;
  width: 100%;
`;
const Points = styled.div`
  font-weight: 500;
  font-size: 15px;
`;
const LearnMore = styled.u`
  color: gray;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const SingleProduct = () => {
  var currentLocation = window.location.pathname;
  const location = "Home" + currentLocation;
  const loc = location.split("/");

  const locat = `${loc[0]}/${loc[1]}`;
  // console.log(locat);

  const [user, setUser] = useState([]);
  useEffect(() => {
    const userer = JSON.parse(localStorage.getItem("IndData"));
    setUser(userer);
  }, []);

  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <Path>{locat}</Path>
          <PicInfo>
            <LeftDiv>
              <SliderWrapper>
                <SideImgDiv>
                  <Img src={user.image_url} />
                </SideImgDiv>
                <SideImgDiv>
                  <Img src={user.image_url} />
                </SideImgDiv>
                <SideImgDiv>
                  <Img src={user.image_url} />
                </SideImgDiv>
                <SideImgDiv>
                  <Img src={user.image_url} />
                </SideImgDiv>
                <SideImgDiv>
                  <Img src={user.image_url} />
                </SideImgDiv>
              </SliderWrapper>
              <SideImgArrow />
            </LeftDiv>
            <CenterDiv>
              <ImgDiv>
                <Img src={user.image_url} />
              </ImgDiv>

              <LogoDiv>
                <Img src="https://modesens.com/static/img/20210601heart_hover.svg" />
                <Img src="https://cdn.modesens.com/static/img/prd_share1.svg" />
              </LogoDiv>
            </CenterDiv>
            <RightDiv>
              <Title>{user.brand}</Title>
              <Desc>{user.title}</Desc>
              <PriceDiv>
                <Price>
                  ₹{user.price} - ₹{user.offprice}
                </Price>
                <PriceAlert
                  onClick={() => {
                    alert("Your Alert has been set");
                  }}
                >
                  Set Alert
                </PriceAlert>
              </PriceDiv>
              <AdditionalDesc>Shop From 8 Stores</AdditionalDesc>
              <a href={user.href} target="_blank">
                <BuyButton>SELECT STORE TO BUY</BuyButton>
              </a>
              <PointsDiv>
                <Points>{user.offer} </Points> &nbsp; &nbsp;
                <LearnMore> Learn more</LearnMore>
              </PointsDiv>
            </RightDiv>
          </PicInfo>
        </InnerWrapper>
      </Wrapper>
      <CommunityPost />
      <Bottom />
    </Container>
  );
};

export default SingleProduct;
