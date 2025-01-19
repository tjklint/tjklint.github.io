import React from 'react';
import './resume.scss';

const Resume: React.FC = () => {
  return (
    <div className="resume-container" id="resume">
      {/* <h1 className="resume-title">Resume</h1> */}
      <div className="content-wrapper">
        <div className="left-column">
          <div className="section-container">
            <h1 className="section-title">Education</h1>
            <div className="line-container">
              <div className="job-container">
                <h3 className="job-title">
                  Computer Science <span className="company">@John Abbott College</span>
                </h3>
                <p className="job-dates">August 2022 - May 2025</p>
              </div>
            </div>
          </div>

          <div className="section-container">
            <h1 className="section-title">Experience</h1>
            <div className="line-container">
            <div className="job-container">
                <h3 className="job-title">
                  Software Developer <span className="company">@CSE (Communications Security Establishment)</span>
                </h3>
                <p className="job-dates">January 2024 - April 2024</p>
              </div>
              <div className="job-container">
                <h3 className="job-title">
                  Software Developer <span className="company">@Bell</span>
                </h3>
                <p className="job-dates">May 2024 - August 2024</p>
                <ul>
                  <li className="bullet-point">
                    Developed a web app to streamline internal ticket creation using the Jira API.
                  </li>
                  <li className="bullet-point">
                    Utilized the MEVN stack (MongoDB, Express, Vue.js, Node.js) for development.
                  </li>
                  <li className="bullet-point">
                    Enhanced efficiency of internal processes at Bell through automation.
                  </li>
                </ul>
              </div>
              <div className="job-container">
                <h3 className="job-title">
                  Co-Chair <span className="company">@CUSEC (Canadian University Software Engineering Conference)</span>
                </h3>
                <p className="job-dates">January 2024 - Present</p>
                <ul>
                  <li className="bullet-point">
                    Overseeing operations for a 15+ team of student organizers including scheduling, sponsorships and logistics, to ensure a high-quality conference for 250 attendees from 17 schools across 6 provinces.
                  </li>
                  <li className="bullet-point">
                    Guiding organizers in developing conference vision, resolving logistic conflicts, and coordinating details with speakers, sponsors, and hotel venue.
                  </li>
                  <li className="bullet-point">
                    Handled recruiting through social media and interviewing more than 90+ applicants.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="right-column">
          
          <iframe
            title="TJ Klint Resume"
            src="https://drive.google.com/file/d/1lu80YAIwnfPQ4X3biBm__4uldH7Pw7cV/preview"
            allow="autoplay"
          ></iframe>
        
        </div>
      </div>
    </div>
  );
};

export default Resume;
