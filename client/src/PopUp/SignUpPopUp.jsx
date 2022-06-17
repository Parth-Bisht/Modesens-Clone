import React, { useContext } from "react";
import style from "./Login.module.css";
import { useState } from "react";
import CustomPopup from "./CustomPopUp";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const SignupPopup = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [FormData, setFormData] = useState({});
  const [formData, setformData] = useState({});
  const { isAuth, setIsAuth } = useContext(AuthContext);
  let data;
  const handleChange = (e) => {
    const inputName = e.target.name;

    setFormData({
      ...FormData,
      [inputName]: e.target.value,
    });
  };
  // console.log(FormData)
  const post = () => {
    let arr = [];

    arr.push(FormData);
    localStorage.setItem("RegisteredData", JSON.stringify(arr));
    setIsAuth(true);
    // console.log(arr);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post();
    if (FormData) {
      //    console.log(FormData)
      navigate("/");
      setVisibility(false);
      alert("login success");
    } else {
      alert("Fill the details Correctly");
    }
  };
  const getData = () => {
    data = JSON.parse(localStorage.getItem("RegisteredData")) || [];
  };
  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(formData);
    getData();
    // console.log(data);
    if (data.length > 0) {
      if (
        data[0].email === formData.email &&
        data[0].password === formData.password
      ) {
        navigate("/");
        setIsAuth(true);
      } else if (formData.email !== data[0].email) {
        alert("User Not Found, Please Sign in First");
        navigator("/");
        setVisibility(false);
      } else if (formData.password !== data[0].password) {
        alert("Wrong Password, Try again");
      }
    } else {
      alert("First Sign in");
      navigate("/join");
      setVisibility(false);
    }
  };

  const handleChangeLogin = (e) => {
    let inputName = e.target.name;
    setformData({ ...formData, [inputName]: e.target.value });
  };
  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  return (
    <>
      {isAuth ? (
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/98902869?v=4"
            alt="jjj"
          />
        </div>
      ) : (
        <div style={{ cursor: "pointer" }}>
          <img
            onClick={() => setVisibility(!visibility)}
            className={style.signup_btn}
            src="https://cdn.modesens.com/static/img/20200612account_b2.svg"
            alt="k"
          />
        </div>
      )}

      <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        className={style.main}
      >
        <div className={style.containerLogin}>
          <div className={style.left}>
            <img
              src="https://modesens-web15.vercel.app/assets/login.2d1c8a59.png"
              alt=""
            />
          </div>
          {login ? (
            <div className={style.rightWrapper}>
              <div className={style.right}>
                <h2>Login to your account</h2>
                <p>Compare across 500+ stores</p>
                <p className={style.adjust}>to find the best price.</p>
                <form className={style.formData} onSubmit={handleLogin}>
                  <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    name="email"
                    className={style.email}
                    // value={formData.email}
                    onChange={handleChangeLogin}
                    required
                  />
                  <input
                    type="password"
                    id="pass"
                    name="password"
                    placeholder="Password"
                    className={style.password}
                    // value={formData.password}
                    onChange={handleChangeLogin}
                    required
                  />
                  <br />

                  <input
                    className={style.login}
                    type="submit"
                    value={"LOG IN"}
                  />
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
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "black" }}
                  onClick={() => setLogin(false)}
                >
                  Don't have an account? Please Sign up
                </a>
              </div>
            </div>
          ) : (
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
                    name="email"
                    className={style.email}
                    // value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="password"
                    id="pass"
                    placeholder="Password"
                    className={style.password}
                    name="password"
                    // value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <br />
                  <label className={style.radioBtn} htmlFor="radioA">
                    <input type="radio" name="radio1" value="A" required />{" "}
                    &nbsp; Subscribe to personalized sale updates and offers
                  </label>
                  <br />
                  <input
                    className={style.login}
                    type="submit"
                    value={"Sign Up"}
                  />
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
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "black" }}
                  onClick={() => setLogin(true)}
                >
                  Already have an account? Please sign in.
                </a>
                <div className={style.signinfooter}>
                  By creating an account, I agree to the{" "}
                  <a href="##">Terms Of Use</a>
                  and the <a href="##">Privacy Policy</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </CustomPopup>
    </>
  );
};

export default SignupPopup;
