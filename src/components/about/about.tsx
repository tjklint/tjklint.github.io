import React, { useState, useEffect } from 'react';
import './about.scss';


import tjklint1 from '../../assets/me/tjklint1.jpg';
import tjklint2 from '../../assets/me/tjklint2.jpg';
import tjklint3 from '../../assets/me/tjklint3.jpg';
import tjklint4 from '../../assets/me/tjklint4.jpg';
import tjklint5 from '../../assets/me/tjklint5.jpg';
import tjklint6 from '../../assets/me/tjklint6.jpg';
import tjklint7 from '../../assets/me/tjklint7.jpg';
import tjklint8 from '../../assets/me/tjklint8.jpg';

const photos = [tjklint2, tjklint3, tjklint4, tjklint5, tjklint6];

const About: React.FC = () => {
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    setPhoto(randomPhoto);
  }, []);

  return (
    <div className="about-container" id="about">
      <h2 className="about-title">About Me</h2>
      <section className="about-intro">
        <div className="about-text">
          <p>
            Hello! My name is <span className="purple-text">TJ Klint</span>, well, technically it's <i>Timothy</i> (our little secret). 
            Anyways, I'm a passionate developer with a love for coding and technology. Most recently, I have finished a Software Developer 
            internship at Bell.
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
            My skillset is quite wide-ranged, I don't focus all to heavy on the frameworks/languages, I like to choose
            the best tools to get the best product as fast as possible. I'm a quick learner, especially in fast-paced environments
            where I'm able to hone skills on the fly to improve and deliver on time.
          </p>
          <p>
            My love for tech goes beyond the classroom. I’m always eager to dive into the world of hackathons and tech conferences. 
            My passion for these events led me to join my favorite conference, CUSEC, as the Director of Events in 2024. This year, 
            I'm thrilled to be stepping up as Co-Chair for 2025.
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

      
    </div>
  );
}

export default About;
