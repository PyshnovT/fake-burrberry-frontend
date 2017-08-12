import React from "react";
import styled, { css } from "styled-components";
import { Desktop, Default } from "../../../common/Responsive";
import Button from "./Button";
import ColorPicker from "./ColorPicker";
import TextButton from "./TextButton";
import SizePicker from "./SizePicker";

const Preferences = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  margin-bottom: 2rem;

  @media only screen and (min-width: 62rem) {
    flex-direction: row;
    margin-top: 2rem;
    margin-bottom: 0;
  }
`;

const Separator = styled.hr`
  margin: 0;
  margin-top: 2rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 2rem;
  padding: 0;
  height: 1px;
  background-color: #c6c6c6;
  border: none;

  @media only screen and (min-width: 62rem) {
    display: none;
  }
`;

const BlockButton = Button.extend`
  display: block;
  margin-bottom: 1rem;
  width: 100%;
`;

export default function() {
  return (
    <Preferences>
      <div className="col-xs-12 col-lg-6">
        <ColorPicker />
        <Desktop>
          <BlockButton primary>ADD TO BAG</BlockButton>
        </Desktop>
      </div>
      <Separator />
      <div className="col-xs-12 col-lg-6">
        <Desktop>
          <SizePicker />
        </Desktop>
        <Default>
          <BlockButton primary>SELECT A SIZE</BlockButton>
        </Default>
        <BlockButton block>FIND IN STORE</BlockButton>
        <Default>
          <TextButton>NEED SIZE HELP?</TextButton>
        </Default>
      </div>
    </Preferences>
  );
}
