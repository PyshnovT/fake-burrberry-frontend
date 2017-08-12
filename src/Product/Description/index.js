import React from "react";
import styled, { css } from "styled-components";
import { Lg, ToLg } from "../../common/Responsive";
import Accordion from "./Accordion";
import Image from "./Image";
import Images from "./Images";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 20px;
`;

export default function() {
  return (
    <Accordion>
      <Row>
        <div className="col-xs-12 col-lg-4">
          <Lg>
            <Title>DESCRIPTION</Title>
          </Lg>
          <p>A refined car coat crafted in protective cotton gabardine.</p>
          <p>
            Invented by Thomas Burberry in 1879, cotton gabardine is a tightly
            woven and breathable fabric that protects against wind and rain.
          </p>
          <p>
            Raglan sleeves and a concealed button closure complement the clean
            tailored lines.
          </p>
          <p>The piece is finished with a distinctive check undercollar.</p>
          <ul>
            <li>
              Coat length: 98cm/38.6in. This is based on a size UK 48 as
              proportions change slightly according to size.
            </li>
            <li>Outer: 100% cotton</li>
            <li>Check lining: 100% cotton</li>
            <li>Sleeve lining: 100% viscose</li>
            <li>Buttons: buffalo horn</li>
            <li>Specialist dry clean</li>
            <li>Made in Europe</li>
            <li>Item 39428531</li>
          </ul>
        </div>
        <Lg>
          <div className="col-lg-8">
            <Image src="img/guy5@3x.jpg" alt="" />
          </div>
        </Lg>
      </Row>
      <Lg>
        <Images />
      </Lg>
    </Accordion>
  );
}
