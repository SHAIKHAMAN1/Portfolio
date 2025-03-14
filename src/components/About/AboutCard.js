import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            👋 Hey there! I’m  
            <span
              style={{
                background: "linear-gradient(to right, #ff6a00, #ee0979)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold" 
                
              }}
              className="purple"
            >
              {" "}Shaikh Aman
            </span>, a passionate 
            <b className="purple"> Software Developer </b>  
            from <span className="purple">Pune, India.</span> 🇮🇳
            <br />
            <br />
            🚀 I’m currently pursuing my Bachelor’s in Computer Science & Engineering (AI & DS) at DYPIEMR.
            With a CGPA of <span style={{ fontWeight: "bold" }}> 8.33</span>,
            <br />
            <br />
            🔥 My tech stack includes: 
            <b className="purple"> C++, JavaScript, React, Next.js, and MERN Stack. </b>  
            I’m always excited about building innovative solutions and learning new technologies.  
            Currently, I’m enhancing my skills in MERN Stack Development.  
            <br />
            <br />
            🎯 Beyond coding, I love:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🎮 Playing Competitive Games
            </li>
            <li className="about-activity">
              <ImPointRight /> ✈️ Traveling & Exploring New Places
            </li>
            <li className="about-activity">
              <ImPointRight /> 💡 Learning New Technologies & AI Trends
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", fontStyle: "italic", fontSize: "1.2em" }}>
            "Strive to build things that make a difference and leave an impact!"
          </p>
          <footer className="blockquote-footer">Shaikh Aman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
