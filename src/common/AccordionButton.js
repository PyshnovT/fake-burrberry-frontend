import React, { Component } from "react";
import styled, { css } from "styled-components";
import triangleIcon from "../assets/icon-open.svg";

const ToggleButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
  border: none;
  background: transparent;

  ::after {
    content: url(${triangleIcon});
    position: absolute;
    right: 1rem;
  }

  ${props =>
    props.active &&
    css`
    ::after {
      transform: rotate(180deg);
    }
  `};

  @media only screen and (min-width: 48rem) {
    padding-top: 1.5rem;
    padding-bottom: 1rem;

    ::after {
      display: none;
    }
  }
}
`;

const Title = styled.h2`
  margin: 0;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 20px;
`;

export default function(props) {
  return (
    <ToggleButton active={props.active} onClick={props.onClick}>
      <Title>
        {props.title}
      </Title>
    </ToggleButton>
  );
}
