import React, { useState, useEffect } from "react";
import "./Services1.scss";

const Services1 = () => {
  const [service, setService] = useState();

  const handlePackageClick = e => {
    let packages = document.getElementsByClassName("serviceList");
    let packagesArr = [].slice.call(packages);
    let clickedPackage = e.target.id + "List";
    for (let i = 0; i < packagesArr.length; i++) {
      if (packagesArr[i].id === clickedPackage) {
        packagesArr[i].classList.add("active")
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
                  id="express"
                  className="serviceHead"
                >
                  Express
                </div>
                <ul className="serviceList" id="expressList">
                  <li className="serviceListItem">- Exterior Wash</li>
                  <li className="serviceListItem">- Windows Inside & Out</li>
                  <li className="serviceListItem">- Door Jams</li>
                  <li className="serviceListItem">- Plastics / Dust</li>
                  <li className="serviceListItem">- Vacuum</li>
                  <div className="priceTimeDiv">
                    <h3 className="packagePrice">$39 - $59</h3>
                    <h3 className="packageTime">1 - 1.5 hours</h3>
                  </div>
                </ul>
              </div>
              <div className="serviceDiv">
                <div
                  onClick={handlePackageClick}
                  id="interior"
                  className="serviceHead"
                >
                  Interior
                </div>
                <ul className="serviceList" id="interiorList">
                  <li className="serviceListItem">- Exterior Wash</li>
                  <li className="serviceListItem">- Windows Inside & Out</li>
                  <li className="serviceListItem">- Door Jams</li>
                  <li className="serviceListItem">- Plastics / Dust</li>
                  <li className="serviceListItem">- Vacuum</li>
                  <li className="serviceListItem">- Trunk</li>
                  <li className="serviceListItem">- Shampoo Floor Mats</li>
                  <li className="serviceListItem">- Light Stain Removal</li>
                  <li className="serviceListItem">
                    - Condition & Protect Surfaces
                  </li>
                  <div className="priceTimeDiv">
                    <h3 className="packagePrice">$49 - $89</h3>
                    <h3 className="packageTime">2 - 2.5 hours</h3>
                  </div>
                  
                </ul>
                
              </div>
              <div className="serviceDiv">
                <div
                  onClick={handlePackageClick}
                  id="expressPlus"
                  className="serviceHead"
                >
                  Express Plus
                </div>
                <ul className="serviceList" id="expressPlusList">
                  <li className="serviceListItem">- Exterior Wash</li>
                  <li className="serviceListItem">- Windows Inside & Out</li>
                  <li className="serviceListItem">- Door Jams</li>
                  <li className="serviceListItem">- Plastics / Dust</li>
                  <li className="serviceListItem">- Vacuum</li>
                  <li className="serviceListItem">- Trunk</li>
                  <li className="serviceListItem">- Clean Wheels</li>
                  <li className="serviceListItem">- Tire Shine</li>
                  <div className="priceTimeDiv">
                    <h3 className="packagePrice">$49 - $79</h3>
                    <h3 className="packageTime">1.5 - 2 hours</h3>
                  </div>
                </ul>
              </div>
              <div className="serviceDiv">
                <div
                  onClick={handlePackageClick}
                  id="complete"
                  className="serviceHead"
                >
                  Complete Detail
                </div>
                <ul className="serviceList" id="completeList">
                  <li className="serviceListItem">- Exterior Wash</li>
                  <li className="serviceListItem">- Windows Inside & Out</li>
                  <li className="serviceListItem">- Door Jams</li>
                  <li className="serviceListItem">- Plastics / Dust</li>
                  <li className="serviceListItem">- Vacuum</li>
                  <li className="serviceListItem">- Trunk</li>
                  <li className="serviceListItem">- Clean Wheels</li>
                  <li className="serviceListItem">- Tire Shine</li>
                  <li className="serviceListItem">- Shampoo Floor Mats</li>
                  <li className="serviceListItem">- Light Stain Removal</li>
                  <li className="serviceListItem">
                    - Condition & Protect Surfaces
                  </li>
                  <li className="serviceListItem">- Hand Waxed</li>
                  <div className="priceTimeDiv">
                    <h3 className="packagePrice">$120 - $150</h3>
                    <h3 className="packageTime">3 - 4 hours</h3>
                  </div>
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
