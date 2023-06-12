import React from "react";

export default function Resume() {
  const color = {
    backgroundColor: "#9219E1",
  };
  // put image of resume down below
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center">
            <h1>Contact Me</h1>
            <p>Get in touch using the buttons below:</p>
            <div className="button-group">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="contact-button">
                  <img
                    src="/path/to/github-icon.png"
                    alt="GitHub"
                    className="button-icon"
                  />
                </button>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="contact-button">
                  <img
                    src="/path/to/linkedin-icon.png"
                    alt="LinkedIn"
                    className="button-icon"
                  />
                </button>
              </a>
              <a href="mailto:your-email@example.com">
                <button className="contact-button">
                  <img
                    src="/path/to/email-icon.png"
                    alt="Email"
                    className="button-icon"
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
