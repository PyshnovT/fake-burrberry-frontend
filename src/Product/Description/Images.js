import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Images = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4rem;
  margin-left: -0.5rem;
  margin-right: -0.5rem;

  div:nth-child(1) {
    margin-top: 2rem;
  }

  div:nth-child(2) {
    margin-top: 6rem;
  }
`;

const Image = styled.img`
  width: auto;
  height: 420px;
`;

export default function() {
  return (
    <Images>
      <div className="col-lg-4">
        <Image src="img/guy4@3x.jpg" alt="Long Cotton Gabardine Car Coat" />
      </div>
      <div className="col-lg-4">
        <Image src="img/guy2@3x.jpg" alt="Long Cotton Gabardine Car Coat" />
      </div>
      <div className="col-lg-4">
        <Image src="img/guy3@3x.jpg" alt="Long Cotton Gabardine Car Coat" />
      </div>
    </Images>
  );
}
