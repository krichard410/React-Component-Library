import React, { Fragment } from "react";
import styled from "styled-components";
import { Card, Title, Paragraph, Wrapper } from "../src/Component";
import { color } from "../src/ui/theme";

import "./index.css";

const BigWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 0 0 0;
`;

const App = () => (
  <Fragment>
    <h2>Heeey there, this is Kirsten</h2>Here is some text
  </Fragment>
);

App.propTypes = {};

export default App;
