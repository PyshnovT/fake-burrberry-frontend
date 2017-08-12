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
    const colorValues = ["#232122", "#cfa880"];
    const colorNames = ["Black", "Honey"];

    const buttonsList = colorValues.map((value, index) => {
      return (
        <ColorButton
          value={value}
          active={index == this.state.currentID}
          index={index}
          name={colorNames[index]}
          onClick={this.toggle}
        />
      );
    });

    return (
      <Wrapper>
        <CurrentColor>
          Colour: <Bold>{colorNames[this.state.currentID]}</Bold>
        </CurrentColor>
        <ColorButtons>
          {buttonsList}
        </ColorButtons>
      </Wrapper>
    );
  }
}

export default ColorPicker;
