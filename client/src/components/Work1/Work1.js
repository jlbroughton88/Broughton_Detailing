import React, { useState, useEffect } from "react";
import "./Work1.scss";
import chevytruck1 from "../Images/chevytruck1.JPG";
import chevyvan1 from "../Images/chevyvan1.jpeg";
import genesis1 from "../Images/genesis1.JPG";
import genesis2 from "../Images/genesis2.JPG";
import genesis3 from "../Images/genesis3.JPG";
import pilot1 from "../Images/pilot1.JPG";
import smart1 from "../Images/smart1.JPG";
import smart2 from "../Images/smart2.JPG";



const Work1 = () => {
  
  const [loadCount, setLoadCount] = useState(0);
  
  let imageArr = [
    {
      url: chevytruck1,
      alt: ""
    },
    {
      url: chevyvan1,
      alt: ""
    },
    {
      url: genesis1,
      alt: ""
    },
    {
      url: genesis2,
      alt: ""
    },
    {
      url: genesis3,
      alt: ""
    },
    {
      url: pilot1,
      alt: ""
    },
    {
      url: smart1,
      alt: ""
    },
    {
      url: smart2,
      alt: ""
    }
  ];

  useEffect(() => {
    let imagesContainer = document.getElementById("imagesGrid");
    let loadingContainer = document.getElementById("loadingContainer");
    console.log(loadCount)
    // console.log(imageArr.length)

    if(loadCount != imageArr.length) {
      console.log("IF Load count: " + loadCount)
      console.log("IF ImageArr.length: " + imageArr.length)
      imagesContainer.style.display = "none";
      loadingContainer.style.display = "flex";
    } else {
      console.log("ELSE Load count: " + loadCount)
      console.log("ELSE ImageArr.length: " + imageArr.length)
      imagesContainer.style.display = "grid";
      loadingContainer.style.display = "none";
    }
  })

  const loadFunc = () => {
    setLoadCount(loadCount + 1);
  }

// console.log(loadCount)
  return (
    <div className="workMother">
      <div className="workMain">
        <section className="leftSect">
          <div className="headDiv">
            <h1 className="head">Work</h1>
          </div>
        </section>
        <section className="rightSect">
          <div className="rightSectChild">
            <div id="imagesGrid" className="imagesGrid">

              {imageArr.map(img => (
                <div className="imageItem" key={img.url}>
                  <img className="image" src={img.url} alt={img.alt} onLoad={loadFunc}/>
                </div>
              ))}
            </div>
            <div id="loadingContainer">
              <h1>Loading...</h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Work1;