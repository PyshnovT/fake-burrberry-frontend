import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  left: 50%;
  right: 50%;
  margin: 0;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 0;
  width: 100vw;

  @media only screen and (min-width: 48rem) {
    position: static;
    left: 0;
    right: 0;
    margin-left: 0;
    margin-right: 0;
    padding-right: 0.5rem;
    width: 100%;
  }
`;

const Images = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: auto;
`;

const Image = styled.img`
  width: auto;
  height: 400px;

  @media only screen and (min-width: 48rem) {
    height: 576px;
  }
`;

export default function() {
  return (
    <Wrapper>
      <Images>
        <Image src="img/guy@3x.jpg" alt="Long Cotton Gabardine Car Coat" />
        <Image src="img/guy4@3x.jpg" alt="Long Cotton Gabardine Car Coat" />
        <Image src="img/guy2@3x.jpg" alt="Long Cotton Gabardine Car Coat" />
        <Image src="img/guy3@3x.jpg" alt="Long Cotton Gabardine Car Coat" />
        <Image src="img/guy5@3x.jpg" alt="Long Cotton Gabardine Car Coat" />
      </Images>
    </Wrapper>
  );
};
