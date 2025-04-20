import React from 'react';
import { ResumeEntry, ResumeSection } from './resumetypes';

const VisualAid: React.FC<{ section: ResumeSection }> = ({ section }) => {
  return (
    <div className="section-container">
      <h1 className="section-title">{section.title}</h1>
      <div className="line-container">
        {section.entries.map((entry) => (
          <div key={entry.title} className="job-container">
            <h3 className="job-title">
              {entry.title} <span className="company">{entry.company}</span>
            </h3>
            <p className="job-dates">{entry.dates}</p>
            {entry.bulletPoints && (
              <ul>
                {entry.bulletPoints.map((bulletPoint) => (
                  <li key={bulletPoint} className="bullet-point">
                    {bulletPoint}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisualAid;