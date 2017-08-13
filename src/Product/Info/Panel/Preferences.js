import React from "react";
import styled, { css } from "styled-components";
import { Lg, ToLg } from "../../../common/Responsive";
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
    margin-bottom: 0.5rem;
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
        <Lg>
          <BlockButton primary>ADD TO BAG</BlockButton>
        </Lg>
      </div>
      <Separator />
      <div className="col-xs-12 col-lg-6">
        <Lg>
          <SizePicker />
        </Lg>
        <ToLg>
          <BlockButton primary>SELECT A SIZE</BlockButton>
        </ToLg>
        <BlockButton block>FIND IN STORE</BlockButton>
        <ToLg>
          <TextButton>NEED SIZE HELP?</TextButton>
        </ToLg>
      </div>
    </Preferences>
  );
}
