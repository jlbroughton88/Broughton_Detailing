import React, { useEffect } from "react";
import genesis4 from "../Images/genesis4.JPG"
import "./About1.scss";

const About1 = () => {

  const closeNavMenu = () => {
    let dropdown = document.getElementById("dropDown");
    let overlay = document.getElementById("overlay");
    dropdown.classList.remove("active");
    overlay.classList.remove("active");
  }

  useEffect(() => {
    closeNavMenu();
  })

  return (
    <div className="aboutMother">
      <div className="aboutMain">
        <section className="leftSect">
          <div className="headDiv">
            <h1 className="head">About</h1>
          </div>
        </section>
        <section className="rightSect">
          <div className="rightSectChild"> 
            <div className="storyDiv">
              {/* <div className="storyHeadDiv">
                <h3 className="storyHead">The Story</h3>
              </div>                 */}
              <div className="aboutImgDiv">
                  <img className="aboutImg" src={genesis4} alt=""/>
                </div>
              <div className="storyParaDiv">

                <h2 className="aboutSlogan">"Nothing Less Than Remarkable"</h2>
                <h3 className="storyPara">
                  Hi, my name is Jacob, founder of Broughton Detailing. I appreciate you spending a few minutes here on my site!
                  <br/> <br/>
                  Broughton Detailing was founded with the goal of delivering as close to perfection as possible.
                  <br/> <br/>
                  I've been into cars my whole life, from cleaning my first car every single weekend, to car shows with my friends, to ripping through mountain roads and appreciating the great machine under me. 
                  Your car might be a way of getting the kids to school, carrying equipment around for work, or for joyrides on the weekend, but the truth is that a spotless car will be a greater experience for everyone.
                  Detailing a car is all about reviving the unbridled appreciation you've had for your vehicle. 
                  <br/> <br/>
                  I believe detailing is more of an art than just cleaning the car. It's about being able to bring life back into the car.  Finding the balance between being maticulous and efficient is a great skill in itself. 
                  Often times, we'll tend to neglect our cars. Whether it be from taking it to a drive-thru wash at a gas station, or spilling something on the carpet and "taking car of it later", we all do it, but we also all love a clean car!
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About1;
