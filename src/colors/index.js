import React from "react";
import styled from "styled-components";
import { color } from "../ui/theme";
import "../index.css";

const Title = styled.h3`
  font-size: 1.3rem;
  text-align: left;
  color: ${props => props.fontColor};
`;

const Grid = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  align-content: space-around;
  background: ${props => props.bgColor};
  max-width: 12rem;
`;

//NOTE: this needs to be more flexible, less inline css
//next few lines sets the default values for the Container const
const colorGrid = ({
  backgroundColor = color.papaya,
  title,
  fontColor,
  children
}) => (
  <Grid bgColor={backgroundColor}>
    <Title color={fontColor}>{title}</Title>
    {children}
  </Grid>
);

colorGrid.propTypes = {};

export default colorGrid;
