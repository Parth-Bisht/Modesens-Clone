import { React } from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import axios from "axios";
import { CloseIcon } from "@chakra-ui/icons";
import "./Login.css";
import loginPic from "../images/login.png";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const SignUp = ({ isShowLogin }) => {
  const { handleAuth } = useContext(AuthContext);
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
          handleAuth();
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
      <div className="containerLogin">
        <div className="left">
          <img src={loginPic} alt="" />
        </div>
        <div className="rightWrapper">
          <div className="right">
            <h2>Create an account</h2>
            <p>Compare across 500+ stores</p>
            <p className="adjust">to find the best price.</p>
            <form className=" formData " onSubmit={handleSubmit}>
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                id="pass"
                placeholder="Password"
                className="password"
                value={formData.password}
                onChange={handleChange}
              />
              <br />
              <label className="radioBtn" htmlFor="radioA">
                <input type="radio" name="radio1" value="A" /> &nbsp; Subscribe
                to personalized sale updates and offers
              </label>
              <br />
              <input className="login" type="submit" value={"Sign Up"} />
            </form>
            <div className="orDiv">
              <div className="firsthr">
                <hr />
              </div>
              <div className="or">or</div>
              <div className="secondhr">
                <hr />
              </div>
            </div>
            <div className="logos">
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
            <a href="#" onClick={handleAuth}>
              Already have an account? Please sign in.
            </a>
            <div className="signinfooter">
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