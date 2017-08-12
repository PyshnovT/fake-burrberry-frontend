import React, { Component } from "react";
import styled, { css } from "styled-components";
import AccordionButton from "../../common/AccordionButton";
import { Lg, ToLg, Mobile } from "../../common/Responsive";

const Container = styled.section`
  @media only screen and (min-width: 48rem) {
    margin-top: 3rem;
  }
`;

const Content = styled.section`
  display: none;
  flex-direction: row;
  padding: 0.5rem;

  ${props =>
    props.active &&
    css`
      display: flex;
  `};

  @media only screen and (min-width: 48rem) {
    padding: 0;
  }
`;

class ShippingAccordion extends Component {
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
        <Mobile>
          <AccordionButton
            active={this.state.active}
            onClick={this.toggle}
            title="SHIPPING & RETURNS"
          />
        </Mobile>
        <Content active={this.state.active}>
          {this.props.children}
        </Content>
      </Container>
    );
  }
}

export default ShippingAccordion;
