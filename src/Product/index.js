import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import Responsive from "react-responsive";
import Info from "./Info/";
import Description from "./Description/";
import Delivery from "./Delivery/";
import Recommendation from "./Recommendation/";
import More from "./More/";
import Title from "../common/Title";

const Background = styled.div`
  ${props =>
    props.color &&
    css`
      background-color: ${props.color};
  `};
`;

const Separator = styled.hr`
  position: relative;
  left: 50%;
  right: 50%;
  margin: 0;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 0;
  width: 100vw;
  height: 1px;
  background-color: #c6c6c6;
  border: none;

  @media only screen and (min-width: 48rem) {
    display: none;
  }
`;

export default function() {
  const Desktop = ({ children }) =>
    <Responsive minWidth={992} children={children} />;
  const Default = ({ children }) =>
    <Responsive maxWidth={991} children={children} />;

  return (
    <main>
      <Desktop>
        <Background color="#d4bdad">
          <div className="container">
            <Info />
          </div>
        </Background>
      </Desktop>
      <div className="container container-fluid">
        <Default>
          <Title>Long Cotton Gabardine Car Coat</Title>
          <Info />
        </Default>
        <Separator />
        <Description />
        <Separator />
        <Delivery />
        <Separator />
        <Recommendation />
        <More />
      </div>
    </main>
  );
}
