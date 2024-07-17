import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaUser, FaCode, FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';

interface NavProps {
  isOpen: boolean;
}

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

const Nav = styled.nav<NavProps>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    height: calc(100vh - 60px);
    background-color: #1e1e1e;
    flex-direction: column;
    justify-content: flex-start; /* Align items to the top */
    padding-top: 40px; /* Add padding to push items down */
    transition: right 0.3s ease;
  }
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  margin-left: 40px;
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

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 20px;
    font-size: 24px;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo>TJ KLINT</Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </Hamburger>
      <Nav isOpen={isOpen}>
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
