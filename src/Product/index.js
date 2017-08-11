import React from 'react';
import styled from 'styled-components';
import Info from './Info/';
import Description from './Description/';
import Delivery from './Delivery/';
import Recommendation from './Recommendation/'

const Title = styled.h1`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-family: 'Lora', serif;
  font-weight: normal;
  line-height: 1.2;
  color: #111;

  @media only screen and (min-width: 48rem) {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
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
    <main className="container container-fluid">
      <Title>Long Cotton Gabardine Car Coat</Title>
      <Info />
      <Separator />
      <Description />
      <Separator />
      <Delivery />
      <Separator />
      <Recommendation />
    </main>
  );
}
