import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaGlobe, FaMedium, FaDev } from 'react-icons/fa';

const SocialContainer = styled.div`
  width: 30%;
  margin: 20px auto;
  padding: 20px 20px 30px 20px; 
  background-color: #2e2e2e; 
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-family: 'Poppins', sans-serif; 

  @media (max-width: 768px) {
    width: 80%; 
  }
`;

const SocialTitle = styled.h3`
  color: #fff;
  font-size: 1.5em;
  margin-bottom: 10px;
  background: linear-gradient(90deg, #8a2be2, #d4a1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SocialDescription = styled.p`
  color: #d3d3d3;
  margin-bottom: 20px;

  .highlight {
    color: #8a2be2; 
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: #d3d3d3;
    font-size: 2em;
    transition: color 0.3s;

    &:hover {
      color: #8a2be2;
    }
  }
`;

const SocialLinks: React.FC = () => {
  return (
    <SocialContainer>
      <SocialTitle>FIND ME ON</SocialTitle>
      <SocialDescription>
        Feel free to <span className="highlight">connect</span> with me
      </SocialDescription>
      <SocialIcons>
        <a href="https://github.com/tjklint" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/timothy-klint" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://tjklint.com" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
        <a href="https://medium.com/@tjklint" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
        <a href="https://dev.to/tjklint" target="_blank" rel="noopener noreferrer"><FaDev /></a>
      </SocialIcons>
    </SocialContainer>
  );
};

export default SocialLinks;
