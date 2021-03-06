import React from "react";
import styled, { css } from "styled-components";

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  height: 400px;
  vertical-align: top;

  @media only screen and (min-width: 62rem) {
    height: 861px;
  }
`;

export default Image;
