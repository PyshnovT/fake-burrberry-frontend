import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const Footer = styled.footer`
  margin-top: 4rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #f3f3f3;
`;

const Settings = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  margin-top: 1px;

  @media only screen and (min-width: 48rem) {
    flex-direction: row;
  }
`;

const Button = styled.button`
  display: block;
  margin: 0;
  margin-bottom: 17px; /* 1rem */
  padding: 0;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 1.33;
  text-align: left;
  color: #999;
  background: transparent;
  border: none;

  @media only screen and (min-width: 48rem) {
    margin: 0;
    margin-top: 1px; /* макет */
    margin-right: 1.5rem;
  }
`;

const Help = styled.div`
  @media only screen and (min-width: 48rem) {
    display: none;
  }
`;

const Subtitle = styled.h3`
  margin: 0;
  padding: 0;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  line-height: 19px;
  text-align: center;
`;

const Link = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  font-family: 'Lora', serif;
  font-size: 0.875rem;
  font-style: italic;
  line-height: 1.21;
  color: #171717;
`;

export default function() {
  return (
    <Footer>
      <div className="container container-fluid">
        <Navigation />
        <Settings>
          <Button>Shipping country: Russian Federation</Button>
          <Button>Language: English</Button>
        </Settings>
        <Help>
          <Subtitle>Need help?</Subtitle>
          <Link href="index.html">Find out more and contact us</Link>
        </Help>
      </div>
    </Footer>
  );
};
