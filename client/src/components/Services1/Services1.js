import React, { useState } from "react";
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
