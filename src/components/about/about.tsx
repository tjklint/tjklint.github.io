import React, { useState, useEffect } from 'react';
import './about.scss';


import tjklint1 from '../../assets/me/webp/tjklint1.webp';
import tjklint2 from '../../assets/me/webp/tjklint2.webp';
import tjklint3 from '../../assets/me/webp/tjklint3.webp';
import tjklint4 from '../../assets/me/webp/tjklint4.webp';
import tjklint5 from '../../assets/me/webp/tjklint5.webp';
import tjklint6 from '../../assets/me/webp/tjklint6.webp';
import tjklint7 from '../../assets/me/webp/tjklint7.webp';
import tjklint8 from '../../assets/me/webp/tjklint8.webp';

const photos = [tjklint2, tjklint3, tjklint4, tjklint5, tjklint6];

const About: React.FC = () => {
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    setPhoto(randomPhoto);
  }, []);

  return (
    <div className="about-container" id="about">
      <section className="about-intro">
        <div className="about-text">
        <h2 className="about-title">About Me</h2>
          <p>
            Hello! My name is <span className="purple-text">TJ Klint</span>, well, technically it's <i>Timothy</i> (our little secret). 
            Anyways, I'm a passionate developer with a love for coding and technology. Most recently, I am working as a <span className="purple-text">Software Developer at CSE </span>
            (Communications Security Establishment) and previously a Software Developer at Bell.
          </p>
          <p>
            I'm currently <span className="purple-text"> studying at John Abbott College </span> 
            in my <span className="purple-text">third year</span>.
          </p>
          <p>
            My interests change greatly depending on my environment, but at the moment, I am most interested by  
            <span className="purple-text"> AI/ML, Ethical Hacking, and Fintech.</span>
          </p>
          <p>
            My skillset is quite wide-ranged, I don't focus all too heavy on the frameworks/languages, I like to choose
            the best tools to get the best product as fast as possible. I'm a quick learner, especially in fast-paced environments
            where I'm able to hone skills on the fly to improve and deliver on time.
          </p>
          <p>
            My love for tech goes beyond the classroom. I’m always eager to dive into the world of hackathons and tech conferences. 
            My passion for these events led me to join my favorite conference, <span className="purple-text">CUSEC</span>, as the <span className="purple-text">Director of Events in 2024</span>. This year, 
            I'm thrilled to be stepping up as <span className="purple-text">Co-Chair for 2025</span>.
          </p>
          <p>
            Outside of tech, you'll typically find me playing hockey, golfing, listening/discovering some live music, using the oxford comma, 
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

      
    </div>
  );
}

export default About;
