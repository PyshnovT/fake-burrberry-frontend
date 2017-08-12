import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: auto;
  height: 400px;
  vertical-align: top;

  @media only screen and (min-width: 62rem) {
    height: 861px;
  }
`;

export default function(props) {
  return (
    <Image src={props.src} alt={props.alt} />
  );
}
