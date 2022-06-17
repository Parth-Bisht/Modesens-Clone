import React from "react";
import styled from "styled-components";
import ItemsCarousel from "react-items-carousel";
import { trending } from "./TrendData";
const noOfItems = 7;
const noOfCards = 4;
const chevronWidth = 80;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 100px;
  position: relative;
`;
const Button = styled.button`
  border: 1px solid black;
  margin: 0 auto;
  /* padding: 5px 40px; */
  width: 23%;
  font-weight: bold;
  position: absolute;
  display: none;
  background: rgba(255, 255, 255, 0.6) none repeat scroll 0% 0% / auto
    padding-box border-box;
  z-index: 99;
`;
const Container = styled.div`
  border: 0.1px solid #cdcdcd;
  &:hover ${Button} {
    display: block;
  }
`;

const SlideItem = styled.img`
  height: 260px;
  width: 80%;
  background: #eee;
  display: flex;

  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
const HeartDIv = styled.div`
  position: absolute;
  left: 88%;
  bottom: 93%;
  /* top: ; */
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
  & span {
    font-size: 12px;
    color: gray;
  }
  & h6 {
    font-size: 13px;
    font-weight: bold;
  }
`;
const HeartImg = styled.img``;
const ShowMore = styled.a`
  width: 200px;
  color: #333;
  background-color: #fff;
  border-color: #8e8e8e;

  padding: 13px 15px 10px;
  line-height: 1;
  font-size: 1rem;
  font-weight: 400;
  color: #212529;
  text-transform: uppercase;
  text-align: center;
  alignitems: center;
  border: 1px solid #333;
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    background: #333;
    color: #fff;
  }
`;
const carouselItems = trending.map((e) => (
  <Container className="slideDiv">
    <HeartDIv>
      <HeartImg src="https://cdn.modesens.com/static/img/20210601heart.svg" />
    </HeartDIv>
    <div
      style={{
        display: "flex",
        border: "none",
        justifyContent: "center",
        padding: "20px 8px",
      }}
    >
      <SlideItem style={{ width: "100%" }} src={e.src} />
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button>Quick View</Button>
    </div>
    <TextDiv className="textDiv">
      <h5
        style={{
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {e.title}
      </h5>
      <p style={{ fontSize: "12px", textAlign: "center", color: "gray" }}>
        {e.sub}
      </p>
      <h6>{e.rate}</h6>
      <span>{e.st}</span>
    </TextDiv>
  </Container>
));

export default class AutoPlayCarousel extends React.Component {
  state = {
    activeItemIndex: 0,
  };

  tick = () =>
    this.setState((prevState) => ({
      activeItemIndex:
        (prevState.activeItemIndex + 1) % (noOfItems - noOfCards + 1),
    }));

  onChange = (value) => this.setState({ activeItemIndex: value });

  render() {
    return (
      <Wrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ width: "40%", alignItems: "center" }}>
            {" "}
            <hr />
          </div>
          <h1>Trending Now</h1>
          <div style={{ width: "40%", alignItems: "center" }}>
            {" "}
            <hr />
          </div>
        </div>
        <ItemsCarousel
          gutter={12}
          numberOfCards={noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          rightChevron={
            <button
              style={{
                border: "none",
                background: "white",
                fontSize: "35px",
                fontWeight: "100",
              }}
            >
              {" "}
              {"→"}
            </button>
          }
          leftChevron={
            <button
              style={{
                border: "none",
                background: "white",
                fontSize: "35px",
                fontWeight: "100",
              }}
            >
              {"←"}
            </button>
          }
          chevronWidth={chevronWidth}
          outsideChevron
          children={carouselItems}
        />
        <br />
        <br />
        <div style={{ width: "200px", margin: "auto" }}>
          <ShowMore>Show More</ShowMore>
        </div>
      </Wrapper>
    );
  }
}
