import React from "react";
import styled from "styled-components";
import "../index.css";

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem 2rem 3rem 2rem;
  justify-content: center;
  align-items: center;
`;

export const NavTitle = styled.h1`
  margin-bottom: 3rem;
  color: white;
`;

const Nav = title => (
  <NavBar>
    <NavTitle>{title}</NavTitle>
  </NavBar>
);

Nav.propTypes = {};

export default Nav;
