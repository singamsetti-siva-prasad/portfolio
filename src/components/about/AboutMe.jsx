import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: fit-content;
  margin-bottom: 2rem;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Heading = styled.div`
  font-weight: 800;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const DescContainer = styled.div`
  width: 50%;
  /* transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    border: none;
  } */
  @media (max-width: 767px) {
    width: 80%;
  }
`;
const Desc = styled.p`
  font-size: 1.2rem;
`;

const AboutMe = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>About me</Heading>
        <DescContainer>
          <Desc>
            Hello, My name is siva prasad singamsetti a full stack web developer
            3.0 enthusiast from India.
          </Desc>
          <Desc>I create user-friendly and visually appealing websites</Desc>
          <Desc>I like connecting with new people</Desc>
          <Desc>
            Aside from web development, I enjoy listening to music and farming
            in my free time.
          </Desc>
          <Desc>
            Thank you for taking the time to visit my portfolio website. I hope
            you find my work impressive and I look forward to working with you
            on your next project.
          </Desc>
        </DescContainer>
      </Wrapper>
    </Container>
  );
};

export default AboutMe;
