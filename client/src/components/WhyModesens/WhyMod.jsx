import React from "react";
import style from "./whyMod.module.css";
const WhyMod = () => {
  return (
    <div className={style.whyMod_main}>
      <div className={style.head}>
        <h4>
          WE'RE NOT A STORE,
          <br />
          WE'RE YOUR DIGITAL SHOPPING ASSISTANT
        </h4>
        <button>JOIN NOW</button>
      </div>
      <div className={style.video_div}>
        <iframe
          className={style.iframe}
          src="https://www.youtube.com/embed/RKu9FJg3hRY?rel=0&modestbranding=0&autohide=0&showinfo=0&controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className={style.compare_price}>
        <div className={style.left}>
          <h4 className={style.comp_h}>
            Compare Price <span> In One Place</span>
          </h4>
          <p>
            ModeSens allows you to compare prices, availability and product
            images across hundreds of stores and thousands of brands.
          </p>
          <button className={style.join_btn}>JOIN TO SAVE TODAY</button>
        </div>
        <div>
          <img
            src="https://cdn.modesens.com/static/img/20220614Frame1_en.png"
            alt="a"
            className={style.compare_img}
          />
        </div>
      </div>

      <div className={style.compare_price + " " + style.first_know}>
        <div className={style.right}>
          <img
            src="https://cdn.modesens.com/static/img/20210727why-alert.svg"
            alt="a"
            className={style.compare_img}
          />
        </div>

        <div className={style.left + " " + style.know}>
          <h4 className={style.comp_h}>
            {" "}
            <span>Be The </span> First To Know{" "}
          </h4>
          <p>
            Stay up to date by setting up alerts for your favorite items.
            ModeSens will automatically update you on price drops, low-in-stock
            items, new arrivals, back-in-stock items and more.
          </p>
          <br />
          <button className={style.join_btn}>JOIN TO KNOWN FIRST</button>
        </div>
      </div>

      <div className={style.community}>
        <h4 className={style.comp_h}>
          {" "}
          <span>ModeSens </span> Community{" "}
        </h4>
        <p>
          Share your favorite likes, your best posts, and get inspiration from
          others in ModeSens Community period.
        </p>
        <br />
        <button className={style.join_btn}>JOIN MODESENS COMMUNITY</button>
        <img
          src="https://cdn.modesens.com/static/img/20210727why-community.png"
          alt="d"
        />
      </div>

      <div className={style.loyalty}>
        <h4 className={style.comp_h}>
          {" "}
          Loyalty <span>Premium Service </span>
        </h4>
        <p>
          Share your favorite likes, your best posts, and get inspiration from
          others in ModeSens Community period.
        </p>
        <br />
        <div className={style.loy_flex}>
          <div className={style.loy_left}>
            <p>
              Sign up to earn points towards Silver, Gold and Platinum
              memberships. You will get access to ModeSens Concierge providing
              you the best price, service, and a worry-free return experience.
            </p>
            <button>JOIN LOYALTY TODAY</button>
          </div>
          <div className={style.loy_right}>
            <div>
              <img
                src="https://cdn.modesens.com/static/img/20220506bags.svg"
                alt=""
              />
              <p>
                Shop Through ModeSens For Shopper Purchase Protection Plus Earn
                Membership Points
              </p>
            </div>
            <div>
              <img
                src="https://cdn.modesens.com/static/img/20220506car.svg"
                alt=""
              />
              <p>
                At Silver Membership Use ModeSens Concierge For One Click
                Shopping Across Hundreds of Stores
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.community + " " + style.learn}>
        <h4 className={style.comp_h}>
          {" "}
          <span>Want to </span> learn more?{" "}
        </h4>
        <p>Click to read about ModeSens history, vision and services.</p>
        <br />
        <button className={style.join_btn}>ABOUT MODESENS</button>
      </div>
    </div>
  );
};

export default WhyMod;
