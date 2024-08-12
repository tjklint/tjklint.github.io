import React from 'react';
import './resume.scss';

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <div className="left-column">
        <div className="section-container">
          <h1 className="section-title">Education</h1>
          <div className="line-container">
            <div className="job-container">
              <h3 className="job-title">
                Computer Science <span className="company">@John Abbott College</span>
              </h3>
              <p className="job-dates">August 2022 - May 2025</p>
              <ul>
                <li className="bullet-point">Developed and maintained web applications</li>
                <li className="bullet-point">Collaborated with cross-functional teams</li>
                <li className="bullet-point">Implemented new features and improvements</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section-container">
          <h1 className="section-title">Experience</h1>
          <div className="line-container">
            <div className="job-container">
              <h3 className="job-title">
                Software Developer <span className="company">@Bell</span>
              </h3>
              <p className="job-dates">May 2024 - August 2024</p>
              <ul>
                <li className="bullet-point">Developed and maintained web applications</li>
                <li className="bullet-point">Collaborated with cross-functional teams</li>
                <li className="bullet-point">Implemented new features and improvements</li>
              </ul>
            </div>
            <div className="job-container">
              <h3 className="job-title">
                Co-Chair <span className="company">@CUSEC (Canadian University Software Engineering Conference)</span>
              </h3>
              <p className="job-dates">January 2024 - Present</p>
              <ul>
                <li className="bullet-point">
                  Overseeing operations for a 15+ team of student organizers including scheduling, sponsorships 
                  and logistics, to ensure a high-quality conference for 250 attendees from 17 schools across 6 provinces
                </li>
                <li className="bullet-point">
                  Guiding organizers in developing conference vision, resolving logistic conflicts, and coordinating 
                  details with speakers, sponsors, and hotel venue
                </li>
                <li className="bullet-point">
                  Handled recruiting through social media and interviewing more than 30+ applicants.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="right-column">
        <iframe
          src="https://drive.google.com/file/d/1lu80YAIwnfPQ4X3biBm__4uldH7Pw7cV/preview"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
