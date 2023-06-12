import React from "react";
// import img1 from "../assets/img1.png";
// import img2 from "../assets/bg.png";
// import img3 from "../assets/img3.png";
// import "../../components/card.css";

export default function About() {
  const cardStyle = {
    // width: '25rem',
    margin: "0",
    height: "100vh",
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    backgroundImage: "linear-gradient(to top, #000000 0%, #f9f586 100%)",
  };
  return (
    <div>
      <body style={cardStyle}>
        <div className="card img-responsive">
          <div className="col-12 card-text2">
            <div className="portada"></div>
            <div className="title-total">
              <div className="title">
                Full Stack Developer & Ski Patroller/Mountain Guide
              </div>
              <h2>Ryan Wood</h2>

              <div className="desc">
                Hi there! I'm a passionate and adventurous individual who
                recently made a bold career transition into the world of coding.
                With a decade-long background in the outdoor industry as a
                mountain guide and ski patroller, I've always been drawn to
                challenges and pushing boundaries. Having experienced the thrill
                of conquering mountains and navigating through unpredictable
                terrain, I've developed a resilient and problem-solving mindset
                that I now bring to my coding journey. I thrive in dynamic
                environments, and I'm excited to apply my skills in full stack
                development to create innovative solutions and contribute to the
                ever-evolving tech landscape. During my time at coding bootcamp,
                I honed my skills in front-end and back-end development, gaining
                proficiency in languages such as JavaScript, HTML, CSS, and
                frameworks like React and Node.js. I'm eager to dive deeper into
                the world of web development, exploring new technologies and
                frameworks to expand my toolkit. What sets me apart is my unique
                combination of technical expertise and real-world outdoor
                experience. I understand the importance of teamwork,
                adaptability, and problem-solving under pressure. I bring a
                fresh perspective to the table, fueled by my passion for both
                the digital and natural worlds. When I'm not coding, you'll find
                me exploring the great outdoors, conquering new peaks, and
                embracing the thrill of adventure. I believe that the same
                determination and tenacity that drive me on the mountainside
                will propel me to success in the world of coding. I'm excited to
                collaborate with like-minded individuals and organizations,
                leveraging my skills and background to create meaningful and
                impactful software solutions. Let's embark on this coding
                journey together! Feel free to reach out and connect. I'm always
                up for a new coding challenge or a climbing/skiing adventure!
              </div>
              <div className="actions">
                <button>
                  <i className="far fa-heart"></i>
                </button>
                <button>
                  <i className="far fa-envelope"></i>
                </button>
                <button>
                  <i className="fas fa-user-friends"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
