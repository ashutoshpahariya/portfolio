import React from "react";
import "../../MediaQuery/index.css";
const Skill = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          margin: "0 auto",
          boxShadow: "0 5px 15px rgba(0, 0, 0, .3)",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#333",
            padding: "10px",
            borderRadius: "8px 8px 0 0",
          }}
        >
          <h2 style={{ color: "white", margin: 0 }}>Technical Skills</h2>
        </div>
        <div style={{ padding: "20px" }}>
          <ul>
            <li>Javascript</li>
            <li>React Js</li>
            <li>Next Js</li>
            <li>Typescript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Node Js</li>
            <li>Express</li>
            <li>Rest APIs</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Git</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          margin: "20px auto",
          boxShadow: "0 5px 15px rgba(0, 0, 0, .3)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#333",
            padding: "10px",
            borderRadius: "8px 8px 0 0",
          }}
        >
          <h2 style={{ color: "white", margin: 0 }}>Soft Skills</h2>
        </div>
        <div style={{ padding: "20px" }}>
          <ul>
            <li>Snooker</li>
            <li>Cricket</li>
            <li>Chess</li>
            <li>Volleyball</li>
            <li>Table Tennis</li>
            <li>Badminton</li>
            <li>Swimming</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
