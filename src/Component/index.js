import React from "react";
import styled from "styled-components";
import { color } from "../ui/theme";
import "../index.css";

export const Title = styled.h2`
  font-size: 1.3rem;
  color: palevioletred;
  margin-bottom: 0;
`;

export const Card = styled.div`
  background: ${props => props.bgColor};
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 25rem;
  border-style: solid;
  border-width: 0.2rem;
  border-color: black;
  margin-bottom: 2rem;
  padding: 1rem;
  align-items: stretch;
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
  margin-top: 0;
`;

export const Wrapper = styled.div`
  flex-direction: column;
  align-items: stretch;
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
