import React from "react";
import styled from "styled-components";
import Card from "../introcard/Card";

const Container = styled.section`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;
const ImageContainer = styled.div`
  flex: 6;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardContainer = styled.div`
  flex: 6;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const Img = styled.img`
  width: 40%;
  -webkit-mask-image: linear-gradient(
    45deg,
    #000 25%,
    rgba(0, 0, 0, 0.2) 50%,
    #000 75%
  );
  mask-image: linear-gradient(
    45deg,
    #000 25%,
    rgba(0, 0, 0, 0.2) 50%,
    #000 75%
  );
  -webkit-mask-size: 50%;
  mask-size: 800%;
  -webkit-mask-position: 0;
  mask-position: 0;
  &:hover {
    transition: mask-position 2s ease, -webkit-mask-position 2s ease;
    -webkit-mask-position: 120%;
    mask-position: 120%;
    opacity: 1;
  }
`;
const Hero = () => {
  return (
    <Container>
      <ImageContainer>
        <Img src="/dark2.png" alt="" />
      </ImageContainer>
      <CardContainer>
        <Card />
      </CardContainer>
    </Container>
  );
};

export default Hero;
