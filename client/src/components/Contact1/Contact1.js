import React, { useState } from "react";
import axios from "axios";
import "./Contact1.scss";

const Contact1 = () => {

  const [formData, setFormData] = useState("");

  const handleNewClient = e => {
    console.log(e.target)
  }

  const handleChange = e => {
    setFormData(e.target.value)
  }
 
  const handleFormInput = e => {
    let input = document.getElementById("emailInput");
    let thankYou = document.getElementById("thankYou")
    axios
      .post("http://localhost:5004/api/addclient", {
        email: formData
      })
      .then(response => console.log(response))
      .catch(err => console.log(err))
    if(formData !== "") {
      thankYou.style.display = "block";
    }
    
    input.value = "";
    setTimeout(() => { thankYou.style.display = "none" }, 5000)

    e.preventDefault();
  }

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
                <form onSubmit={handleFormInput}  className="signupForm">
                  {/* Issues  with form likely have to do with this parent div */}
                  <div className="signupInputParent">
                    <input className="signupInput" id="emailInput" type="email" onChange={handleChange} placeholder="Your Email (I won't spam)"/>
                  </div>
                  
                  <input className="signupSubmit" type="submit" placeholder="Submit"/>
                </form>
                <h4 id="thankYou" className="thankYou">Thank You!</h4>
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
