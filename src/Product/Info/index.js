import React from 'react';
import styled, { css } from 'styled-components';
import Images from './Images';
import Responsive from 'react-responsive';
import Image from './Image';
import Panel from './Panel';

const Info = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: -0.5rem;
  margin-right: -0.5rem;

  @media only screen and (min-width: 48rem) {
    flex-direction: row;
  }

  @media only screen and (min-width: 62rem) {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;

    ${ props => props.color && css`
        background-color: ${props.color};
    `};
  }
`;


export default function(props) {
  const Desktop = ({ children }) => <Responsive minWidth={992} children={children} />;
  const Default = ({ children }) => <Responsive maxWidth={991} children={children} />;

  return (
    <Info color={props.color}>
      <div className="col-xs-12 col-md-7 col-lg-6">
        <Desktop><Image src="img/guy@3x.jpg" alt="Long Cotton Gabardine Car Coat"/></Desktop>
        <Default><Images /></Default>
      </div>
      <div className="col-xs-12 col-md-5 col-lg-6">
        <Panel />
      </div>
    </Info>
  );
};
