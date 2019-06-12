//https://www.npmjs.com/package/react-switch
import Switch from "react-switch";
import React from "react";

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
        const {title="Toggle:"} = this.props;
      return (
        <label>
          <h2 style={{ fontSize: 25 }}>{title}</h2>
          <Switch onChange={this.handleChange} checked={this.state.checked} />
        </label>
      );
    }
  }

  export default SwitchExample;