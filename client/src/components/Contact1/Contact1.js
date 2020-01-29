import React from "react";
import "./Contact1.scss";

const Contact1 = () => {
  return (
    <div className="contactMother">
      <div className="contactMain">
        <section className="leftSect">
          <div className="headDiv">
            <h1 className="head">Contact</h1>
          </div>
        </section>
        <section className="rightSect">
            <div className="rightSectChild">
              <div className="signupDiv">
                <h2 className="signupHead">Sign Up For Deals!</h2>
                <form className="signupForm">
                  {/* Issues  with form likely have to do with this parent div */}
                  <div className="signupInputParent">
                    <input className="signupInput" type="text" placeholder="Your Email (I won't spam)"/>
                  </div>
                  
                  <input className="signupSubmit" type="submit" placeholder="Submit"/>
                </form>
              </div>
                <div className="letsTalkDiv">
                  <h2 className="letsTalkHead">Lets Talk</h2>
                  <a href="mailto:broughtondetailing@gmail.com?subject=Detailing Inquiry" className="emailLink">
                    <p className="email">BroughtonDetailing@gmail.com</p>
                    </a>
                  <p className="phone">7047708371</p>
                  <div className="socialDiv"></div>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default Contact1;
