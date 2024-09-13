import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import ashutosh from "../Assets/Icons/ashutosh.png";
import "../index.css";

const links = [
  { name: "Experience", to: "/" },
  { name: "Skill", to: "/skill" },
  { name: "Project", to: "/project" },
  { name: "Education", to: "/education" },
  { name: "About", to: "/about" },
  { name: "Contact us", to: "/contact" },
];

const navbarStyle = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "white",
  padding: "10px 20px",
  height: "80px",
  boxShadow: "0 5px 15px rgba(0, 0, 0, .3)",
  position: "fixed",
  width: "100%",
  top: 0,
  zIndex: 1000,
  left: "0px",
};

const avatarStyle = {
  width: "50px",
  borderRadius: "50%",
};

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div style={navbarStyle}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          className="profile_image"
          src={ashutosh}
          alt="Profile"
          style={avatarStyle}
        />
        <h2 className="name" style={{ marginLeft: "10px", color: "black" }}>
          Ashutosh Pahariya
        </h2>
      </div>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* Navbar Links */}
      <div className={`nav-links ${isNavOpen ? "nav-open" : ""}`}>
        {links.map((item, index) => (
          <NavLink
            className="navlink"
            to={item.to}
            key={index}
            activeClassName="active"
            style={({ isActive }) => ({
              content: isActive ?? "unset",
            })}
          >
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>
      {/* Sidebar */}
      {isNavOpen && (
        <div style={{ width: "100%" }}>
          <div className={`sidebar ${isNavOpen ? "nav-open" : ""}`}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "20px 0 20px 0",
              }}
            >
              <p
                style={{
                  marginLeft: "1rem",
                  color: "black",
                  fontSize: "x-large",
                  alignItems: "center",
                  width: "100%",
                  fontWeight: "bold",
                }}
              >
                Ashutosh Pahariya
              </p>
            </div>
            {links.map((item, index) => (
              <NavLink
                className="sidebar_Navlink"
                to={item.to}
                key={index}
                activeClassName="active"
                style={({ isActive }) => ({
                  content: isActive ?? "unset",
                  padding: "20px 0 20px 0",
                  fontSize: "1.3rem",
                })}
                onClick={closeNav}
              >
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
