import React, { useState, useEffect } from "react";
import "./Services1.scss";

const Services1 = () => {
  const [service, setService] = useState();

  const handlePackageClick = e => {
    let packages = document.getElementsByClassName("serviceList");
    let packagesArr = [].slice.call(packages);
    let clickedPackage = e.target.id + "Desc";
    for (let i = 0; i < packagesArr.length; i++) {
      if (packagesArr[i].id === clickedPackage) { 
        packagesArr[i].classList.add("active");
        packagesArr[i].style.display = "block";
      } else {
        packagesArr[i].style.display = "none";
      }
    }
  };

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
    <div className="servicesMother">
      <div className="servicesMain">
        <section className="leftSect">
          <div className="headDiv">
            <h1 className="head">Services</h1>
          </div>
        </section>
        <section className="rightSect">
          <div className="rightSectChild">
            <div className="servicesGrid">
            <div className="serviceDiv">
                <div
                  onClick={handlePackageClick}
                  id="basics"
                  className="serviceHead"
                >
                  The Basics
                </div>
                <ul className="serviceListBasics" id="basicsList">
                  <li className="serviceListItem">- Hand Washed</li>
                  <li className="serviceListItem">- Windows Inside & Out</li>
                  <li className="serviceListItem">- Door Jams</li>
                  {/* <li className="serviceListItem">- Clean Plastics</li>
                  <li className="serviceListItem">- Dust</li>
                  <li className="serviceListItem">- Vacuum</li> */}
                  <div className="priceTimeDiv">
                    {/* <h3 className="packagePrice">$39 - $59</h3> */}
                    <h3 className="packageTime">1 - 1.5 hours</h3>
                  </div>
                </ul>
              </div>
              <div className="serviceDiv">
                <div
                  onClick={handlePackageClick}
                  id="leather"
                  className="serviceHead"
                >
                  Leather Treatment
                </div>
                <div className="serviceList" id="leatherDesc">
                  <p className="serviceListItem">
                  Leather is important to maintain. Over time, if cared for correctly, it develops a wonderful finish called a patina, or a 'sheen'. This adds a bit of character to the leather. 
                  This is caused by the sun, dirt particles, and your natural body oils. If cared for wrongly, leather starts to crack
                  and actually lose some of it's color.
                  </p>
                </div>
              </div>
              <div className="serviceDiv">
                <div
                  onClick={handlePackageClick}
                  id="interior"
                  className="serviceHead"
                >
                  Interior Service
                </div>
                <div className="serviceList" id="interiorDesc">
                <p className="serviceListItem">
                  Plastics and other plastic-like interior surfaces are very susceptable to damage from the sun over time. This sun damage mainly causes the color to fade. So rather than the deep color that was there from the factory, 
                  the plastics begin to look a bit dull. Protecting and conditioning these surfaces is vital to keeping them looking fantastic.
                  </p>
                  
                </div>
                
              </div>
              <div className="serviceDiv">
                <div
                  onClick={handlePackageClick}
                  id="carpets"
                  className="serviceHead"
                >
                  Carpets Service
                </div>
                <ul className="serviceList" id="carpetsDesc">
                  <p className="serviceListItem">
                      Carpets are often overlooked because we're always stepping about on them, but the cleanliness of carpets actually effect the experience quite a lot. Past the obvious visual appearance, they tend to hold the majority of whatever
                      smell seems to be locked in the car. Also, a deep colored, plush carpet is a great way to really restore the feel of your interior cabin.
                    </p>
                </ul>
              </div>
              <div className="serviceDiv">
                <div
                  onClick={handlePackageClick}
                  id="wheels"
                  className="serviceHead"
                >
                  Wheel Service
                </div>
                <ul className="serviceList" id="wheelsDesc">
                <p className="serviceListItem">
                  The first glance that people give to cars is usually straight to the wheels. Over time, wheels tend to gather lots of brake dust from continuous brake pad wear while driving. This break dust builds up on the wheel and can actually 
                  embed itself into the wheel, causing permanant damage if not taken care of. Not to mention, clean wheels just look fantastic. Along with getting that brake dust taken care of, applying a fresh coat of tire shine, cleaning the wheel 
                  wells, and inner barrel of the wheel are also taken care of.
                  </p>
                </ul>
              </div>
              <div className="serviceDiv">
                <div
                  onClick={handlePackageClick}
                  id="paint"
                  className="serviceHead"
                >
                  Paint Service
                </div>
                <ul className="serviceList" id="paintDesc">
                <p className="serviceListItem">
                  Paint can make all the difference. Firstly, (if paint clearly contains contaminants), a clay bar will be used to safely extract the contaminants that are embeded into the paint. Secondly, after the paint is smooth to the touch and 
                  lacking any grit feeling, wax will be applied. Wax creates a hydrophobic effect, making water bead off the surface rather than sheeting off. Along with the beading, wax provides an incredible gloss to the paint, as well as very smooth to the touch (I recommend avoiding contact though, without any lubrication that is.).
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services1;
