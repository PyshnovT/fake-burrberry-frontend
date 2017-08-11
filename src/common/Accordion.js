import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import triangleIcon from '../assets/icon-close.svg'

const Container = styled.section``;
const Header = styled.header``;

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
    padding-top: 1.5rem;
    padding-bottom: 1rem;

    ::after {
      display: none;
    }
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
  margin-bottom: 2rem;

  @media only screen and (min-width: 48rem) {
    margin-bottom: 1.5rem;
  }

  ${ props => props.active && css`
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
    this.state = {active: false};
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
          <ToggleButton active={this.state.active} onClick={this.toggle}>
            <Title>DESCRIPTION</Title>
          </ToggleButton>
        </Header>
        <Content active={this.state.active}>
          {this.props.children}
        </Content>
      </Container>
    );
  }
}

export default Accordion;
