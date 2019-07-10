import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { Card, Title, Paragraph, Wrapper } from "../src/Component";
import SwitchExample from "../src/toggle";
import Rating from "../src/rating";
import { color } from "../src/ui/theme";
import farm from "../src/agriculture.svg";
import geo from "../src/geography.svg";
import present from "../src/presentation.svg";
import Form from "../src/hover";
import Nav from "../src/nav";
import { Grid, ColorName } from "../src/colors";
import { Theme } from "../src/button";

const colorArray = Object.values(color);

const StyledImage = styled.div`
  padding: 0.5rem;
`;

const BigWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

storiesOf("Components", module)
  .add("Effects", () => (
    <Fragment>
      <Nav />
      <Form backgroundColor="papayawhip" title="Hover" />
      <Form backgroundColor={color.lightTeal} title="Hover" />
      <Form backgroundColor={color.yellow} title="Hover" />
    </Fragment>
  ))
  .add("Colors", () => (
    <Fragment>
      <Nav />
      <Grid>
        {colorArray.map(c => (
          <ColorName fontColor={c} bgColor={c}>
            Some Text
          </ColorName>
        ))}
      </Grid>
    </Fragment>
  ))
  .add("Theme", () => (
    <Fragment>
      <Theme />
    </Fragment>
  ))
  .add("Card Component", () => (
    <Fragment>
      <Nav />
      <BigWrapper>
        <Wrapper style={{ paddingLeft: "15rem" }}>
          <Card backgroundColor={color.white}>
            <Wrapper>
              <StyledImage>
                <img src={geo} style={{ width: 70, height: 70 }} alt="geo" />
              </StyledImage>
            </Wrapper>
            <Wrapper>
              <Paragraph>
                So here is some text I've placed. Here is some more too. And another sentence here. 
              </Paragraph>
            </Wrapper>
          </Card>
          <Card backgroundColor={color.white}>
            <Wrapper>
              <StyledImage>
                <img src={farm} style={{ width: 70, height: 70 }} alt={Title} />
              </StyledImage>
            </Wrapper>
            <Wrapper>
              <Title>Farm Card</Title>
              <Paragraph>So here is some text I've placed</Paragraph>
            </Wrapper>
          </Card>
          <Card backgroundColor={color.white}>
            <Wrapper>
              <StyledImage>
                <img
                  src={present}
                  style={{ width: 70, height: 70 }}
                  alt={Title}
                />
              </StyledImage>
            </Wrapper>
            <Wrapper>
              <Title>Present Card</Title>
              <Paragraph>
                <ul>
                  <li>Some text</li>
                  <li>Some more</li>
                  <li>And some</li>
                </ul>
              </Paragraph>
            </Wrapper>
          </Card>
          <Card backgroundColor={color.white}>
            <Wrapper>
              <Title>Geography Card</Title>
              <Paragraph>So here is some text I've placed</Paragraph>
            </Wrapper>
            <Wrapper>
              <StyledImage>
                <img src={geo} style={{ width: 70, height: 70 }} alt={Title} />
              </StyledImage>
            </Wrapper>
          </Card>
        </Wrapper>
        <Wrapper style={{ paddingLeft: "15rem" }}>
          <SwitchExample />
          <SwitchExample />
          <Rating />
        </Wrapper>
      </BigWrapper>
    </Fragment>
  ))
  .add("Toggle", () => (
    <Fragment>
      <Nav />
      <SwitchExample />
    </Fragment>
  ))
  .add("Switch", () => (
    <Fragment>
      <Nav />
      <SwitchExample title="Switch" />
    </Fragment>
  ))
  .add("Rating", () => (
    <Fragment>
      <Nav />
      <Rating />
    </Fragment>
  ));
