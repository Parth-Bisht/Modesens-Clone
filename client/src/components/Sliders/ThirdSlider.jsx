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

const ThirdSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div
      style={{
        width: "95%",
        margin: "auto",
        marginTop: "50px",
        marginBottom: "200px",
      }}
    >
      <Slider {...settings}>
        <div className={Styles.popUp__3}>
          <div>
            <img
              src="https://cdn.modesens.com/banner/20220531-modesens-Sale-364x484.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <p>New to Sale</p>
            <p>Fresh Cut</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className={Styles.popUp__3}>
          <div>
            <img
              src="https://cdn.modesens.com/banner/20220609-modesens-FPillowBags-364x484-F.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <p>ModeSens Fashion Guide</p>
            <p>2022 Summer Trends</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className={Styles.popUp__3}>
          <div>
            <img
              src="https://cdn.modesens.com/banner/20220615-modesens-SummerFashionGuide-364x484.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <p>Smart & Stylish</p>
            <p>Tech Accessories</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className={Styles.popUp__3}>
          <div>
            <img
              src="https://cdn.modesens.com/banner/20220610-modesens-blog-364x484-F.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <p>Less Season and More Sizes</p>
            <p>Blog by SSENCE</p>
            <button>Read Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ThirdSlider;
