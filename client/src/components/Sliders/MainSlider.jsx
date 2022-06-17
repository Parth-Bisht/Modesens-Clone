import React from "react";
import FirstSlider from "./FirstSlider";
import Styles from "./FirstSlider.module.css";
import SecondSlider from "./SecondSlider";
import ThirdSlider from "./ThirdSlider";

const MainSlider = () => {
  return (
    <>
      <FirstSlider />
      <p className={Styles.features}>Featured Partners</p>
      <p className={Styles.disc}>
        Compare across our 500+ partner stores to find the products you want at
        the best price.
      </p>
      <SecondSlider />
      <div className={Styles.hrDiv}>
        <hr />
        <p>Special Offers</p>
      </div>
      <ThirdSlider />
    </>
  );
};

export default MainSlider;
