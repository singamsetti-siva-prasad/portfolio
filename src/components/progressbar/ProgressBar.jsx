import React from "react";
// import "./progressbar.css";
import styled, { keyframes } from "styled-components";
const Container = styled.div`
  background: rgba(255, 255, 255, 0.1);
  justify-content: flex-start;
  border-radius: 100px;
  align-items: center;
  position: relative;
  padding: 0 5px;
  display: flex;
  height: 40px;
  width: 500px;
`;
const Load = keyframes`
  0%{width: 0; }
  100%{width: 100%;
  }

`;
const Bar = styled.div`
  animation: ${Load} 3s normal forwards;
  box-shadow: 0 10px 40px -10px #fff;
  border-radius: 100px;
  background: #fff;
  height: 30px;
  width: 0;
`;

const ProgressBar = () => {
  return (
    <Container class="progress">
      <Bar class="progress-value"></Bar>
    </Container>
  );
};

export default ProgressBar;
