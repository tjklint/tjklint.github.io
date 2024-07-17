import React from 'react';
import styled from 'styled-components';
import { FaHome, FaUser, FaCode, FaFileAlt } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: #1e1e1e;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  color: #e1e1e1;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  margin-left: 60px;
  color: #d3d3d3;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s;

  &:hover {
    color: #9b59b6;
  }

  svg {
    margin-right: 8px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>TJ KLINT</Logo>
      <Nav>
        <NavLink href="#home">
          <FaHome />
          Home
        </NavLink>
        <NavLink href="#about">
          <FaUser />
          About
        </NavLink>
        <NavLink href="#projects">
          <FaCode />
          Projects
        </NavLink>
        <NavLink href="#resume">
          <FaFileAlt />
          Resume
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
