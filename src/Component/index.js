import React from "../../node_modules/react";
import styled from "../../node_modules/styled-components";
import farm from "../agriculture.svg";
import geo from "../geography.svg";
import present from "../presentation.svg";
import { color } from "../ui/theme";
import Nav from "../nav/index";
//https://www.npmjs.com/package/react-star-rating-component
import StarRatingComponent from "react-star-rating-component";
//https://www.npmjs.com/package/react-switch
import Switch from "react-switch";

const Title = styled.h3`
  font-size: 1.3rem;
  text-align: left;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 2em;
  background: white;
`;

const Component = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  align-content: space-around;
  background: papayawhip;
  max-width: 40rem;
`;

// const Thing = styled.p`
//   color: ${color.blue};
//   :hover {
//     color: red;
//   }
// `;

//rating bar
class Rating extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;

    return (
      <div>
        <h2 style={{ fontSize: 25 }}>Rating value: {rating}</h2>
        <StarRatingComponent
          name="rating"
          starCount={5}
          value={rating}
          renderStarIcon={() => <span style={{ fontSize: 35}}></span>}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

//toggle bar
class SwitchExample extends React.Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ checked });
  }
 
  render() {
    return (
      <label>
        <h2 style={{ fontSize: 25 }}>Toggle:</h2>
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </label>
    );
  }
}

//NOTE: this needs to be more flexible, less inline css
const Container = () => (
  <Wrapper style={{ justifyContent: "center", alignItems: "center" }}>
    <Nav />
    <Component style={{ backgroundColor: color.lightTeal }}>
      <img src={farm} style={{ width: 70, height: 70 }} alt="farm" />
      <Title>Hello World, this is my first styled component!</Title>
    </Component>
    <br />
    <Component>
      <img
        src={geo}
        alt="geography"
        style={{ width: 70, height: 70 }}
        // onMouseOver={e => (e.currentTarget.src = { farm })}
        // onMouseOut={e => (e.currentTarget.src = { geo })}
      />
      <Title>Another Component Here</Title>
    </Component>
    <br />
    <Component style={{ backgroundColor: color.pink }}>
      <img src={present} style={{ width: 70, height: 70 }} alt="presentation" />
      <Title>And here is another</Title>
    </Component>
    <br />
    <Component style={{ backgroundColor: color.purple }}>
      <img src={present} style={{ width: 70, height: 70 }} alt="presentation" />
      <Title style={{ color: color.white }}>A Purple Component</Title>
    </Component>
    <br />
    <Component>
      <Rating />
    </Component>
    <Component>
    <SwitchExample />
    </Component>
  </Wrapper>
);

Container.propTypes = {};

export default Container;
