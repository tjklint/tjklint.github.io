import React, { useState } from 'react';
import { FaHome, FaUser, FaCode, FaFileAlt, FaBars, FaTimes, FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './header.scss';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-container">
      <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
        TJ KLINT
      </Link>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={30} className="close-icon" /> : <FaBars size={30} />}
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>
          <FaHome />
          Home
        </Link>
        <Link className="nav-link" to="/about" onClick={() => setIsOpen(false)}>
          <FaUser />
          About
        </Link>
        <Link className="nav-link" to="/projects" onClick={() => setIsOpen(false)}>
          <FaCode />
          Projects
        </Link>
        <Link className="nav-link" to="/resume" onClick={() => setIsOpen(false)}>
          <FaFileAlt />
          Resume
        </Link>
        <a className="button" href="https://github.com/tjklint/tjklint.github.io" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
          <FaStar />
          {`or\u00A0`}
          <FaCodeBranch />
        </a>
      </nav>
    </header>
  );
};

export default Header;
