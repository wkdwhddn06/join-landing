import React, { useState } from "react";
import NavItem from "./NavItem.jsx";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [sn, setSn] = useState(0);

  return (
    <NavContainer className="Nav">
      <StyledLink
        exact
        to="/"
        isActive={(match, location) => {
          if (!match) {
            return false;
          }

          setSn(0);

          const eventID = parseInt(match.params.eventID);
          return !isNaN(eventID) && eventID % 2 === 1;
        }}
      >
        {" "}
        <NavItem name="JOIN" temp={0} sn={sn} />{" "}
      </StyledLink>
      <StyledLink
        exact
        to="/custom"
        isActive={(match, location) => {
          if (!match) {
            return false;
          }

          setSn(1);

          const eventID = parseInt(match.params.eventID);
          return !isNaN(eventID) && eventID % 2 === 1;
        }}
      >
        {" "}
        <NavItem name="CUSTOM" temp={1} sn={sn} />{" "}
      </StyledLink>
      <StyledLink
        exact
        to="/support"
        isActive={(match, location) => {
          if (!match) {
            return false;
          }

          setSn(2);

          const eventID = parseInt(match.params.eventID);
          return !isNaN(eventID) && eventID % 2 === 1;
        }}
      >
        {" "}
        <NavItem name="SUPPORT" temp={2} sn={sn} />{" "}
      </StyledLink>
      <StyledLink
        exact
        to="/business"
        isActive={(match, location) => {
          if (!match) {
            return false;
          }

          setSn(3);

          const eventID = parseInt(match.params.eventID);
          return !isNaN(eventID) && eventID % 2 === 1;
        }}
      >
        {" "}
        <NavItem name="BUSINESS" temp={3} sn={sn} />{" "}
      </StyledLink>
    </NavContainer>
  );
};

const StyledLink = styled(NavLink)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const NavContainer = styled.div`
  height: 55px;
  width: auto;
  border-bottom: 0.2px solid #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media only screen and (max-width: 800px) {
    justify-content: space-evenly;
  }
`;

export default Nav;
