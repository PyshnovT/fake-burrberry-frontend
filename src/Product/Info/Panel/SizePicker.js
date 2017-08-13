import React, { Component } from "react";
import styled, { css } from "styled-components";
import TextButton from "./TextButton";
import SizeButton from "./SizeButton";

const Wrapper = styled.div`
  margin: 0;

  @media only screen and (min-width: 62rem) {
    margin-bottom: 2rem;
  }
`;

const Size = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Current = styled.p`
  margin: 0;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const Bold = styled.span`font-weight: bold;`;
const HelpButton = TextButton.extend`padding: 0;`;
const SizeButtons = styled.div``;

const sizes = ["S", "M", "L", "XL"];

class SizePicker extends Component {
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
    return (
      <Wrapper>
        <Size>
          <Current>
            Size: <Bold>{sizes[this.state.currentID]}</Bold>
          </Current>
          <HelpButton>NEED SIZE HELP?</HelpButton>
        </Size>
        <SizeButtons>
          {sizes.map((value, index) => {
            return (
              <SizeButton
                title={value}
                active={index == this.state.currentID}
                index={index}
                onClick={this.toggle}
              />
            );
          })}
        </SizeButtons>
      </Wrapper>
    );
  }
}

export default SizePicker;
