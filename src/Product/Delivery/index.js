import React from "react";
import styled from "styled-components";
import ShippingAccordion from "./ShippingAccordion";

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
  align-items: center;
  justify-content: space-between;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`;

const P = styled.div`
  margin: 0;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.h3`
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

export default function() {
  return (
    <ShippingAccordion>
      <Row>
        <div className="col-md-7 col-lg-7">
          <Image src="img/delivery@3x.jpg" />
        </div>
        <div className="col-md-5 col-lg-4">
          <Wrapper>
            <Title>DELIVERY</Title>
            <P>
              <Subtitle>Free Next Day Delivery</Subtitle>
              <Text>
                Order before 7pm Monday to Thursday for delivery the next day
              </Text>
            </P>
            <P>
              <Subtitle>Collect-in-Store</Subtitle>
              <Text>
                Order online today and pick up your items in store as early as
                tomorrow
              </Text>
            </P>
            <P>
              <Subtitle>Free Returns</Subtitle>
              <Text>Enjoy free returns on your order</Text>
            </P>
            <P>
              <Subtitle>Free Gift Packaging</Subtitle>
              <Text>
                Discover our gift packaging, a gold lined box tied with a
                coloured ribbon
              </Text>
            </P>
          </Wrapper>
        </div>
      </Row>
    </ShippingAccordion>
  );
}
