import React from "react";
import styled, { css } from "styled-components";
import { Desktop, Default } from "../../../common/Responsive";
import Title from "../../../common/Title";
import Preferences from "./Preferences";

const Wrapper = styled.div`
  margin: 0;
  margin-top: 1rem;
  padding: 0;

  @media only screen and (min-width: 48rem) {
    margin-top: 0;
  }
`;

const PanelTitle = Title.extend`
  display: none;

  @media only screen and (min-width: 62rem) {
    display: block;
    margin: 0;
    margin-bottom: 0.5rem;
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

export default function() {
  return (
    <Wrapper>
      <PanelTitle>
        Long Cotton Gabardine Car Coat Coat Coat Coat Coat
      </PanelTitle>
      <Description>
        <Price>110 000 руб.</Price>
        <Default>
          <Articul>Item 39428531</Articul>
        </Default>
      </Description>
      <Preferences />
    </Wrapper>
  );
}
