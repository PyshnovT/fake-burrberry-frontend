import React from "react";
import logo from "../assets/logo.svg";
import styled from "styled-components";

const Header = styled.header`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #c6c6c6;

  @media only screen and (min-width: 48rem) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  @media only screen and (min-width: 62rem) {
    border: none;
  }
`;

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export default function() {
  return (
    <Header>
      <a href="#">
        <Logo alt="Burberry" src={logo} />
      </a>
    </Header>
  );
}
