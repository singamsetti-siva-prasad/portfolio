import React from "react";
import ProjectCard from "../../projectcard/ProjectCard";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Heading = styled.h1`
  margin-bottom: 50px;
`;

const Projects = () => {
  const projectData = [
    {
      name: "Crypto Currency Dashboard",
      image: "/cryptoReview.png",
      link: "https://cryptodashboard-gold.vercel.app/",
      desc1:
        "Designed a website to show the real time crypto market details provided by coingecko",
      desc2:
        "Developed front end using React JS, Styled components and Chart.js",
      desc3:
        "Implemented fetching data from coingecko API’s and managed state using Redux Tool Kit",
    },
    {
      name: "Get YouTube Subscribers",
      image: "/youtubesubs.png",
      link: "https://youtube-subscribers-six.vercel.app/",
      desc1: "Created a collection in mongoDB containing subscribers details ",
      desc2: "Created a server using Express.js framework",
      desc3: "Tested API's using Jest and SuperTest library",
    },
  ];
  return (
    <Container>
      <Heading>Projects</Heading>
      {projectData?.map((item) => (
        <ProjectCard item={item} key={item.name} />
      ))}
    </Container>
  );
};

export default Projects;
