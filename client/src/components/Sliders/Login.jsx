import { React } from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import style from "./Login.module.css";

export const Login = ({ isShowLogin }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { className, value } = e.target;
    setFormData({
      ...formData,
      [className]: value,
    });
  };
  console.log("formdata", formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    let userArr = JSON.parse(localStorage.getItem("userDatas")) || [];

    formData.id = nanoid();

    if (formData.email !== undefined && formData.password !== undefined) {
      if (formData.email.includes("@")) {
        if (formData.password.length < 8) {
          alert("password must be of 8 digits");
        } else {
          userArr.push(formData);
          console.log(userArr, "arrr");
          localStorage.setItem("userDatas", JSON.stringify(userArr));
        //   handleAuth();
        }
      } else {
        alert("enter a valid email");
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className={`${isShowLogin ? "active" : "notActive"} show`}>
      <div className={style.containerLogin}>
        <div className={style.left}>
          <img src="https://modesens-web15.vercel.app/assets/login.2d1c8a59.png" alt="" />
        </div>
        <div className={style.rightWrapper}>
          <div className={style.right}>
            <h2>Create an account</h2>
            <p>Compare across 500+ stores</p>
            <p className={style.adjust}>to find the best price.</p>
            <form className={style.formData} onSubmit={handleSubmit}>
              <input
                type="text"
                id="email"
                placeholder="Email"
                className={style.email}
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                id="pass"
                placeholder="Password"
                className={style.password}
                value={formData.password}
                onChange={handleChange}
              />
              <br />
              <label className={style.radioBtn} htmlFor="radioA">
                <input type="radio" name="radio1" value="A" /> &nbsp; Subscribe
                to personalized sale updates and offers
              </label>
              <br />
              <input className={style.login} type="submit" value={"Sign Up"} />
            </form>
            <div className={style.orDiv}>
              <div className={style.firsthr}>
                <hr />
              </div>
              <div className={style.or}>or</div>
              <div className={style.secondhr}>
                <hr />
              </div>
            </div>
            <div className={style.logos}>
              <div>
                <img
                  src="https://modesens.com/static/img/login-icon/20210617google.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://modesens.com/static/img/login-icon/20210617facebook.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://modesens.com/static/img/login-icon/20210617apple.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://modesens.com/static/img/login-icon/20210617wechat.svg"
                  alt=""
                />
              </div>
            </div>
            <a href="#" style={{textDecoration:"none",color:"black"}} >
              Already have an account? Please sign in.
            </a>
            <div className={style.signinfooter}>
              By creating an account, I agree to the{" "}
              <a href="##">Terms Of Use</a>
              and the <a href="##">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};