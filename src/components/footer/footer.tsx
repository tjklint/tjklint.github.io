import React from 'react';
import './footer.scss';
import { FaGithub, FaLinkedin, FaGlobe, FaMedium, FaDev } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="left-align">
        <p>
          Developed & Designed with <span className="purple-heart">❤️</span> by  
          <a href="https://linkedin.com/in/timothy-klint" target="_blank" rel="noopener noreferrer" className="footer-link">Me</a>.
        </p>
      </div>
      <div className="center-align">
        <p>&copy; Timothy Klint 2024</p>
      </div>
      <div className="right-align social-icons">
        <a href="https://github.com/tjklint" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/timothy-klint" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://tjklint.com" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
        <a href="https://medium.com/@tjklint" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
        <a href="https://dev.to/tjklint" target="_blank" rel="noopener noreferrer"><FaDev /></a>
      </div>
    </footer>
  );
};

export default Footer;
