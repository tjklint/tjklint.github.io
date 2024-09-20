import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaGlobe } from 'react-icons/fa';

import investSmartGif from '../../assets/projects/InvestSmart.gif';
import pokePCGif from '../../assets/projects/PokePC.gif';
import privacyXPressoGif from '../../assets/projects/PrivacyXPresso.gif';
import portfolioGif from '../../assets/projects/Portfolio.gif'; 

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-family: 'RobotoMono', sans-serif;
  padding: 0 10px;
  overflow-x: hidden;
  width: 80%; 
  margin: 0 auto; 
`;

const SectionTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
`;

const BigProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; 
`;

const ProjectContainer = styled.div`
  width: 100%; 
  margin-bottom: 40px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;

  img, video {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0.3;
  }

  h3 {
    font-size: 2em;
    margin-bottom: 10px;
    z-index: 1;
    position: relative;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 20px;
    z-index: 1;
    position: relative;
  }

  .links {
    z-index: 1;
    position: relative;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  a {
    color: #9b59b6;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);

    &:hover {
      color: #d4a1ff;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
  }
`;

const SmallProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  width: 100%; 
`;

const SmallProject = styled.div`
  width: 45%; 
  margin-bottom: 40px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;

  img, video {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0.3;
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
    z-index: 1;
    position: relative;
  }

  p {
    font-size: 1em;
    margin-bottom: 20px;
    z-index: 1;
    position: relative;
  }

  .links {
    z-index: 1;
    position: relative;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  a {
    color: #9b59b6;
    font-size: 1em;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);

    &:hover {
      color: #d4a1ff;
    }
  }


  @media (max-width: 1250px) {
    width: 45%;
  }

  @media (max-width: 968px) {
    width: 43%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto 20px auto;
  }
`;

const handleComingSoonClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault();
  alert('Coming soon!');
};

const Projects: React.FC = () => {
  return (
    <ProjectsContainer id="projects">
      <SectionTitle>Projects</SectionTitle>
      <BigProjectsContainer>
        <ProjectContainer>
          <img src={investSmartGif} alt="Invest Smart Project" />
          <h3>Capital Coach</h3>
          <p>A financial management tool designed to empower individuals with smart 
             financial planning, integrating simplicity with effectiveness.</p>
          <div className="links">
            <a href="https://github.com/tjklint/CapitalCoach" target="_blank" rel="noopener noreferrer">
              <FaGithub /> See on GitHub
            </a>
            <a href="#" onClick={handleComingSoonClick}>
              <FaGlobe /> Try it Out
            </a>
          </div>
        </ProjectContainer>
        <ProjectContainer>
          <img src={pokePCGif} alt="PokePC Project" />
          <h3>PokePC</h3>
          <p>PokePC is a Pokedex & a user-friendly web app for managing and organizing Pokemon collections, 
             creating battle teams, and tracking Pokemon details, designed for enthusiasts at all levels.</p>
          <div className="links">
            <a href="https://github.com/tjklint/PokePC" target="_blank" rel="noopener noreferrer">
              <FaGithub /> See on GitHub
            </a>
          </div>
        </ProjectContainer>
      </BigProjectsContainer>

      <SmallProjectsContainer>
        <SmallProject>
          <img src={privacyXPressoGif} alt="PrivacyXPresso Project" />
          <h3>PrivacyXPresso</h3>
          <p>PrivacyXPresso simplifies data deletion from big companies, enhancing online security with easy-to-use local tools.</p>
          <div className="links">
            <a href="https://github.com/tjklint/BellGeekfest2023" target="_blank" rel="noopener noreferrer">
              <FaGithub /> See on GitHub
            </a>
            <a href="#" onClick={handleComingSoonClick}>
              <FaGlobe /> Try it Out
            </a>
          </div>
        </SmallProject>
        <SmallProject>
          <img src={portfolioGif} alt="Portfolio GIF" />
          <h3>Portfolio</h3>
          <p>Built in React, this portfolio website is built to last and showcase my best work and skills. Thanks for checking it out!</p>
          <div className="links">
            <a href="https://github.com/tjklint/tjklint.github.io" target="_blank" rel="noopener noreferrer">
              <FaGithub /> See on GitHub
            </a>
            <a href="https://tjklint.github.io" onClick={handleComingSoonClick}>
              <FaGlobe /> You're already here!
            </a>
          </div>
        </SmallProject>
        <SmallProject>
          <h3>More Projects Coming Soon...</h3>
          <p>Stay tuned!</p>
          <div className="links">
            <a href="https://github.com/tjklint" target="_blank" rel="noopener noreferrer">
              <FaGithub /> See on GitHub
            </a>
            <a href="https://tjklint.com" target="_blank" rel="noopener noreferrer">
              <FaGlobe /> Try it Out
            </a>
          </div>
        </SmallProject>
      </SmallProjectsContainer>
    </ProjectsContainer>
  );
};

export default Projects;
