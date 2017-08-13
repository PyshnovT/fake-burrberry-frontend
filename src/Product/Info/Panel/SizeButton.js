import React from "react";
import styled, { css } from "styled-components";
import Button from "./Button";

const SizeButton = Button.extend`
  margin-right: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Title = styled.span`
  ${props =>
    props.active &&
    css`
      font-weight: bold;
  `};
`;

export default function(props) {
  return (
    <SizeButton
      active={props.active}
      onClick={() => props.onClick(props.index)}
      type="button"
    >
      <Title active={props.active}>
        {props.title}
      </Title>
    </SizeButton>
  );
}
