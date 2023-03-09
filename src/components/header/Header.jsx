import React from "react";
import styled from "styled-components";
import Button from "../button/Button";

const Nav = styled.nav`
  width: 100vw;
  height: 10vh;
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
`;

// const Wrapper = styled.div`
//   width: 100%;
//   height: 100%;
// `;
const Logo = styled.img`
  width: 5rem;
  cursor: pointer;
`;

// const Button = styled.button`
//   width: 50px;
//   height: 50px;
// `;

const Header = () => {
  return (
    <Nav>
      <Logo src="/splogo.png" />
      <Button />
    </Nav>
  );
};

export default Header;
