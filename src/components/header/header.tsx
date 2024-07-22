import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaUser, FaCode, FaFileAlt, FaBars, FaTimes, FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
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
    justify-content: flex-start;
    padding-top: 40px;
    transition: right 0.3s ease;
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

const Button = styled.a`
  display: flex;
  align-items: center;
  margin-left: 40px;
  padding: 8px 16px;
  border: 2px solid #9b59b6;
  color: #9b59b6;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.3s;
  font-family: 'RobotoMono', sans-serif;
  border-radius: 5px;

  &:hover {
    background-color: #9b59b6;
    color: #fff;
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo>TJ KLINT</Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </Hamburger>
      <Nav isOpen={isOpen}>
        <NavLink to="/">
          <FaHome />
          Home
        </NavLink>
        <NavLink to="/about">
          <FaUser />
          About
        </NavLink>
        <NavLink to="/projects">
          <FaCode />
          Projects
        </NavLink>
        <NavLink to="/resume">
          <FaFileAlt />
          Resume
        </NavLink>
        <Button href="https://github.com/tjklint/tjklint.github.io" target="_blank">
          <FaCodeBranch />
          {`or\u00A0`}
          <FaStar />
        </Button>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
