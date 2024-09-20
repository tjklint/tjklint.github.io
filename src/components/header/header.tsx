import React, { useState } from 'react';
import { FaHome, FaUser, FaCode, FaFileAlt, FaBars, FaTimes, FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import './header.scss';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="header-container">
      <a href="#home" className="logo" onClick={(e) => handleClick(e, 'home')}>
        TJ KLINT
      </a>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={30} className="close-icon" /> : <FaBars size={30} />}
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <a href="#home" className="nav-link" onClick={(e) => handleClick(e, 'home')}>
          <FaHome />
          Home
        </a>
        <a href="#about" className="nav-link" onClick={(e) => handleClick(e, 'about')}>
          <FaUser />
          About
        </a>
        <a href="#projects" className="nav-link" onClick={(e) => handleClick(e, 'projects')}>
          <FaCode />
          Projects
        </a>
        <a href="#resume" className="nav-link" onClick={(e) => handleClick(e, 'resume')}>
          <FaFileAlt />
          Resume
        </a>
        <a
          className="button"
          href="https://github.com/tjklint/tjklint.github.io"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
        >
          <FaStar />
          {`or\u00A0`}
          <FaCodeBranch />
        </a>
      </nav>
    </header>
  );
};

export default Header;
