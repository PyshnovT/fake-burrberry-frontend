import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { Lg, ToLg } from "../common/Responsive";
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
  return (
    <main>
      <Lg>
        <Background color="#d4bdad">
          <div className="container">
            <Info />
          </div>
        </Background>
      </Lg>
      <div className="container container-fluid">
        <ToLg>
          <Title>Long Cotton Gabardine Car Coat</Title>
          <Info />
        </ToLg>
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
