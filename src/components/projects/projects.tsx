import React, { useState, useMemo } from 'react';
import { FaGithub, FaGlobe, FaSearch } from 'react-icons/fa';
import './projects.scss';

// Importing assets for project GIFs
import investSmartGif from '../../assets/projects/InvestSmart.gif';
import pokePCGif from '../../assets/projects/PokePC.gif';
import privacyXPressoGif from '../../assets/projects/PrivacyXPresso.gif';
import portfolioGif from '../../assets/projects/Portfolio.gif';

// Import projects data
import projectsData from '../../data/projects.json'; 

// Project interface for type safety
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'big' | 'small';
  technologies: {
    languages: string[];
    frameworks: string[];
    libraries: string[];
  };
  tags: string[];
  links: {
    github: string;
    demo: string | null;
  };
}

// Asset mapping for project images
const assetMap: { [key: string]: string } = {
  'InvestSmart.gif': investSmartGif,
  'PokePC.gif': pokePCGif,
  'PrivacyXPresso.gif': privacyXPressoGif,
  'Portfolio.gif': portfolioGif,
};

// Handle the "Coming Soon" click event
const handleComingSoonClick = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => {
  event.preventDefault();
  alert('Coming soon!');
};

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Get all unique tags from projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    (projectsData.projects as Project[]).forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter projects based on search term and selected tag
  const filteredProjects = useMemo(() => {
    let filtered = (projectsData.projects as Project[]).filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.technologies.languages.some(lang => lang.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          project.technologies.frameworks.some(fw => fw.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          project.technologies.libraries.some(lib => lib.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesTag = !selectedTag || project.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });

    // If not showing all, limit to first 5-6 projects
    if (!showAll && !searchTerm && !selectedTag) {
      filtered = filtered.slice(0, 6);
    }

    return filtered;
  }, [searchTerm, selectedTag, showAll]);

  const bigProjects = filteredProjects.filter(project => project.category === 'big');
  const smallProjects = filteredProjects.filter(project => project.category === 'small');

  const renderTechnologies = (technologies: Project['technologies'], isSmall: boolean = false) => {
    const allTech = [
      ...technologies.languages,
      ...technologies.frameworks,
      ...technologies.libraries
    ];

    return (
      <div className="project-technologies">
        <span className="tech-uses">Uses:</span>
        <div className="tech-items">
          {allTech.map((tech, index) => (
            <span key={index} className="tech-item">{tech}</span>
          ))}
        </div>
      </div>
    );
  };

  const renderProject = (project: Project, isSmall: boolean = false) => {
    const imageSrc = assetMap[project.image] || portfolioGif;
    const containerClass = isSmall ? 'small-project' : 'project-container';

    return (
      <div key={project.id} className={containerClass}>
        <img src={imageSrc} alt={`${project.title} Project`} />
        <div className="project-content">
          <div className="project-header">
            <h3>{project.title}</h3>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          <p className="project-description">{project.description}</p>
          {renderTechnologies(project.technologies, isSmall)}
          <div className="project-links">
            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
              <FaGithub /> See on GitHub
            </a>
            {project.links.demo ? (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                <FaGlobe /> Try it Out
              </a>
            ) : (
              <button onClick={handleComingSoonClick} style={{ 
                background: 'none', 
                border: 'none', 
                color: '#9b59b6', 
                fontSize: '1.2em',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
                fontFamily: 'inherit'
              }}>
                <FaGlobe /> Try it Out
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="projects-container" id="projects">
      <h2 className="section-title">Projects</h2>
      
      <div className="projects-controls">
        <div className="search-section">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search projects, technologies, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            className={`show-all-button ${showAll ? 'active' : ''}`}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Featured' : 'Show All Projects'}
          </button>
        </div>
        
        <div className="filter-tags">
          <button
            className={`tag-filter ${!selectedTag ? 'active' : ''}`}
            onClick={() => setSelectedTag(null)}
          >
            All Tags
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`tag-filter ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-display">
        {filteredProjects.length === 0 ? (
          <div className="no-results">
            No projects found matching your search criteria.
          </div>
        ) : (
          <>
            {bigProjects.length > 0 && (
              <div className="big-projects-container">
                {bigProjects.map(project => renderProject(project, false))}
              </div>
            )}

            {smallProjects.length > 0 && (
              <div className="small-projects-container">
                {smallProjects.map(project => renderProject(project, true))}
                
                {/* Coming Soon project - only show if not filtering and showing all or fewer than 6 projects */}
                {!searchTerm && !selectedTag && (smallProjects.length < 4 || showAll) && (
                  <div className="coming-soon-project">
                    <div className="project-content">
                      <h3>More Projects Coming Soon...</h3>
                      <p>Stay tuned for more exciting projects!</p>
                      <div className="project-links">
                        <a href="https://github.com/tjklint" target="_blank" rel="noopener noreferrer">
                          <FaGithub /> See on GitHub
                        </a>
                        <a href="https://tjklint.com" target="_blank" rel="noopener noreferrer">
                          <FaGlobe /> Visit Website
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
