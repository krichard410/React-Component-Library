import React from "react";
import styled from "styled-components";
import { color } from "../ui/theme";
import "../index.css";

export const ColorName = styled.h3`
  font-size: 1.3rem;
  text-align: left;
  color: ${props => props.color};
  background: ${props => props.bgColor};
  justify-self: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: baseline;
  align-content: space-around;
  background: ${props => props.bgColor};
`;

//NOTE: this needs to be more flexible, less inline css
//next few lines sets the default values for the Container const
const colorGrid = ({
  backgroundColor = color.papaya,
  title,
  fontColor = color.white,
  children
}) => (
  <Grid bgColor={backgroundColor}>
    <ColorName color={fontColor} bgColor={backgroundColor}>{title}</ColorName>
    {children}
  </Grid>
);

colorGrid.propTypes = {};

export default colorGrid;
