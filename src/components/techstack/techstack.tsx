import React from 'react';
import { FaGithub, FaGitlab, FaDocker, FaJira, FaJava, FaPython, FaHtml5, FaCss3, FaJs, FaReact, FaDatabase, FaNodeJs } from 'react-icons/fa';
import { SiCsharp, SiCplusplus, SiPostgresql, SiMongodb, SiMysql, SiSqlite, SiSpringboot, SiRedis, SiRabbitmq, SiDotnet, SiXamarin, SiVisualstudio, SiCisco, SiHandlebarsdotjs, SiGo, SiKotlin, SiTypescript, SiScikitlearn, SiWebpack } from 'react-icons/si';
import './techstack.scss';

const Techstack: React.FC = () => {
  return (
    <div className="about-technologies-container">
      <section className="about-technologies">
        <h2>My Techstack</h2>
        <div className="technology-categories">
          <div className="technology-category">
            <h3>Languages</h3>
            <div className="technology-items">
              <div className="technology-item"><SiCsharp /><p>C#</p></div>
              <div className="technology-item"><FaJava /><p>Java</p></div>
              <div className="technology-item"><SiCplusplus /><p>C++</p></div>
              <div className="technology-item"><FaPython /><p>Python</p></div>
              <div className="technology-item"><FaDatabase /><p>SQL</p></div>
              <div className="technology-item"><SiMysql /><p>MySQL</p></div>
              <div className="technology-item"><SiSqlite /><p>SQLite</p></div>
              <div className="technology-item"><SiPostgresql /><p>PostgreSQL</p></div>
              <div className="technology-item"><FaJs /><p>JavaScript</p></div>
              <div className="technology-item"><SiTypescript /><p>TypeScript</p></div>
              <div className="technology-item"><SiGo /><p>Go</p></div>
              <div className="technology-item"><SiKotlin /><p>Kotlin</p></div>
            </div>
          </div>

          <div className="technology-category">
            <h3>Frameworks</h3>
            <div className="technology-items">
              <div className="technology-item"><SiDotnet /><p>ASP.NET</p></div>
              <div className="technology-item"><SiDotnet /><p>WPF</p></div>
              <div className="technology-item"><SiXamarin /><p>Xamarin</p></div>
              <div className="technology-item"><SiSpringboot /><p>SpringBoot</p></div>
              <div className="technology-item"><FaNodeJs /><p>NodeJS</p></div>
              <div className="technology-item"><SiRedis /><p>Redis</p></div>
              <div className="technology-item"><SiRabbitmq /><p>RabbitMQ</p></div>
              <div className="technology-item"><SiHandlebarsdotjs /><p>Handlebars</p></div>
              <div className="technology-item"><SiScikitlearn /><p>SCSS</p></div>
            </div>
          </div>

          <div className="technology-category">
            <h3>Developer Tools</h3>
            <div className="technology-items">
              <div className="technology-item"><SiSqlite /><p>SSMS</p></div>
              <div className="technology-item"><FaGithub /><p>GitHub</p></div>
              <div className="technology-item"><FaGitlab /><p>GitLab</p></div>
              <div className="technology-item"><FaDocker /><p>Docker</p></div>
              <div className="technology-item"><FaJira /><p>Jira</p></div>
              <div className="technology-item"><SiCisco /><p>Cisco</p></div>
              <div className="technology-item"><SiVisualstudio /><p>Visual Studio</p></div>
            </div>
          </div>

          <div className="technology-category">
            <h3>Libraries</h3>
            <div className="technology-items">
              <div className="technology-item"><FaReact /><p>React</p></div>
              <div className="technology-item"><FaPython /><p>PyGame</p></div>
              <div className="technology-item"><SiMongodb /><p>MongoDB</p></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Techstack;
