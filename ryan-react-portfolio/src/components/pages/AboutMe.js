import React from "react";
// import img1 from "../assets/img1.png";
// import img2 from "../assets/bg.png";
// import img3 from "../assets/img3.png";
// import "../../components/card.css";

export default function About() {
  const cardStyle = {
    width: "50%",
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

  const textStyle = {
    textAlign: "center",
    color: "#FFF",
    marginBottom: "1rem",
  };

  const titleStyle = {
    fontSize: "1.5rem",
  };

  const descStyle = {
    fontSize: "1rem",
    lineHeight: "1.5",
    textAlign: "justify",
  };

  return (
    <div className="pageContainer">
      <div style={cardStyle}>
        <div className="card img-responsive">
          <div className="col-12 card-text2">
            <div className="portada"></div>
            <div className="title-total">
              <div className="title" style={(textStyle, titleStyle)}>
                Full Stack Developer & Ski Patroller/Mountain Guide
              </div>
              <h2>Ryan Wood</h2>

              <div className="desc" style={(textStyle, descStyle)}>
                Hi there! I'm a passionate and adventurous individual who
                recently made a bold career transition into the world of coding.
                ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
