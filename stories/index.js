import React from "react";
import { storiesOf } from "@storybook/react";
import Component from "../src/Component";
import SwitchExample from "../src/toggle";
import Rating from "../src/rating";
import { color } from "../src/ui/theme";
import farm from "../src/agriculture.svg";
import geo from "../src/geography.svg";
import present from "../src/presentation.svg";
import Form from "../src/hover";
import styled from "styled-components";
import Nav from "../src/nav";
import Grid from "../src/colors";
import Title from "../src/colors";

//this should be bad practice
const holder = styled.div``;

storiesOf("Components", module)
  .add("Effects", () => (
    <holder>
      <Nav />
      <Form backgroundColor="papayawhip" title="Hover" />
      <Form backgroundColor={color.lightTeal} title="Hover" />
      <Form backgroundColor={color.yellow} title="Hover" />
    </holder>
  ))
  .add("Colors", () => (
    <holder>
      <Nav />
      <Grid backgroundColor={color.black} title="Black">
        <Title fontColor={color.white}/>
      </Grid>
    </holder>
  ))
  .add("Minimal Card", () => (
    <holder>
      <Nav />
      <Component
        backgroundColor={color.white}
        img={geo}
        alt="geo"
        title="Minimalistic 🌮"
      />
    </holder>
  ))
  .add("Floral Card", () => (
    <holder>
      <Nav />
      <Component
        backgroundColor={color.lightTeal}
        img={farm}
        alt="farm"
        title="Floral 🌮"
      >
        <p>Hi!</p>
      </Component>
    </holder>
  ))
  .add("Earthy Card", () => (
    <holder>
      <Nav />
      <Component
        backgroundColor={color.blue}
        img={present}
        alt="present"
        title="Earthy 🌮"
      />
    </holder>
  ))
  .add("Toggle", () => (
    <holder>
      <Nav />
      <SwitchExample />
    </holder>
  ))
  .add("Switch", () => (
    <holder>
      <Nav />
      <SwitchExample title="Switch" />
    </holder>
  ))
  .add("Rating", () => (
    <holder>
      <Nav />
      <Rating />
    </holder>
  ));
