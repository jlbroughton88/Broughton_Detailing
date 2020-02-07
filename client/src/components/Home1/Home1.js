import React, { useEffect } from "react";
import titleImage from "../Images/genesisWithTitle.jpg";
import { Link } from "react-router-dom";
import "./Home1.scss";
import DownArrow from "../Logos/DownArrow";

const Home1 = () => {

  const closeNavMenu = () => {
    let dropdown = document.getElementById("dropDown");
    let overlay = document.getElementById("overlay");
    dropdown.classList.remove("active");
    overlay.classList.remove("active");
  }

  useEffect(() => {
    closeNavMenu();
  })

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
    }, 
    {
      name: "Luidmila B.",
      text: "Jacob did a fantastic job cleaning my car and it’s never looked this good! Very convenient and very thorough, would 100% recommend. Thank you!"
    }
  ];

  const FAQs = [
    {
      question: "Why not use a drive-thru carwash?",
      answer:
        "Drive-thru car washes may potentially damage your paint, leaving micro-scratches from the large bristled brushes."
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
    `Broughton Detail's rates start at just $35!`,
    link: "/services", 
    topic: "services and pricing"
    },
    {
      question: "Do you accept credit cards?",
      answer: "At the moment, no. Only cash or paypal/venmo is accepted."
    },
    {
      question: "How long will the detail take??",
      answer:
        "It really depends which package is chosen and what type of car you have, but average time ranges from about 1.5 hours to 4 hours.",
        link: "/services", 
        topic: "service time-frames"
    },
    
  ];
  return (
    <div className="home1Mother">
      <div className="home1Main">
        <section className="leftSect">
          <div className="headDiv">
            <h3 className="subHead">Mobile</h3>
            <h1 className="head">Auto Detailing</h1>
          </div>
        </section>
        <section className="rightSect">
          <div className="rightSectChild">
            <div className="imgDiv">
              <img src={titleImage} alt="Broughton Detailing"/>
            </div>

            <div className="addrParent">

              <div className="addrDiv">
              <h1 className="addrTextSmall">Mobile Auto Detailing</h1>
                <h1 className="addrText">Located in Matthews, NC</h1>
                <h1 className="addrText2">I'll come to you</h1>
                <div className="buttonsDiv">
                <a href="mailto:broughtondetailing@gmail.com?subject=Detail Inquiry">
                  <button className="CTA">Lets talk!</button>
                </a>
                <Link to="/services">
                  <button className="CTA">Services</button>
                </Link>
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
                    { faq.link && faq.topic && (
                      <p className="faqLink">Click <Link to={faq.link}>here</Link> for more info on {faq.topic}.</p>
                    )}
                  </div>
                ))}
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
          </div>
        </section>
      </div>
    </div>
  );
};
export default Home1;
