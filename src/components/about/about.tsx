import React, { useState, useEffect } from 'react';
import './about.scss';
import { FaGithub, FaGitlab, FaDocker, FaJira, FaJava, FaPython, FaHtml5, FaCss3, FaJs, FaReact, FaDatabase, FaNodeJs } from 'react-icons/fa';
import { SiCsharp, SiCplusplus, SiPostgresql, SiMongodb, SiMysql, SiSqlite, SiSpringboot, SiRedis, SiRabbitmq, SiDotnet, SiXamarin, SiVisualstudio, SiCisco, SiHandlebarsdotjs, SiGo, SiKotlin, SiTypescript, SiScikitlearn, SiWebpack } from 'react-icons/si';

import tjklint1 from '../../assets/me/tjklint1.jpg';
import tjklint2 from '../../assets/me/tjklint2.jpg';
import tjklint3 from '../../assets/me/tjklint3.jpg';
import tjklint4 from '../../assets/me/tjklint4.jpg';
import tjklint5 from '../../assets/me/tjklint5.jpg';

const photos = [tjklint1, tjklint2, tjklint3, tjklint4, tjklint5];

const About: React.FC = () => {
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    setPhoto(randomPhoto);
  }, []);

  return (
    <div className="about-container">
      <section className="about-intro">
        <div className="about-text">
          <p>
            Hello! My name is <span className="purple-text">TJ Klint</span>, well, technically it's <i>Timothy</i> (our little secret). 
            Anyways, I'm a passionate developer with a love for coding and technology. Most recently, I have finished a Software Developer 
            internship at Bell.
          </p>
          <p>
            I'm currently <span className="purple-text">studying at John Abbott College</span> 
            in my <span className="purple-text">third year</span>.
          </p>
          <p>
            My interests change greatly depending on my environment, but at the moment, I am most interested by  
            <span className="purple-text"> AI/ML, Ethical Hacking, and Fintech.</span>
          </p>
          <p>
            My skillset is quite wide-ranged, I don't focus all to heavy on the frameworks/languages, I like to choose
            the best tools to get the best product as fast as possible. I'm a quick learner, especially in fast-paced environments
            where I'm able to hone skills on the fly to improve and deliver on time.
          </p>
          <p>
            Outside of tech, you'll typically find me playing hockey, listening/discovering some live music, using the oxford comma, 
            and travelling!
          </p>
          <p>
            You can also catch my blogs over on <a href="https://medium.com/@tjklint" target="_blank" rel="noopener noreferrer">Medium</a> or <a href="https://dev.to/tjklint" target="_blank" rel="noopener noreferrer">Dev.to</a>, and if you want to keep up to date with my work you should definitely
            connect with me over on <a href="https://linkedin.com/in/timothy-klint" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://github.com/tjklint" target="_blank" rel="noopener noreferrer">GitHub</a>.
          </p>
        </div>
        <div className="about-photo">
          <img src={photo} alt="TJ Klint" />
        </div>
      </section>

      <section className="about-technologies">
        <h2>My Technologies</h2>
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
              <div className="technology-item"><FaHtml5 /><p>HTML</p></div>
              <div className="technology-item"><FaCss3 /><p>CSS</p></div>
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
              <div className="technology-item"><FaReact /><p>React</p></div>
              <div className="technology-item"><SiRedis /><p>Redis</p></div>
              <div className="technology-item"><SiRabbitmq /><p>RabbitMQ</p></div>
              <div className="technology-item"><SiHandlebarsdotjs /><p>Handlebars</p></div>
              <div className="technology-item"><SiWebpack /><p>Webpack</p></div>
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
              <div className="technology-item"><SiCisco /><p>Cisco Packet Tracer</p></div>
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
{/*
      <section className="about-contact">
        <h2>Contact Me</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </section>
*/}
    </div>
  );
}

export default About;
