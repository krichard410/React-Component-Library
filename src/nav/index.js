import React from 'react';
import styled from 'styled-components';
import "../index.css";

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem 2rem 3rem 2rem;
  justify-content: center;
`;

const NavTitle = styled.h1`
  color: palevioletred;
`;

const Nav = () => (
  <NavBar>
    <NavTitle>Components Library</NavTitle>
  </NavBar>
);

Nav.propTypes = {};

export default Nav;
