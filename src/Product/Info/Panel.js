import React from 'react';
import styled, { css } from 'styled-components';
import ColorButton from './ColorButton';

const Wrapper = styled.div`
  margin: 0;
  margin-top: 1rem;
  padding: 0;

  @media only screen and (min-width: 48rem) {
    margin-top: 0;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #111;
`;

const Price = styled.div`
  margin: 0;
  margin-bottom: 1rem;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 1rem;
  line-height: 20px;
`;

const Articul = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 1.33;
`;

const CurrentColor = styled.p`
  margin: 0;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 1.33;
`;

const ColorPicker = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SizeWrapper = styled.div`
  margin-bottom: 2.5rem;
  margin-top: 2rem;
  border-top: 1px solid #c6c6c6;
`;

const SizeButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

/* вынести */
const Button = styled.button`
  margin-bottom: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-weight: 400;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 1.17;
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;

  ${ props => props.black && css`
    border: 1px solid #171717;
    background-color: #171717;
    color: #fff;
  `};

  ${ props => props.white && css`
    border: 1px solid #999;
    background-color: white;
    color: #171717;
  `};
`;

const ButtonHelp = styled.button`
  margin-top: 1px;
  padding: 0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 1.33;
  border: none;
  background: transparent;
`;

export default function() {
  return (
    <Wrapper>
      <Description>
        <Price>110 000 руб.</Price>
        <Articul>Item 39428531</Articul>
      </Description>
      <CurrentColor>Colour: Honey</CurrentColor>
      <ColorPicker>
        <ColorButton value="#232122" />
        <ColorButton value="#cfa880" active />
      </ColorPicker>
      <SizeWrapper>
        <SizeButtons>
          <Button black>SELECT A SIZE</Button>
          <Button white>FIND IN STORE</Button>
        </SizeButtons>
        <ButtonHelp>NEED SIZE HELP?</ButtonHelp>
      </SizeWrapper>
    </Wrapper>
  );
};
