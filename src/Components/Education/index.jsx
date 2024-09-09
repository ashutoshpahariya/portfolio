import React from "react";

const Education = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center",overflowX:'hidden' }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          width: "100%",
          boxShadow: "0 5px 15px rgba(0, 0, 0, .3)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            backgroundColor: "dodgerblue",
            color: "white",
            padding: "10px",
            borderRadius: "8px 8px 0 0",
            marginTop:'-3px'
          }}
        >
          Education
        </h2>
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          <li style={{ marginBottom: "20px" }}>
            <strong style={{ fontSize: "18px" }}>Bachelor of Science</strong>
            <p style={{ margin: "5px 0" }}>
              Y.B.N. University, Ranchi, Jharkhand
            </p>
            <p style={{ margin: "5px 0" }}>05/2017 - 09/2020, 7.7 CGPA</p>
          </li>
          <li style={{ marginBottom: "20px" }}>
            <strong style={{ fontSize: "18px" }}>Intermediate</strong>
            <p style={{ margin: "5px 0" }}>
              Ramshree Public School, Orai, Uttar Pradesh
            </p>
            <p style={{ margin: "5px 0" }}>06/2014 - 06/2015, 6.1 CGPA</p>
          </li>
          <li style={{ marginBottom: "20px" }}>
            <strong style={{ fontSize: "18px" }}>High School</strong>
            <p style={{ margin: "5px 0" }}>
              Morning Star Children's Academy, Orai, Uttar Pradesh
            </p>
            <p style={{ margin: "5px 0" }}>06/2012 - 06/2013, 7.8 CGPA</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
