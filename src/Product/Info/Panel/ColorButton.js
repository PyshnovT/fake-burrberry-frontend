import React, { Component } from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  box-sizing: border-box;
  margin-right: 1rem;
  padding: 1.25rem;
  width: 0;
  height: 0;
  border: none;
  border-radius: 1.25rem;
  background-color: ${props => props.value};

  ${props =>
    props.active &&
    css`
      box-shadow: inset 0px 0px 0px 1px #232122;
  `};
`;

const Text = styled.span`display: none;`;

export default function(props) {
  return (
    <Button
      value={props.value}
      active={props.active}
      onClick={() => props.onClick(props.index)}
      type="button"
    >
      <Text>
        Change color to {props.name}
      </Text>
    </Button>
  );
}
