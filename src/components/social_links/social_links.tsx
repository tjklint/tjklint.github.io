import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaGlobe, FaMedium } from 'react-icons/fa';

const SocialContainer = styled.div`
  width: 30%;
  margin: 20px auto;
  padding: 20px;
  background-color: #2e2e2e; /* Slightly lighter gray */
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 80%; /* Adjust width for smaller screens */
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
      <SocialDescription>Feel free to connect with me</SocialDescription>
      <SocialIcons>
        <a href="https://github.com/tjklint" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/timothy-klint" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://tjklint.com" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
        <a href="https://medium.com/@profile-coming-soon" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
      </SocialIcons>
    </SocialContainer>
  );
};

export default SocialLinks;
