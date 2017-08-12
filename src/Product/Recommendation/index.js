import React from "react";
import styled from "styled-components";
import RecommendationCard from "./RecommendationCard";

const Recommendation = styled.section`
  padding-top: 3rem;

  @media only screen and (min-width: 48rem) {
    // padding-top: 1.5rem;
  }

  @media only screen and (min-width: 62rem) {
    padding-top: 4rem;
  }
`;

const Title = styled.h2`
  display: inline-block;
  margin: 0;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.19;
  border-bottom: 1px solid #111;

  @media only screen and (min-width: 48rem) {
    margin-bottom: 0.5rem;
  }

  @media only screen and (min-width: 62rem) {
    display: block;
    padding: 0;
    margin-bottom: 1.5rem;
    text-align: center;
    border: none;
  }
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-grow: 1;
  margin-top: 0.5rem;
  margin-left: -0.875rem;
  margin-right: -0.875rem;

  @media only screen and (min-width: 48rem) {
    margin-left: -0.5rem;
    margin-right: -0.5rem;
  }
`;

export default function() {
  return (
    <Recommendation>
      <Title>WE RECOMMEND</Title>
      <List>
        <RecommendationCard
          image="https://assets.burberry.com/is/image/Burberryltd/f51a470fc157e3014a115c64276c2e124d9fc477.jpg?$BBY_V2_ML_3X4$&hei=260&wid=195"
          title="Emroided Hooded Content For Three Lines"
          price={27000}
          currency="RUB"
        />
        <RecommendationCard
          image="https://assets.burberry.com/is/image/Burberryltd/eb872d02449c4050916c9eaf44e266bfdbd32304.jpg?$BBY_V2_ML_3X4$&hei=260&wid=195"
          title="Emroided Hooded Content For Three Lines"
          price={27000}
          currency="RUB"
        />
        <RecommendationCard
          image="https://assets.burberry.com/is/image/Burberryltd/cfaeb1b3c79aeee09dfda4e26a9fb3f4525df542.jpg?$BBY_V2_SL_3X4$&hei=260&wid=195"
          title="Emroided Hooded Content For Three Lines"
          price={27000}
          currency="RUB"
        />
        <RecommendationCard
          image="https://assets.burberry.com/is/image/Burberryltd/b33127f06e6c404cc3168645e099a9eb71aeca9c.jpg?$BBY_V2_SL_3X4$&hei=260&wid=195"
          title="Emroided Hooded Content For Three Lines"
          price={27000}
          currency="RUB"
        />
      </List>
    </Recommendation>
  );
}
