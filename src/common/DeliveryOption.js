import React from "react";
import styled from "styled-components";

const DeliveryOption = styled.div`
  margin: 0;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 0.25rem;
  padding: 0;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 0.875rem;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 16px;
`;

export default function(props) {
  return (
    <DeliveryOption>
      <Title>
        {props.title}
      </Title>
      <Text>
        {props.children}
      </Text>
    </DeliveryOption>
  );
}
