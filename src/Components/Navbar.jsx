import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.scss";
import ProfileCard from "./ProfileCard";

function Navbar() {
  const [profileCardState, setProfileCard] = useState(false);

  var openProfileCard = () => {
    setProfileCard(true);
  };
  return (
    <div>
      <div className="navbar-main">
        <div className="first-half-navbar">
          <div className="navbar-logo">
            <span className="logo-image">LOGO</span>
          </div>
          <div className="navbar-links">
            <ul>
              <li className="home-button">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/vegpage">About</Link>
              </li>

              <li>
                <Link to="/vegpage">Cusines</Link>
              </li>
              <li>
                <Link to="/vegpage">Chef</Link>
              </li>
              <li>
                <Link to="/vegpage">Blog</Link>
              </li>
              <li>
                <Link to="/vegpage">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="second-half-navbar">
          <div className="search-bar">
            <input
              className="search-bar-textfield"
              type="text"
              placeholder="&nbsp;&#128270;&nbsp;&nbsp;&nbsp;Search"
            ></input>
          </div>
          <div className="profile-avatar">
            <div className="avatar">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/eduqate-d65f5.appspot.com/o/chef1-removebg-preview.png?alt=media&token=10642367-5cf8-4dcf-8f77-f1ec3c004e3b"
                alt=""
              />
            </div>
            <ProfileCard
              show={profileCardState}
              handleState={setProfileCard}
            ></ProfileCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
