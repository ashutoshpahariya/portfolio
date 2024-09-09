import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
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
};

const avatarStyle = {
  width: "50px",
  borderRadius: "50%",
};

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // To detect route changes
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  // Scroll to the top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div style={navbarStyle}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={ashutosh} alt="Profile" style={avatarStyle} />
        <h2 style={{ marginLeft: "10px", color: "black" }}>
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
          <div className={`sidebar`} onClick={() => setIsNavOpen(false)}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h2
                style={{
                  marginLeft: "10px",
                  color: "black",
                  fontSize: "larger",
                }}
              >
                Ashutosh Pahariya
              </h2>
            </div>
            {links.map((item, index) => (
              <NavLink
                className="sidebar_Navlink"
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
          {/* <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", height: "200px" }}
            onClick={() => setIsNavOpen(false)}
          ></div> */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
