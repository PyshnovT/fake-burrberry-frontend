import React from "react";
import styled, { css } from "styled-components";
import ButtonHelp from "./ButtonHelp";
import SizeButton from "./SizeButton";

const SizePicker = styled.div`
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
const Help = ButtonHelp.extend`padding: 0;`;
const SizeButtons = styled.div``;

export default function(props) {
  return (
    <SizePicker>
      <Size>
        <Current>
          Size: <Bold>{props.current}</Bold>
        </Current>
        <Help>NEED SIZE HELP?</Help>
      </Size>
      <SizeButtons>
        <SizeButton title="S" />
        <SizeButton title="M" />
        <SizeButton title="L" />
        <SizeButton title="XL" />
      </SizeButtons>
    </SizePicker>
  );
}
