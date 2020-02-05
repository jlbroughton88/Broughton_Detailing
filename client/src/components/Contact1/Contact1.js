import React, { useState , useEffect} from "react";
import axios from "axios";
import { useAppContext } from "../../context.js";
import "./Contact1.scss";

const Contact1 = () => {
  const { statusUrl } = useAppContext();

  const [formData, setFormData] = useState("");

  const closeNavMenu = () => {
    let dropdown = document.getElementById("dropDown");
    let overlay = document.getElementById("overlay");
    dropdown.classList.remove("active");
    overlay.classList.remove("active");
  }

  useEffect(() => {
    closeNavMenu();
  })

  const handleChange = e => {
    setFormData(e.target.value);
  };

  const handleFormInput = e => {
    let input = document.getElementById("emailInput");
    let thankYou = document.getElementById("thankYou");
    axios
      .post(`${statusUrl}/api/addclient`, {
        email: formData
      })
      .then(response => console.log(response))
      .catch(err => console.log(err));
    if (formData !== "") {
      thankYou.style.display = "block";
    }

    input.value = "";
    setTimeout(() => {
      thankYou.style.display = "none";
    }, 5000);

    e.preventDefault();
  };

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
              <form onSubmit={handleFormInput} className="signupForm">
                <div className="signupInputParent">
                  <input
                    className="signupInput"
                    id="emailInput"
                    type="email"
                    onChange={handleChange}
                    placeholder="Your Email (I won't spam)"
                  />
                </div>

                <input
                  className="signupSubmit"
                  type="submit"
                  placeholder="Submit"
                />
              </form>
              <h4 id="thankYou" className="thankYou">
                Thank You!
              </h4>
            </div>
            <div className="letsTalkDiv">
              <h2 className="letsTalkHead">Lets Talk</h2>
              <a
                href="mailto:broughtondetailing@gmail.com?subject=Detailing Inquiry"
                className="emailLink"
              >
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
