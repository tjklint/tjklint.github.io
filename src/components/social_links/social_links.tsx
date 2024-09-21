import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaGlobe, FaMedium, FaDev } from 'react-icons/fa';

// Container for the entire social section
const SocialContainer = styled.div`
  width: 30%; /* Set the container width */
  margin: 20px auto; /* Center the container with auto margins */
  padding: 20px 20px 30px 20px; /* Padding around the container */
  background-color: #2e2e2e; /* Dark background color */
  border-radius: 10px; /* Rounded corners */
  text-align: center; /* Center the text inside the container */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  font-family: 'RobotoMono', sans-serif; /* Use the RobotoMono font */

  /* Adjust container width on smaller screens */
  @media (max-width: 768px) {
    width: 80%; /* Increase width on mobile screens */
  }
`;

// Styled title for the social section
const SocialTitle = styled.h3`
  color: #fff; /* White text color */
  font-size: 1.5em; /* Font size for the title */
  margin-bottom: 10px; /* Space below the title */
  background: linear-gradient(90deg, #8a2be2, #d4a1ff); /* Gradient effect on text */
  -webkit-background-clip: text; /* Clip background to the text */
  -webkit-text-fill-color: transparent; /* Make text transparent to reveal gradient */
`;

// Styled description text
const SocialDescription = styled.p`
  color: #d3d3d3; /* Light gray text color */
  margin-bottom: 20px; /* Space below the description */

  .highlight {
    color: #8a2be2; /* Highlighted purple color for important words */
  }
`;

// Container for the social icons
const SocialIcons = styled.div`
  display: flex; /* Use flexbox to layout the icons */
  justify-content: center; /* Center the icons horizontally */
  gap: 20px; /* Space between the icons */

  a {
    color: #d3d3d3; /* Default icon color (light gray) */
    font-size: 2em; /* Size of the icons */
    transition: color 0.3s; /* Smooth color transition on hover */

    &:hover {
      color: #8a2be2; /* Change icon color to purple on hover */
    }
  }
`;

// Main React component
const SocialLinks: React.FC = () => {
  return (
    <SocialContainer>
      <SocialTitle>FIND ME ON</SocialTitle>
      <SocialDescription>
        Feel free to <span className="highlight">connect</span> with me
      </SocialDescription>
      <SocialIcons>
        {/* Social media links with icons */}
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
