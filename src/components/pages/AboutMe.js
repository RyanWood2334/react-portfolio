import React from "react";
// import img1 from "../assets/img1.png";
// import img2 from "../assets/bg.png";
// import img3 from "../assets/img3.png";
// import "../../components/card.css";

export default function About() {
  const cardStyle = {
    width: "80%",
    margin: "0 auto",
    padding: "2rem",
    background: "linear-gradient(to bottom, #E1A419, #C48711, #A1660A)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    color: "black",
    textAlign: "center",
  };

  const descStyle = {
    textAlign: "center",
    color: "black",
    marginBottom: "1rem",
    fontSize: "1rem",
    lineHeight: "1.5",
  };

  return (
    <div className="pageContainer">
      <div style={cardStyle}>
        <div className="card img-responsive">
          <div className="col-12 card-text2">
            <div className="portada"></div>
            <div className="title-total">
              <div className="title" style={titleStyle}>
                Full Stack Developer & Ski Patroller/Mountain Guide
              </div>
              <h2>Ryan Wood</h2>

              <div className="desc" style={descStyle}>
                I am a versatile professional with expertise in JavaScript,
                React, Node.js, and MongoDB. With a strong foundation in web
                development, I have gained proficiency in multiple frameworks
                and technologies. As a ski patrol supervisor for seven years, I
                provided medical care, led a team of patrollers, and utilized
                explosives for avalanche control. My experience in high-stress
                environments has honed my leadership and teamwork skills,
                enabling me to make critical decisions with composure.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
