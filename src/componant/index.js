import React from "react";
import styled from "styled-components";
import farm from "../agriculture.svg";
import geo from "../geography.svg";
import present from "../presentation.svg";
import { color } from "../ui/theme";
import Nav from "../nav/index";

const Title = styled.h3`
  font-size: 1.5em;
  text-align: left;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 2em;
  background: white;
`;

const Componant = styled.div`
  background: papayawhip;
  display: flex;
  justify-content: flex-start;
  align-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
`;

const Thing = styled.p`
  color: ${color.blue};
  :hover {
    color: red;
  }
`;

const Container = () => (
  <Wrapper style={{ justifyContent: "center", alignItems: "center" }}>
    <Nav />
    <Componant style={{ backgroundColor: color.lightTeal }}>
      <img src={farm} style={{ width: 70, height: 70 }} alt="farm" />
      <Title>Hello World, this is my first styled component!</Title>
    </Componant>
    <br />
    <Componant>
      <img
        src={geo}
        alt="geography"
        style={{ width: 70, height: 70 }}
        onMouseOver={e => (e.currentTarget.src = { farm })}
        onMouseOut={e => (e.currentTarget.src = { geo })}
      />
      <Title>Another Componant Here</Title>
    </Componant>
    <br />
    <Componant style={{ backgroundColor: color.pink }}>
      <img src={present} style={{ width: 70, height: 70 }} alt="presentation" />
      <Title>And here is another</Title>
      <p style={{ alignSelf: "right" }}>
        <Thing>Here is another componant!</Thing>
      </p>
    </Componant>
  </Wrapper>
);

Container.propTypes = {};

export default Container;
