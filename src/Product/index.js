import React from 'react';
import styled from 'styled-components';
import Responsive from 'react-responsive';
import Info from './Info/';
import DesktopInfo from './Info/Desktop/';
import Description from './Description/';
import Delivery from './Delivery/';
import Recommendation from './Recommendation/';
import More from './More/';
import Title from '../common/Title';

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
  const Desktop = ({ children }) => <Responsive minWidth={992} children={children} />;
  const Default = ({ children }) => <Responsive maxWidth={991} children={children} />;

  return (
    <main className="container container-fluid">
      <Default><Title>Long Cotton Gabardine Car Coat</Title></Default>
      <Info color="#d4bdad" />
      <Separator />
      <Description />
      <Separator />
      <Delivery />
      <Separator />
      <Recommendation />
      <More />
    </main>
  );
}
