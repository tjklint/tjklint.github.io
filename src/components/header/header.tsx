import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaUser, FaCode, FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
  font-family: 'RobotoMono', sans-serif;
  position: relative; /* Ensure the header container is positioned correctly */
  z-index: 1000; /* Ensure the header is on top */
`;

const Logo = styled.div`
  font-size: 28px;
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
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    height: 100vh; /* Cover the entire viewport height */
    background-color: #1e1e1e;
    flex-direction: column;
    justify-content: center;
    transition: right 0.3s ease;
    z-index: 999; /* Ensure the nav is on top */
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 40px;
  color: #d3d3d3;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s;
  font-family: 'RobotoMono', sans-serif;

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

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: #fff;
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
        {isOpen && <CloseIcon size={30} onClick={() => setIsOpen(false)} />}
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <FaHome />
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>
          <FaUser />
          About
        </NavLink>
        <NavLink to="/projects" onClick={() => setIsOpen(false)}>
          <FaCode />
          Projects
        </NavLink>
        <NavLink to="/resume" onClick={() => setIsOpen(false)}>
          <FaFileAlt />
          Resume
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
