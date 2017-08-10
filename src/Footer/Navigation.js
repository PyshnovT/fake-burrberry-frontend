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
          <Link class="footer-link" href="#">Payment</Link>
          <Link class="footer-link" href="#">Shipping</Link>
          <Link class="footer-link" href="#">Returns</Link>
          <Link class="footer-link" href="#">Faqs</Link>
          <Link class="footer-link" href="#">Live Chat</Link>
          <Link class="footer-link" href="#">The Burberry App</Link>
          <Link class="footer-link" href="#">Store Locator</Link>
        </List>
      </div>
      <div className="col-md-3">
        <Title>OUR COMPANY</Title>
        <List>
          <Link class="footer-link" href="#">Our History</Link>
          <Link class="footer-link" href="#">Burberry Group Plc</Link>
          <Link class="footer-link" href="#">Careers</Link>
          <Link class="footer-link" href="#">Corporate Responsibility</Link>
          <Link class="footer-link" href="#">Site map</Link>
        </List>
      </div>
      <div className="col-md-3">
        <Title>LEGAL & COOKIES</Title>
        <List>
          <Link class="footer-link" href="#">Terms & Conditions</Link>
          <Link class="footer-link" href="#">Privacy Policy</Link>
          <Link class="footer-link" href="#">Cookie Policy</Link>
          <Link class="footer-link" href="#">Accessibility Statement</Link>
          <Link class="footer-link" href="#">Japan Only - SCTL Indications</Link>
        </List>
      </div>
    </Navigation>
  );
};
