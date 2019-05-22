import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 2.5rem;
  padding-left: 4rem;
  padding-right: 4rem;
  justify-content: center;
`;

const Nav = () => (
  <NavBar />
);

Nav.propTypes = {};

export default Nav;
