import React, { useState, useEffect } from "react";
import "./about.scss";

import tjklint2 from "../../assets/me/webp/tjklint2.webp";
import tjklint3 from "../../assets/me/webp/tjklint3.webp";
import tjklint4 from "../../assets/me/webp/tjklint4.webp";
import tjklint5 from "../../assets/me/webp/tjklint5.webp";
import tjklint6 from "../../assets/me/webp/tjklint6.webp";

const photos = [tjklint2, tjklint3, tjklint4, tjklint5, tjklint6];

const About: React.FC = () => {
  const [photo, setPhoto] = useState("");

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
            Hello! My name is <span className="purple-text">TJ Klint</span>,
            well, technically it’s <i>Timothy</i> (our little secret). I’m a
            passionate developer currently working as a{" "}
            <span className="purple-text">Software Engineer at Planned</span>,
            and previously worked at{" "}
            <span className="purple-text">
              <a
                href="https://botpress.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Botpress
              </a>
            </span>{" "}
            and completed internships at{" "}
            <span className="purple-text">
              <a
                href="https://www.cse-cst.gc.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSE
              </a>
            </span>{" "}
            and{" "}
            <span className="purple-text">
              <a
                href="https://www.bell.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bell
              </a>
            </span>
            .
          </p>
          <p>
            I thrive in fast-paced environments where I can quickly adapt and
            deliver quality solutions. Beyond work, I’m passionate about
            hackathons and tech conferences. I served as{" "}
            <span className="purple-text">
              <a
                href="https://2025.cusec.net"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                Co-Chair for CUSEC 2025
              </a>
            </span>
            .
          </p>
          <p>
            I love sharing knowledge with the tech community through speaking
            engagements. <span className="purple-text"><a href="#speaking" style={{ color: "inherit", textDecoration: "underline" }}>Check out my talks and speaking experience</a></span>.
          </p>
          <p>
            Outside of tech, you'll typically find me playing hockey, golfing,
            listening/discovering some live music, using the oxford comma, and
            travelling!
          </p>
          <p>
            You can also catch my blogs over on{" "}
            <a
              href="https://medium.com/@tjklint"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Medium
            </a>{" "}
            or{" "}
            <a
              href="https://dev.to/tjklint"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Dev.to
            </a>
            , and if you want to keep up to date with my work you should
            definitely connect with me over on{" "}
            <a
              href="https://linkedin.com/in/timothy-klint"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              LinkedIn
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/tjklint"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="about-photo">
          <img src={photo} alt="TJ Klint" />
        </div>
      </section>
    </div>
  );
};

export default About;
