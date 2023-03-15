import React from "react";
import styled from "styled-components";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";

const Container = styled.div`
  width: 50vw;
  height: fit-content;
  margin-bottom: 50px;
  border: 1px solid #808080;
  border-radius: 10px;
  padding: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    border: none;
  }
  @media (max-width: 767px) {
    width: 80vw;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 5;
  height: 100%;
  display: flex;
`;
const Right = styled.div`
  flex: 7;
  height: 100%;
  padding: 10px;
`;
const Img = styled.img`
  width: 100%;
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
  -webkit-mask-size: 800%;
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
const Heading = styled.h3`
  font-weight: 500;
  margin-bottom: 10px;
`;
const Desc = styled.p`
  margin-bottom: 10px;
`;
const Button = styled.button`
  background-color: transparent;
  border: 1px solid #808080;
  padding: 10px;
  border-radius: 10px;
`;
const Link = styled.a`
  text-decoration: none;
  color: #e1d9d1;
  font-weight: 500;
`;
// const Figure = styled.div`
//   width: 300px;
//   height: 200px;
//   margin: 0;
//   padding: 0;
//   background: #fff;
//   overflow: hidden;
//   bottom: -36px;
//   opacity: 1;
//   -webkit-transform: scale(1);
//   transform: scale(1);
//   -webkit-transition: 0.3s ease-in-out;
//   transition: 0.3s ease-in-out;
//   &hover {
//     -webkit-transform: scale(1.3);
//     transform: scale(1.3);
//   }
// `;
const ProjectCard = ({ item }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Img src={item.image} />
        </Left>
        <Right>
          <Heading>{item.name}</Heading>
          <Desc>{item.desc1}</Desc>
          <Desc>{item.desc2}</Desc>
          <Desc>{item.desc3}</Desc>

          <Link href={item.link} target="_blank">
            <OpenInNewOutlinedIcon fontSize="small" />
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default ProjectCard;
