import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';

const RecommendationCard = styled.a`
  display: block;
  box-sizing: border-box;
  margin-bottom: 2rem;
  padding-right: 0.875rem;
  padding-left: 0.875rem;
  flex-basis: 50%;
  text-decoration: none;

  @media only screen and (min-width: 48rem) {
    flex-basis: 25%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-bottom: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  vertical-align: top;
`;

const Title = styled.h3`
  margin: 0;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0;
  font-weight: normal;
  font-family: 'Lora', serif;
  font-size: 1rem;
  line-height: 1.19;
  color: #111;
`;

const Price = styled.h5`
  margin: 0;
  padding: 0;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.17;
  color: #999;
`;

export default function(props) {
  return(
    <RecommendationCard>
    <Image src={props.image} alt={props.title} />
    <Title>{props.title}</Title>
    <Price>
      <FormattedNumber
        value={props.price}
        style="currency"
        currency={props.currency}
        currencyDisplay="symbol"
        minimumFractionDigits="0"
      />
    </Price>
    </RecommendationCard>
  );
}
