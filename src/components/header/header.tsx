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
  position: relative;
  z-index: 1000; 
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
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: #1e1e1e;
    flex-direction: column;
    justify-content: flex-start; 
    padding-top: 80px; 
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease;
    overflow-y: auto; 
    z-index: 999;
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
  z-index: 1001; /* Ensure the hamburger button stays above the nav */

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
        <NavLink href="#home" onClick={() => setIsOpen(false)}>
          <FaHome />
          Home
        </NavLink>
        <NavLink href="#about" onClick={() => setIsOpen(false)}>
          <FaUser />
          About
        </NavLink>
        <NavLink href="#projects" onClick={() => setIsOpen(false)}>
          <FaCode />
          Projects
        </NavLink>
        <NavLink href="#resume" onClick={() => setIsOpen(false)}>
          <FaFileAlt />
          Resume
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
