import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 40vh;
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #808080;
  margin-right: 1rem;
  border-radius: 10px;
  padding: 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    border: none;
  }
  @media (max-width: 767px) {
    margin-bottom: 1rem;
  }
`;

const Heading = styled.h2`
  font-weight: 700;
`;

const P = styled.p`
  margin: 10px;
`;
////template_4t6atu5

const SkillCard = ({ tech }) => {
  return (
    <Container>
      <Heading>{tech.title}</Heading>
      {tech.skills.map((skill) => (
        <P key={skill}>{skill}</P>
      ))}
    </Container>
  );
};

export default SkillCard;
