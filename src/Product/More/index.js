import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const More = styled.section`
  margin-top: 1rem;

  @media only screen and (min-width: 48rem) {
    display: none;
  }
`;

/* вынести */
const Title = styled.h2`
  display: inline-block;
  margin: 0;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.19;
  border-bottom: 1px solid #111;

  @media only screen and (min-width: 48rem) {
    margin-bottom: 0.5rem;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-top: 0.5rem;
  margin-bottom: -1rem;
  padding: 0;
`;

const Link = styled.a`
  margin-bottom: 1rem;
  font-family: 'Lora', serif;
  font-size: 0.875rem;
  line-height: 17px;
  text-decoration: none;
  font-style: italic;
  color: #171717;
`;

export default function() {
  return (
    <More>
      <Title>MORE FOR YOU</Title>
      <Links>
        <Link href="index.html">Men’s Black Trench Coats</Link>
        <Link href="index.html">Men’s Short Trench Coats</Link>
        <Link href="index.html">Men’s Long Trench Coats</Link>
      </Links>
    </More>
  );
}
