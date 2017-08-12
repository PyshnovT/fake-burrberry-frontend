import React from "react";
import styled from "styled-components";
import ShippingAccordion from "./ShippingAccordion";
import DeliveryOption from "../../common/DeliveryOption";

const Image = styled.img`
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  vertical-align: top;
`;

const Wrapper = styled.section`padding: 0;`;

const Title = styled.h2`
  display: inline-block;
  margin: 0;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 19px;

  @media only screen and (min-width: 48rem) {
    margin-top: 0;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-left: -1em;
  margin-right: -1rem;
  padding: 0;

  @media only screen and (min-width: 48rem) {
    margin-left: -0.5rem;
    margin-right: -0.5rem;
  }
`;

export default function() {
  return (
    <ShippingAccordion>
      <Row>
        <div className="col-xs-12 col-md-7 col-lg-7">
          <Image src="img/delivery@3x.jpg" />
        </div>
        <div className="col-xs-12 col-md-5 col-lg-4">
          <Wrapper>
            <Title>DELIVERY</Title>
            <DeliveryOption title="Free Next Day Delivery">
              Order before 7pm Monday to Thursday for delivery the next day
            </DeliveryOption>
            <DeliveryOption title="Collect-in-Store">
              Order online today and pick up your items in store as early as
              tomorrow
            </DeliveryOption>
            <DeliveryOption title="Free Returns">
              Enjoy free returns on your order
            </DeliveryOption>
            <DeliveryOption title="Free Gift Packaging">
              Discover our gift packaging, a gold lined box tied with a coloured
              ribbon
            </DeliveryOption>
          </Wrapper>
        </div>
      </Row>
    </ShippingAccordion>
  );
}
