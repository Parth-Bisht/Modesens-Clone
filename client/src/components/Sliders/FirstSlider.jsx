import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import Styles from "./FirstSlider.module.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowRight
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        height: "2.5rem",
        width: "2.5rem",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowLeft
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        height: "2.5rem",
        width: "2.5rem",
      }}
      onClick={onClick}
    />
  );
}

const FirstSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div style={{ width: "95%", margin: "auto", marginTop: "20px" }}>
      <Slider {...settings}>
        <div className={Styles.popUp}>
          <img
            src="https://modesens.com/banner/12477/getimg/?img=%2Fbanner%2F20220615-modesens-SSENSE-1140x400-EN.jpg"
            alt=""
            height="100%"
            width="100%"
            // style={{ margin: "auto", marginTop: "15px" }}
          />
        </div>
        <div className={Styles.popUp}>
          <img
            src="https://modesens.com/banner/11846/getimg/?img=%2Fbanner%2F20220516-modesens-SS22-SALE-1140x400-EN.jpg"
            alt=""
            height="100%"
            width="100%"
            // style={{ margin: "auto", marginTop: "15px" }}
          />
        </div>
        <div className={Styles.popUp}>
          <img
            src="https://modesens.com/banner/12406/getimg/?img=%2Fbanner%2F20220608-modesens-Home-1140x400-H.jpg"
            alt=""
            height="100%"
            width="100%"
            // style={{ margin: "auto", marginTop: "15px" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default FirstSlider;
