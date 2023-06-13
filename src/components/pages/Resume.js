import React from "react";
import { useState } from "react";
import resume from "../assets/ryanResume.png";
import email from "../assets/emailIcon.png";
import github from "../assets/githubPng.png";
import linkedIn from "../assets/linkedinicon.png";

export default function Resume() {
  const [isZoomed, setIsZoomed] = useState(false);

  const cardContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3), #fff)",
  };

  const cardStyle = {
    margin: "0 10%",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
    padding: "20px",
    width: isZoomed ? "90%" : "80%",
    transition: "width 0.3s",
  };

  const resumeImageStyle = {
    marginBottom: "20px",
    width: "100%",
    height: "auto",
    objectFit: isZoomed ? "cover" : "contain",
    cursor: "pointer",
    transition: "width 0.3s",
    maxWidth: "100%",
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const buttonGroupStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  };
  const buttonStyle = {
    width: "100px",
    height: "100px",
  };
  return (
    <div style={cardContainerStyle}>
      <div className="container" style={{ width: "100%" }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card text-center" style={cardStyle}>
              <div className="card-body">
                <div>
                  <img
                    style={resumeImageStyle}
                    src={resume}
                    alt="Resume"
                    onClick={toggleZoom}
                  />
                </div>
                <h3>Contact Me</h3>
                <p>Get in touch using the buttons below:</p>
                <div style={buttonGroupStyle}>
                  <a
                    href="https://github.com/RyanWood2334"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="GitHub" style={buttonStyle} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedIn} alt="LinkedIn" style={buttonStyle} />
                  </a>
                  <a href="mailto:ryanwood_2334@yahoo.com">
                    <img src={email} alt="Email" style={buttonStyle} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
