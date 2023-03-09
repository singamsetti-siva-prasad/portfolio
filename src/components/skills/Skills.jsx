import React from "react";
import styled from "styled-components";
import SkillCard from "../skillcard/SkillCard";
const Container = styled.div`
  width: 100vw;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
  /* margin: 2rem 0; */
  padding: 1rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
  /* margin: 2rem 0; */
  padding: 10px;
`;

const Heading = styled.h2`
  margin-bottom: 5px;
  font-size: 2rem;
`;
const SkillContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

const Skills = () => {
  const skillsData = [
    {
      title: "Programming languages",
      skills: ["Javascript", "Java"],
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "TailwindCSS", "React.js"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MySQL", "MongoDB"],
    },
  ];
  return (
    <Container>
      <Wrapper>
        <Heading>Skills</Heading>
        <SkillContainer>
          {skillsData.map((tech) => (
            <SkillCard tech={tech} />
          ))}
        </SkillContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;