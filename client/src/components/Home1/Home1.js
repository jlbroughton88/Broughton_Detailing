import React from "react";
import "./Home1.scss";

const Home1 = () => {
  const reviews = [
    {
      name: "Trent B.",
      text:
        "10/10 very professional and quick, cleaned my interior so good it looked new. Would recommend."
    },
    {
      name: "Geoffrey S.",
      text:
        "Great guy, professional attitude. Worked around my schedule, and came to me. Car looks great!"
    },
    {
      name: "Tanner H.",
      text:
        "Very professional detail, genuine guy who cares about his work. My car came out looking new."
    },
    {
      name: "Louis M.",
      text:
        "Great job on our 96 truck, looks like new. Worked with our schedule. Thanks again!!"
    },
    {
      name: "Kori T.",
      text:
        "Broughton Detailing did an amazing job with my husband's SUV. Jacob did a wonderful job, I will definitely be using his services again and highly recommend him for all your car cleanliness needs!"
    }
  ];

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
            <hr />
            <div className="reviewsParent">
              <div className="reviewsHeadDiv">
                <h2 className="reviewsHead">Heres what people are saying!</h2>
              </div>
              <div className="reviewsDiv">
                <div className="reviewsScroll">
                  {reviews.map(rev => (
                    <div className="revItem">
                      <p className="revText">{rev.text}</p>
                      <p className="revName">{rev.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Home1;
