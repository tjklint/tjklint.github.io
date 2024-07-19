import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaUser, FaCode, FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface NavProps {
  isOpen: boolean;
}

const HeaderContainer = styled.header`
  background-color: #1e1e1e;
  padding: 20px 60px 20px 40px; /* Add padding to the left side */
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  position: relative;
  z-index: 1000; /* Ensure the header stays above other content */
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  color: #e1e1e1;
  font-family: 'Arial', sans-serif; /* Exclude from Poppins font */
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
    justify-content: flex-start; /* Align items to the top */
    padding-top: 80px; /* Add padding to push items down */
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease;
    overflow-y: auto; /* Add this to prevent scrolling issues */
    z-index: 999; /* Ensure the nav stays above other content */
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 40px;
  color: #d3d3d3;
  text-decoration: none;
  font-size: 18px;
  font-family: 'Poppins', sans-serif; /* Use Poppins font */
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
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <FaHome />
          Home
        </NavLink>
        <NavLink to="#about" onClick={() => setIsOpen(false)}>
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
