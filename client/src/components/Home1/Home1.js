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

  const FAQs = [
    {
      question: "Why not use a drive-thru carwash?",
      answer:
        "Drive-thru car washes actually damage your paint, leaving micro-scratches from the large bristled brushes."
    },
    {
      question: "Will my paint get damaged?",
      answer: "Not at all! We use proven techniques to avoid any paint damage."
    },

    {
      question: "Will I have to drop my car off?",
      answer: "Nope, we'll come to you!"
    },
    {
      question: "How much do you charge?",
      answer:
        "Broughton Detail's rates start at just $35! See 'Rates' for more info on pricing."
    },
    {
      question: "Do you accept credit cards?",
      answer: "At the moment, no. Only cash or paypal/venmo is accepted."
    },
    {
      question: "How long will the detail take??",
      answer:
        "It really depends which package is chosen, and which car, but average time ranges from about 1.5 hours to 3.5 hours."
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
          <div className="rightSectChild">
            <div className="addrParent">
              <div className="addrDiv">
                <h3 className="addrText">Located in Matthews, NC</h3>
              </div>
            </div>
            <div className="reviewsParent">
              <div className="reviewsHeadDiv">
                <h2 className="reviewsHead">Here's what people are saying!</h2>
              </div>
              <div className="reviewsDiv">
                <div className="reviewsScroll">
                  {reviews.map(rev => (
                    <div key={rev.text} className="revItem">
                      <p className="revText">{rev.text}</p>
                      <p className="revName">{rev.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="FAQDiv">
              <div className="FAQHeadDiv">
                <h2 className="FAQHead">FAQ</h2>
              </div>
              <div className="FAQListDiv">
                {FAQs.map(faq => (
                  <div key={faq.question} className="faqItem">
                    <h2 className="faqQuestion">"{faq.question}"</h2>
                    <p className="faqAnswer">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Home1;
