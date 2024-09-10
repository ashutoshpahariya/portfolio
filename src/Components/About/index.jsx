import React from "react";

const About = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", overflowX: "hidden" }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          boxShadow: "0 5px 15px rgba(0, 0, 0, .3)",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            backgroundColor: "#333",
            color: "white",
            padding: "10px",
            borderRadius: "8px 8px 0 0",
            marginTop: "-3px",
          }}
        >
          About Me
        </h2>
        <p style={{ textAlign: "justify", lineHeight: "1.6" }}>
          I am a passionate and hard-working frontend developer with 3 years of
          experience in building and designing intuitive user interfaces. My
          journey in the tech world has been fueled by a deep enthusiasm for
          creating visually appealing and user-friendly applications. I thrive
          in team-oriented environments, where collaboration and shared goals
          drive success. My greatest strength lies in my interpersonal
          intelligence, allowing me to effectively communicate and work
          alongside others, ensuring smooth project execution.
        </p>
        <p style={{ textAlign: "justify", lineHeight: "1.6" }}>
          My expertise spans across React, Next.js, and TypeScript, where I
          excel in translating client requirements into functional, responsive,
          and visually compelling user interfaces. I have a strong understanding
          of modern web technologies and am committed to maintaining high code
          quality and performance in every project I undertake.
        </p>
        <div style={{ marginTop: "20px" }}>
          <p>
            <strong>Email: </strong>
            <a
              href="mailto:ashutoshpahariya6@gmail.com"
              style={{ color: "dodgerblue", textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              ashutoshpahariya6@gmail.com
            </a>
          </p>
          <p>
            <strong>LinkedIn: </strong>
            <a
              href="https://www.linkedin.com/in/ashu1011"
              style={{ color: "dodgerblue", textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/ashu1011
            </a>
          </p>
          <p>
            <strong>GitHub: </strong>
            <a
              href="https://github.com/ashutoshpahariya"
              style={{ color: "dodgerblue", textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/ashutoshpahariya
            </a>
          </p>
          <p>
            <strong>Phone:</strong> 07007748424
          </p>
          <p>
            <strong>Location:</strong> Hyderabad, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
