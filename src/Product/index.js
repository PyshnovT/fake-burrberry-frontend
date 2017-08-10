import React from 'react';
import styled from 'styled-components';
import Info from './Info/';

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

export default function() {
  return (
    <main className="container container-fluid">
      <Title>Long Cotton Gabardine Car Coat</Title>
      <Info />
    </main>
  );
}
