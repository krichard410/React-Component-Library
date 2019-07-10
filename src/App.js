import React, { Fragment } from "react";
import styled from "styled-components";
import { Card, Title, Paragraph, Wrapper } from "../src/Component";
import { color } from "../src/ui/theme";
import farm from "../src/agriculture.svg";
import geo from "../src/geography.svg";
import present from "../src/presentation.svg";
import { NavTitle } from "../src/nav";
import Form from "../src/hover";

import "./index.css";

const StyledImage = styled.div`
  padding: 0.5rem;
`;

const BigWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 0 0 0;
`;

const App = () => (
  <Fragment>
    <BigWrapper style={{ backgroundColor: "#2d3561", marginBottom: "3rem" }}>
      <NavTitle>Blog</NavTitle>
    </BigWrapper>
    <BigWrapper>
      <Wrapper>
        <Card backgroundColor={color.white}>
          <Wrapper style={{ width: "20%" }}>
            <StyledImage>
              <img src={geo} style={{ width: 70, height: 70 }} alt="geo" />
            </StyledImage>
          </Wrapper>
          <Wrapper style={{ width: "80%" }}>
            <Paragraph>
              Hello! Welcome to this mini, mini blog. This is a short blog about
              anything that comes to mind.
            </Paragraph>
          </Wrapper>
        </Card>
        <Card backgroundColor={color.white}>
          <Wrapper style={{ width: "20%", padding: "0 0 0 0" }}>
            <StyledImage>
              <img src={farm} style={{ width: 70, height: 70 }} alt={Title} />
            </StyledImage>
          </Wrapper>
          <Wrapper style={{ width: "80%" }}>
            <Title>Learning React for the First Time</Title>
            <Paragraph>
              For the past few weeks, I've been diving into learning React.
            </Paragraph>
          </Wrapper>
        </Card>
        <Card backgroundColor={color.white}>
          <Wrapper style={{ width: "20%" }}>
            <StyledImage>
              <img
                src={present}
                style={{ width: 70, height: 70 }}
                alt={Title}
              />
            </StyledImage>
          </Wrapper>
          <Wrapper style={{ width: "80%" }}>
            <Title>What's the deal with those Hooks?</Title>
            <Paragraph>
              <ul>
                <li>React Hooks?</li>
                <li>Oh yes,</li>
                <li>
                  Those ones{" "}
                  <span role="img" aria-label="img">
                    😂
                  </span>
                </li>
              </ul>
            </Paragraph>
          </Wrapper>
        </Card>
        <Card backgroundColor={color.white}>
          <Wrapper style={{ width: "50%" }}>
            <Title>CSS Tricks and Tips</Title>
            <Paragraph>There's Flexbox and Grids, right?</Paragraph>
          </Wrapper>
          <Wrapper style={{ width: "50%" }}>
            <StyledImage>
              <img src={geo} style={{ width: 70, height: 70 }} alt={Title} />
            </StyledImage>
          </Wrapper>
        </Card>
        <Card backgroundColor={color.white}>
          <Wrapper style={{ width: "20%", padding: "0 0 0 0" }}>
            <StyledImage>
              <img src={farm} style={{ width: 70, height: 70 }} alt={Title} />
            </StyledImage>
          </Wrapper>
          <Wrapper style={{ width: "80%" }}>
            <Title>A Beginner's Guide to Front-End Dev</Title>
            <Paragraph>
              Here's everything you should look at when exporing Front-End
              development.
            </Paragraph>
          </Wrapper>
        </Card>
        <Card
          style={{
            backgroundColor: "#2d3561",
            border: "none",
            backgroundImage: "none"
          }}
        >
          <Wrapper style={{ width: "90%", marginLeft: "1rem" }}>
            <Title style={{ color: "white" }}>Subscribe to the Blog</Title>
            <Paragraph style={{ color: "white" }}>
              Stay up to date with each issue delivered to your inbox!
            </Paragraph>
            <Form />
          </Wrapper>
        </Card>
      </Wrapper>
    </BigWrapper>
  </Fragment>
);

App.propTypes = {};

export default App;
