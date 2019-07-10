import React from "react";
import styled from "styled-components";
import "../index.css";

const FooterBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const FooterTitle = styled.h3`
  color: white;
`;

const Footer = title => (
  <FooterBar>
    <FooterTitle>{title}</FooterTitle>
  </FooterBar>
);

Footer.propTypes = {};

export default Footer;
