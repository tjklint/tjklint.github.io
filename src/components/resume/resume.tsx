import React from 'react';
import styled from 'styled-components';

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  color: #fff;
  margin-top: 60px;
  font-family: 'RobotoMono', sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  margin-right: 20px;
  position: relative;

  @media (max-width: 768px) {
    margin-right: 0;
  }

  &:before {
    content: "";
    position: absolute;
    top: 10px; /* Adjust to start below the Resume title */
    bottom: 0;
    left: 0;
    width: 2px;
    background: #d3d3d3;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  iframe {
    width: 100%;
    height: 80vh; /* Full height of the viewport */
    border: none;
  }
`;

const ResumeTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  padding-bottom: 10px;
  margin-top: -40px; /* Move the title 40px higher */
`;

const JobContainer = styled.div`
  position: relative;
  padding-left: 40px;
  margin-bottom: 40px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 20px;
    width: 2px;
    background: #d3d3d3;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5em;
  margin: 10px 0;
  position: relative;
  padding-left: 20px;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -20px;
    width: 20px;
    height: 2px;
    background: #d3d3d3;
  }
`;

const Company = styled.span`
  color: #8a2be2; /* Purple color for the company name */
`;

const JobDates = styled.p`
  font-size: 1em;
  color: #d3d3d3;
  margin: 5px 0 10px 20px;
`;

const BulletPoint = styled.li`
  margin-left: 20px;
  list-style-type: none;
  position: relative;
  padding-left: 20px;
  font-size: 1em;

  &:before {
    content: ">";
    position: absolute;
    left: 0;
    color: #8a2be2; /* Purple color for the caret */
  }
`;

const Resume: React.FC = () => {
  return (
    <ResumeContainer>
      <LeftColumn>
        <ResumeTitle>Resume</ResumeTitle>
        <JobContainer>
          <JobTitle>Software Developer <Company>@CompanyName</Company></JobTitle>
          <JobDates>January 2020 - Present</JobDates>
          <ul>
            <BulletPoint>Developed and maintained web applications</BulletPoint>
            <BulletPoint>Collaborated with cross-functional teams</BulletPoint>
            <BulletPoint>Implemented new features and improvements</BulletPoint>
          </ul>
        </JobContainer>
        <JobContainer>
          <JobTitle>Intern <Company>@AnotherCompany</Company></JobTitle>
          <JobDates>June 2019 - December 2019</JobDates>
          <ul>
            <BulletPoint>Assisted in the development of internal tools</BulletPoint>
            <BulletPoint>Conducted testing and debugging</BulletPoint>
            <BulletPoint>Participated in code reviews</BulletPoint>
          </ul>
        </JobContainer>
        {/* Add more job experiences as needed */}
      </LeftColumn>
      <RightColumn>
        <iframe
          src="https://drive.google.com/file/d/1lu80YAIwnfPQ4X3biBm__4uldH7Pw7cV/preview"
          allow="autoplay"
        ></iframe>
      </RightColumn>
    </ResumeContainer>
  );
};

export default Resume;
