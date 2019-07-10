import React from "react";
import styled from "styled-components";
import { color } from "../ui/theme";
import "../index.css";

export const Title = styled.h2`
  font-size: 1.4rem;
  color: #2d3561;
  margin-bottom: 0;
`;

export const Card = styled.div`
  background: ${props => props.bgColor};
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 35rem;
  min-height: 10rem;
  border-radius: 5px;
  margin-bottom: 3rem;
  padding: 1rem;
  align-items: stretch;
  justify-content: space-between;
  border-left: 0.3rem solid #3ec8ac;
  border-right: 0.3rem solid #4e90a4;
  box-sizing: border-box;
  background-position: 0 0, 0 100%;
  background-repeat: no-repeat;
  background-size: 100% 0.3rem;
  background-image: -webkit-linear-gradient(left, #3ec8ac 0%, #4e90a4 100%),
    -webkit-linear-gradient(left, #3ec8ac 0%, #4e90a4 100%);
  background-image: -moz-linear-gradient(left, #3ec8ac 0%, #4e90a4 100%),
    -moz-linear-gradient(left, #3ec8ac 0%, #4e90a4 100%);
  background-image: -o-linear-gradient(left, #3ec8ac 0%, #4e90a4 100%),
    -o-linear-gradient(left, #3ec8ac 0%, #4e90a4 100%);
  background-image: linear-gradient(to right, #3ec8ac 0%, #4e90a4 100%),
    linear-gradient(to right, #3ec8ac 0%, #4e90a4 100%);

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  margin-top: 0;
`;

export const Wrapper = styled.div`
  flex-direction: column;
  align-items: stretch;
  align-self: center;
`;

const Container = ({
  backgroundColor = color.papaya,
  title,
  details,
  children
}) => (
  <Card bgColor={backgroundColor}>
    <Wrapper>
      <Title>{title}</Title>
      <Paragraph>{details}</Paragraph>
      {children}
    </Wrapper>
  </Card>
);

Container.propTypes = {};

export default Container;
