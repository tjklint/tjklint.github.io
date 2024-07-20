import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaGlobe } from 'react-icons/fa';

// Import GIFs directly
import investSmartGif from '../../assets/projects/InvestSmart.gif';
import pokePCGif from '../../assets/projects/PokePC.gif';

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  color: #fff;
  font-family: 'RobotoMono', sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: center;
`;

const BigProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const BigProject = styled.div`
  width: 70%;
  margin-bottom: 40px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    opacity: 0.3; /* Grey the image */
    position: absolute;
    top: 50%; /* Center the image vertically */
    left: 0;
    transform: translateY(-50%);
    z-index: 0;
    object-fit: cover; /* Ensure the image covers the area */
    object-position: center; /* Center the image */
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
    color: #9b59b6; /* Adjusted purple color */
    font-size: 1.2em;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); /* Text shadow for better readability */

    &:hover {
      color: #d4a1ff;
    }
  }
`;

const SmallProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const SmallProject = styled.div`
  width: 35%;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 20px;
  text-align: left;

  h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1em;
    margin-bottom: 20px;
  }

  .links {
    display: flex;
    gap: 10px;
  }

  a {
    color: #9b59b6; /* Adjusted purple color */
    font-size: 1em;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); /* Text shadow for better readability */

    &:hover {
      color: #d4a1ff;
    }
  }
`;

const handleComingSoonClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    alert('Coming soon!');
};

const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <SectionTitle>Projects</SectionTitle>
      <BigProjectsContainer>
        <BigProject>
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
        </BigProject>
        <BigProject>
          <img src={pokePCGif} alt="PokePC Project" />
          <h3>PokePC</h3>
          <p>PokePC is a Pokedex & a user-friendly web app for managing and organizing Pokemon collections, 
             creating battle teams, and tracking Pokemon details, designed for enthusiasts at all levels.</p>
          <div className="links">
            <a href="https://github.com/tjklint/PokePC" target="_blank" rel="noopener noreferrer">
              <FaGithub /> See on GitHub
            </a>
          </div>
        </BigProject>
        {/* Add more big projects as needed */}
      </BigProjectsContainer>

      <SmallProjectsContainer>
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
        {/* Add more small projects as needed */}
      </SmallProjectsContainer>
    </ProjectsContainer>
  );
};

export default Projects;