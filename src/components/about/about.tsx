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
            well, technically it's <i>Timothy</i> (our little secret). Anyways,
            I'm a passionate developer with a love for coding and technology.
            Most recently, I'm working as a{" "}
            <span className="purple-text">
              Full-Stack Developer at{" "}
              <a
                href="https://botpress.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                Botpress
              </a>
            </span>
            , and previously I completed internships at{" "}
            <span className="purple-text">
              <a
                href="https://www.cse-cst.gc.ca/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                CSE (Communications Security Establishment)
              </a>
            </span>{" "}
            and{" "}
            <span className="purple-text">
              <a
                href="https://www.bell.ca/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Bell
              </a>
            </span>
            .
          </p>
          <p>
            I'm a{" "}
            <span className="purple-text">
              <a
                href="https://www.johnabbott.qc.ca/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                graduate from John Abbott College
              </a>
            </span>
            . I am expected to begin at{" "}
            <span className="purple-text">
              <a
                href="https://www.concordia.ca/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Concordia University
              </a>
            </span>{" "}
            in the fall of 2025, where I will be pursuing a bachelor's in
            Computer Science.
          </p>
          <p>
            My interests change greatly depending on my environment, but at the
            moment, I am most interested by
            <span className="purple-text">
              {" "}
              AI/ML, Ethical Hacking, DevOps and Fintech.
            </span>
          </p>
          <p>
            My skillset is quite wide-ranged, I don't focus all too heavy on the
            frameworks/languages, I like to choose the best tools to get the
            best product as fast as possible. I'm a quick learner, especially in
            fast-paced environments where I'm able to hone skills on the fly to
            improve and deliver on time.
          </p>
          <p>
            My love for tech goes beyond class. I’m always eager to dive into
            the world of hackathons and tech conferences. My passion has led me
            to join my favorite conference,{" "}
            <span className="purple-text">
              <a
                href="https://2025.cusec.net"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                CUSEC
              </a>
            </span>
            , as the{" "}
            <span className="purple-text">Director of Events in 2024</span>.
            This past year, I'm thrilled to be stepping up as{" "}
            <span className="purple-text">Co-Chair for 2025</span>.
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
