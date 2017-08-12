import React from "react";
import styled, { css } from "styled-components";
import ColorButton from "./ColorButton";

const ColorPicker = styled.div`
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

export default function() {
  return (
    <ColorPicker>
      <CurrentColor>
        Colour: <Bold>Black</Bold>
      </CurrentColor>
      <ColorButtons>
        <ColorButton value="#232122" />
        <ColorButton value="#cfa880" />
      </ColorButtons>
    </ColorPicker>
  );
}
