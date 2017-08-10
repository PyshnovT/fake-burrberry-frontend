import React from 'react';
import styled from 'styled-components';
import Images from './Images';
import Panel from './Panel';

const Info = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: -0.5rem;
  margin-right: -0.5rem;

  @media only screen and (min-width: 48rem) {
    flex-direction: row;
  }
`;


export default function() {
  return (
    <Info>
      <div className="col-xs-12 col-md-7">
        <Images />
      </div>
      <div className="col-xs-12 col-md-5">
        <Panel />
      </div>
    </Info>
  );
};
