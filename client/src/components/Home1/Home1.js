import React from "react";
import "./Home1.scss";

const Home1 = () => {
    return (
    <div className="home1Mother">
        <div className="home1Main">
            <section className="leftSect">
                <div className="headDiv">
                    <h1 className="head">Mobile Auto Detailing</h1>
                </div>
            </section>
            <section className="rightSect">
                <div className="addrSloganDiv">
                    <div className="addrDiv">
                        <h3 className="addrText">Located in Matthews, NC</h3>
                    </div>
                    <hr/>
                    <div className="sloganDiv">
                        <p className="sloganText">Driven to give you a renewed love for your vehicle</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}
export default Home1;