import React from 'react';
import styled from 'styled-components';

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  color: #fff;
  margin-top: 0px;
  font-family: 'RobotoMono', sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
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

const SectionContainer = styled.div`
  margin-bottom: 40px;
  position: relative;
`;

const SectionTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  padding-left: 20px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 20px;
    width: 2px;
    height: calc(100% + 20px);
    background: #d3d3d3;
  }
`;

const LineContainer = styled.div`
  position: relative;
  padding-left: 20px;

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

const JobContainer = styled.div`
  margin-bottom: 20px;
  padding-left: 40px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 1em; /* Adjust this to align with job title */
    left: 0; /* Align with the vertical line */
    width: 20px; /* Adjust this width as necessary */
    height: 2px;
    background: #d3d3d3;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5em;
  margin: 10px 0;
  position: relative;
`;

const Company = styled.span`
  color: #8a2be2; /* Purple color for the company name */
`;

const JobDates = styled.p`
  font-size: 1em;
  color: #d3d3d3;
  margin: 5px 0 10px 0;
`;

const BulletPoint = styled.li`
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

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <SectionContainer>
    <SectionTitle>{title}</SectionTitle>
    <LineContainer>
      {children}
    </LineContainer>
  </SectionContainer>
);

const Resume: React.FC = () => {
  return (
    <ResumeContainer>
      <LeftColumn>
        <Section title="Education">
          <JobContainer>
            <JobTitle>Computer Science <Company>@John Abbott College</Company></JobTitle>
            <JobDates>August 2022 - May 2025</JobDates>
            <ul>
              <BulletPoint>Developed and maintained web applications</BulletPoint>
              <BulletPoint>Collaborated with cross-functional teams</BulletPoint>
              <BulletPoint>Implemented new features and improvements</BulletPoint>
            </ul>
          </JobContainer>
        </Section>

        <Section title="Experience">
          <JobContainer>
            <JobTitle>Software Developer <Company>@Bell</Company></JobTitle>
            <JobDates>May 2024 - August 2024</JobDates>
            <ul>
              <BulletPoint>Developed and maintained web applications</BulletPoint>
              <BulletPoint>Collaborated with cross-functional teams</BulletPoint>
              <BulletPoint>Implemented new features and improvements</BulletPoint>
            </ul>
          </JobContainer>
          <JobContainer>
            <JobTitle>Co-Chair <Company>@CUSEC (Canadian University Software Engineering Conference)</Company></JobTitle>
            <JobDates>January 2024 - Present</JobDates>
            <ul>
              <BulletPoint>Overseeing operations for a 15+ team of student organizers including scheduling, sponsorships 
              and logistics, to ensure a high-quality conference for 250 attendees from 17 schools across 6 provinces</BulletPoint>
              <BulletPoint>Guiding organizers in developing conference vision, resolving logistic conflicts, and coordinating 
              details with speakers, sponsors, and hotel venue</BulletPoint>
              <BulletPoint>Handled recruiting through social media and interviewing more than 30+ applicants.</BulletPoint>
            </ul>
          </JobContainer>
        </Section>
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
