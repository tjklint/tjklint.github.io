import { ResumeData } from './resumetypes';
import resumeData from '../../data/resume.json';
import './resume.scss';
import VisualAid from './visualaid';

const Resume: React.FC = () => {
  const data: ResumeData = resumeData;

  return (
    <div className="resume-container" id="resume">
      <div className="content-wrapper">
        <div className="left-column">
          {data.sections.map((section) => (
            <VisualAid key={section.title} section={section} />
          ))}
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
