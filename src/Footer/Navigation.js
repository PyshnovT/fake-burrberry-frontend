import React from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
  display: none;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  margin-top: 1px;
  margin-bottom: 1.25rem;

  @media only screen and (min-width: 48rem) {
    display: flex;
  }
`;

const List = styled.nav`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 0.75rem;
`;

const Link = styled.a`
  margin-bottom: 0.75rem;
  padding: 0;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1rem;
  text-decoration: none;
  color: #999;
`;

export default function() {
  return (
    <Navigation>
      <div className="col-md-3">
        <Title>CUSTOMER SERVICE</Title>
        <List>
          <Link href="#">Contact Us</Link>
          <Link href="#">Payment</Link>
          <Link href="#">Shipping</Link>
          <Link href="#">Returns</Link>
          <Link href="#">Faqs</Link>
          <Link href="#">Live Chat</Link>
          <Link href="#">The Burberry App</Link>
          <Link href="#">Store Locator</Link>
        </List>
      </div>
      <div className="col-md-3">
        <Title>OUR COMPANY</Title>
        <List>
          <Link href="#">Our History</Link>
          <Link href="#">Burberry Group Plc</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Corporate Responsibility</Link>
          <Link href="#">Site map</Link>
        </List>
      </div>
      <div className="col-md-3">
        <Title>LEGAL & COOKIES</Title>
        <List>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Cookie Policy</Link>
          <Link href="#">Accessibility Statement</Link>
          <Link href="#">Japan Only - SCTL Indications</Link>
        </List>
      </div>
    </Navigation>
  );
};
