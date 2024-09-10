import React from "react";

const PersonalProjects = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px 8px 0 0",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          width: "100%",
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
          Projects
        </h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <a
              href="https://github.com/ashutoshpahariya/MERN_QC_DASHBOARD"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "dodgerblue", textDecoration: "none" }}
            >
              QC Dashboard (MERN)
            </a>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <a
              href="https://github.com/ashutoshpahariya/REACT_WEBSITE"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "dodgerblue", textDecoration: "none" }}
            >
              React Website (Frontend)
            </a>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <a
              href="https://github.com/ashutoshpahariya/PROJECT-SIX-QUORA"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "dodgerblue", textDecoration: "none" }}
            >
              Quora (Backend)
            </a>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <a
              href="https://github.com/ashutoshpahariya/PROJECT-FIVE-SHOPPING_CART"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "dodgerblue", textDecoration: "none" }}
            >
              E-Commerce (Backend)
            </a>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <a
              href="https://github.com/ashutoshpahariya/PROJECT-THREE-URL_SHORTNER"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "dodgerblue", textDecoration: "none" }}
            >
              URL Shortener (Backend)
            </a>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <a
              href="https://github.com/ashutoshpahariya/PROJECT-FOUR-BOOKS_MANAGEMENT"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "dodgerblue", textDecoration: "none" }}
            >
              Book Management (Backend)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalProjects;
