import React, { Component } from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  box-sizing: border-box;
  margin-right: 1rem;
  padding: 1.25rem;
  width: 0;
  height: 0;
  border: none;
  border-radius: 1.25rem;
  background-color: ${props => props.value};

  ${props =>
    props.active &&
    css`
      box-shadow: inset 0px 0px 0px 1px #232122;
  `};
`;

const Text = styled.span`display: none;`;

class ColorButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button
        value={this.props.value}
        active={this.props.active}
        onClick={() => this.props.onClick(this.props.index)}
        type="button"
      >
        <Text>
          Change color to {this.props.name}
        </Text>
      </Button>
    );
  }
}

export default ColorButton;
