import React, { useEffect } from "react";

const DownArrow = () => {
  const style1 = {
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    position: "absolute",
    display: "inline-block",
    zIndex: 2,
    right: "calc(50% - 12px)",
    // top: "45%",
    animation: "bouncey 1s alternate infinite"
  };

  let yeet = x => {
    let arrow = document.getElementById("arrow");

    if (x.matches) {
        arrow.style.top = "95%";
      arrow.style.width = "50px";
    } else {
        arrow.style.top = "45%";
        
      arrow.style.width = "24px";
    }
  };

  useEffect(() => {
    let x = window.matchMedia("(max-width: 700px)");

    yeet(x);
    x.addListener(yeet);
  }, []);

  const style2 = {
    fill: "fff"
  };

  return (
    <svg
      id="arrow"
      width="24px"
      height="24px"
      viewBox="0 0 142 83"
      version="1.1"
      style={style1}
    >
      <path
        d="M16.307,4.405c-1.156,-1.166 -2.73,-1.822 -4.372,-1.823c-1.642,-0.002 -3.217,0.652 -4.376,1.815c-1.048,1.053 -2.167,2.177 -3.214,3.228c-1.152,1.157 -1.797,2.725 -1.794,4.359c0.004,1.633 0.656,3.198 1.813,4.351c15.379,15.312 66.131,65.844 66.131,65.844l-0.563,-23.715c0,0 -40.126,-40.451 -53.625,-54.059Z"
        style={style2}
      />
      <path
        d="M137.025,16.353c1.167,-1.155 1.826,-2.727 1.83,-4.368c0.004,-1.641 -0.646,-3.217 -1.807,-4.377c-1.065,-1.065 -2.204,-2.203 -3.266,-3.265c-2.389,-2.388 -6.257,-2.406 -8.668,-0.039c-13.725,13.47 -55.182,54.158 -55.182,54.158l0.563,23.717c0,0 51.036,-50.495 66.53,-65.826Z"
        style={style2}
      />
    </svg>
  );
};

export default DownArrow;
