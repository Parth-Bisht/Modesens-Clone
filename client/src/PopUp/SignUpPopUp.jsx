import React from "react";
import style from "./Login.module.css";
import { useState } from "react";
import CustomPopup from "./CustomPopUp";
import { useNavigate } from "react-router";

const SignupPopup = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [visibility, setVisibility] = useState(false);
  
  const popupCloseHandler = (e) => {
    setVisibility(e);
  };


  return (
    <>
      <div>
        <img
          onClick={() => setVisibility(!visibility)}
          className={style.signup_btn}
          src="https://cdn.modesens.com/static/img/20200612account_b2.svg"
          alt="k"
        />
      </div>

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
                  <form className={style.formData}>
                    <input
                      type="text"
                      id="email"
                      placeholder="Email"
                      className={style.email}
                      // value={formData.email}
                      // onChange={handleChange}
                    />
                    <input
                      type="password"
                      id="pass"
                      placeholder="Password"
                      className={style.password}
                      // value={formData.password}
                      // onChange={handleChange}
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
                    onClick={()=>setLogin(false)}
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
                <form className={style.formData}>
                  <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    className={style.email}
                    // value={formData.email}
                    // onChange={handleChange}
                  />
                  <input
                    type="password"
                    id="pass"
                    placeholder="Password"
                    className={style.password}
                    // value={formData.password}
                    // onChange={handleChange}
                  />
                  <br />
                  <label className={style.radioBtn} htmlFor="radioA">
                    <input type="radio" name="radio1" value="A" /> &nbsp;
                    Subscribe to personalized sale updates and offers
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
                <a href="#" style={{ textDecoration: "none", color: "black" }}  onClick={()=>setLogin(true)}>
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
