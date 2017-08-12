import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-weight: 400;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 1.17;
  border-radius: 2px;
  border: 1px solid #999;
  background-color: white;
  color: #171717;

  ${props =>
    props.primary &&
    css`
    border: 1px solid #171717;
    background-color: #171717;
    color: #fff;
  `};

  @media only screen and (min-width: 62rem) {
    border: 1px solid #171717;
    background-color: transparent;
    color: #171717;

    ${props =>
      props.primary &&
      css`
      background-color: #171717;
      color: #fff;
    `};
  }
`;

export default Button;
