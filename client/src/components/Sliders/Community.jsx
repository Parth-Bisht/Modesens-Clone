import React from "react";
import styled from "styled-components";
import ItemsCarousel from "react-items-carousel";
import { communityPosts } from "./TrendData";
const noOfItems = 10;
const noOfCards = 4;
const chevronWidth = 80;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 1200px;

  margin: 0 auto;
  margin-bottom: 100px;
`;

const Container = styled.div`
  ${"" /* border: .1px solid #cdcdcd; */}
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

const SlideItem = styled.img`
  height: 100%;
  width: 100%;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: 1px solid #868686;
`;

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

const carouselItems = communityPosts.map((e) => (
  <Container className="slideDiv">
    <div
      style={{
        display: "flex",
        border: "none",
        justifyContent: "center",
        padding: "20px 8px",
        height: "100%",
        width: "70%",
        margin: "auto",
      }}
    >
      <SlideItem style={{ width: "100%" }} src={e.src} />
    </div>
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
          <div style={{ width: "35%", alignItems: "center" }}>
            {" "}
            <hr />
          </div>
          <h1>Community Posts</h1>
          <div style={{ width: "35%", alignItems: "center" }}>
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
