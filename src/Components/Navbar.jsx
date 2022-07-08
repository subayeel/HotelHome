import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Avatar from "./Avatar";

import SearchBar from "./SearchBar";
import { StyledAvatar } from "./styled/Avatar.styled";

import { StyledLogo } from "./styled/Logo.styled";
import { StyledNavbar } from "./styled/Navbar.styled";

import { StyledNavbarLink } from "./styled/NavbarLinks.styled";


function Navbar() {
  const [profileCardState, setProfileCard] = useState(false);

  var openProfileCard = () => {
    setProfileCard(true);
  };
  return (
    <StyledNavbar>
      <StyledLogo>
        <div>LOGO</div>
      </StyledLogo>

      <StyledNavbarLink>
        <div>
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
      </StyledNavbarLink>

      <SearchBar></SearchBar>

      <StyledAvatar size='60px'>
        <Avatar imageUrl="https://firebasestorage.googleapis.com/v0/b/eduqate-d65f5.appspot.com/o/chef1-removebg-preview.png?alt=media&token=10642367-5cf8-4dcf-8f77-f1ec3c004e3b"></Avatar>
        </StyledAvatar>
    </StyledNavbar>
  );
}

export default Navbar;
