import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 1rem;
  margin: 2rem;
  color: palevioletred;
  background: ${props => props.bgColor};
  border: none;
  border-radius: 3px;
`;

//how to use a title/h1 in a input tag?
const title = styled.h1`
  color: palevioletred;
`;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    const {backgroundColor = "papayawhip"} = this.props;
    const {title = "Hover"} = this.props;
    return (
      <Input
        title={title}
        ref={this.inputRef}
        placeholder="Hover to focus!"
        onMouseEnter={() => {
          this.inputRef.current.focus();
        }}
        bgColor={backgroundColor}
      />
    );
  }
}

export default Form;
