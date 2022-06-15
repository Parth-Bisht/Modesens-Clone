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
    <div style={{ width: "95%", margin: "auto", marginTop: "50px" }}>
      <Slider {...settings}>
        <div className={Styles.popUp__3}>
          <div>
            <img
              src="https://cdn.modesens.com/banner/20220309-modesens-DesignFurniture-364x484.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <p>Art And Comfort</p>
            <p>Design Furniture</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className={Styles.popUp__3}>
          <div>
            <img
              src="https://cdn.modesens.com/banner/20220309-modesens-PetAccessories-364x484.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <p>Four-Legged Style</p>
            <p>Pet Accessories</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className={Styles.popUp__3}>
          <div>
            <img
              src="https://cdn.modesens.com/banner/20220309-modesens-TechAccessories-364x484.jpg"
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
              src="https://cdn.modesens.com/banner/20220309-modesens-HomeFragrance-364x484.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <p>The Scents Of Home</p>
            <p>Home Fragrance</p>
            <button>SHOP NOW</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ThirdSlider;
