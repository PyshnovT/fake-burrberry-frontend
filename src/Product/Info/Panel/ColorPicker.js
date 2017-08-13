import React, { Component } from "react";
import styled, { css } from "styled-components";
import ColorButton from "./ColorButton";

const Wrapper = styled.div`
  @media only screen and (min-width: 62rem) {
    margin-bottom: 1.5rem;
  }
`;

const CurrentColor = styled.p`
  margin: 0;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const Bold = styled.span`font-weight: bold;`;

const ColorButtons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const colors = [
  { label: "Black", value: "#232122" },
  { label: "Honey", value: "#cfa880" }
];

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = { currentID: 0 };
    this.toggle = this.toggle.bind(this);
  }

  toggle(index) {
    this.setState({
      currentID: index
    });
  }

  render() {
    const buttonsList = colors.map((color, index) => {
      return (
        <ColorButton
          value={color.value}
          active={index == this.state.currentID}
          index={index}
          name={color.label}
          onClick={this.toggle}
        />
      );
    });

    return (
      <Wrapper>
        <CurrentColor>
          Colour: <Bold>{colors[this.state.currentID].label}</Bold>
        </CurrentColor>
        <ColorButtons>
          {buttonsList}
        </ColorButtons>
      </Wrapper>
    );
  }
}

export default ColorPicker;
