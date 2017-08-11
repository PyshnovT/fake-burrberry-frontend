import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import triangleIcon from '../../assets/icon-open.svg';

/* вынести в common */
const Container = styled.section`
  @media only screen and (min-width: 48rem) {
    margin-top: 3rem;
  }
`;

const ToggleButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
  border: none;
  background: transparent;

  ::after {
    content: url(${triangleIcon});
  }

  ${ props => props.active && css`
    ::after {
      transform: rotate(180deg);
    }
  `};

  @media only screen and (min-width: 48rem) {
    display: none;
  }
}
`;

const Title = styled.h2`
  margin: 0;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 20px;
`;

const Content = styled.section`
  display: none;
  flex-direction: row;
  padding: 0.5rem;

  ${ props => props.active && css`
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
          <ToggleButton active={this.state.active} onClick={this.toggle}>
            <Title>SHIPPING & RETURNS</Title>
          </ToggleButton>
          <Content active={this.state.active}>
            {this.props.children}
          </Content>
        </Container>
      );
  }
}

export default ShippingAccordion;
