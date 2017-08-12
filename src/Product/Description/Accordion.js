import React, { Component } from "react";
import styled, { css } from "styled-components";
import AccordionButton from "../../common/AccordionButton";
import { Desktop, Default } from "../../common/Responsive";

const Container = styled.section`
  @media only screen and (min-width: 62rem) {
    margin-top: 4rem;
  }
`;
const Header = styled.header``;

const Content = styled.section`
  display: none;
  margin-bottom: 2rem;

  @media only screen and (min-width: 48rem) {
    margin-bottom: 1.5rem;
  }

  ${props =>
    props.active &&
    css`
      display: block;
  `};

  p {
    margin: 0;
    padding: 0;
    font-family: 'Lora', serif;
    font-size: 0.875rem;
    line-height: 24px;
  }

  ul {
    margin: 0;
    margin-top: 1.5rem;
    padding: 0;
    list-style: none;
  }

  li {
    margin: 0;
    font-family: 'Lora', serif;
    font-size: 0.875rem;
    line-height: 24px;
  }
`;

class Accordion extends Component {
  constructor(props) {
    super();
    this.state = { active: true };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState, prevProps) => ({
      active: !prevState.active
    }));
  }

  render() {
    return (
      <Container>
        <Header>
          <Default>
            <AccordionButton
              active={this.state.active}
              onClick={this.toggle}
              title="DESCRIPTION"
            />
          </Default>
        </Header>
        <Content active={this.state.active}>
          {this.props.children}
        </Content>
      </Container>
    );
  }
}

export default Accordion;
