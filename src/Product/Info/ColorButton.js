import React from 'react';
import styled from 'styled-components';

const ColorButton = styled.button`
  box-sizing: border-box;
  margin-right: 1rem;
  padding: 1.25rem;
  width: 0;
  height: 0;
  box-shadow: inset 0px 0px 0px 1px #232122;
  border: none;
  border-radius: 1.25rem;
  background-color: ${ props => props.value };
`;

const Text = styled.span`
  display: none;
`;

export default function(props) {
  return (
    <ColorButton value={props.value} active={props.active} type="button">
      <Text>Change color to black</Text>
    </ColorButton>
  );
}
