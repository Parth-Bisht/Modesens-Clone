import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Styles from "./community.module.css";

const communitySlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };
  return (
    <div style={{ width: "95%", margin: "auto", marginTop: "28px" }}>
      <Slider {...settings}>
        <div className={Styles.popUp_2}>
          <img
            src={require("./Images/comm1.png")}
            alt=""
            height="100%"
            width="100%"
          />
        </div>
        <div className={Styles.popUp_2}>
          <img
            src={require("./Images/comm2.png")}
            alt=""
            height="100%"
            width="100%"
          />
        </div>
      </Slider>
    </div>
  );
};

export default communitySlider;
