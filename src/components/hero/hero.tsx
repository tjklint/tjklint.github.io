import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import spaceship from '../../assets/spaceship/webp/spaceship.webp';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #1e1e1e;
  color: #fff;
  overflow: hidden;
  font-family: 'RobotoMono', sans-serif; /* Use RobotoMono font */

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 40px 40px 40px; /* Add padding to the left side */
  text-align: left; /* Align text to the left */
  margin-top: -10%; /* Adjust to move text above the vertical center */

  @media (max-width: 768px) {
    padding-top: 0;  /* Remove upper padding for mobile */
    margin-top: 0; /* Remove top margin for mobile */
  }

  @media (min-width: 768px) {
    flex: 0 0 35%;
  }
`;

const RightContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;  /* Ensure nothing overflows */
  min-height: 50vh; /* Ensure it takes a minimum height on mobile */

  @media (min-width: 768px) {
    flex: 0 0 65%;
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Spaceship = styled.img`
  width: 80%; /* Adjusted to take up more space */
  z-index: 1;
  animation: ${floatAnimation} 3s infinite;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const shrinkAndMove = (left: number, top: number, containerWidth: number, containerHeight: number) => keyframes`
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(${containerWidth / 2 - left}px, ${containerHeight / 2 - top}px) scale(0);
    opacity: 0;
  }
`;

const Circle = styled.div<{ left: number; top: number; size: number; containerWidth: number; containerHeight: number }>`
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  opacity: 0.8;
  ${({ left, top, size, containerWidth, containerHeight }) => css`
    width: ${size}px;
    height: ${size}px;
    left: ${left}px;
    top: ${top}px;
    animation: ${shrinkAndMove(left, top, containerWidth, containerHeight)} 2s linear forwards;
  `}
`;

const GradientText = styled.h2`
  background: linear-gradient(90deg, #8a2be2, #d4a1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4em; /* Make the text much bigger */
  font-weight: bold; /* Make the text bolder */
  margin: 0.5em 0;
`;

const TypewriterText = styled.div`
  color: #d4a1ff; /* Light purple color */
  font-size: 1.5em; /* Adjust the size */
  margin-top: 0.5em;
  white-space: nowrap;
  overflow: hidden;
`;

interface CircleProps {
  id: number;
  left: number;
  top: number;
  size: number;
  containerWidth: number;
  containerHeight: number;
}

const Hero: React.FC = () => {
  const [circles, setCircles] = useState<CircleProps[]>([]);
  const [topLine, setTopLine] = useState('');
  const [currentText, setCurrentText] = useState('');
  const rightContainerRef = useRef<HTMLDivElement>(null);

  const topLines = [
    "You’re finally awake. Let’s explore my work.",
    "In a galaxy far, far away, I created this portfolio.",
    "Winter is coming, but you’re safe here. Explore my work.",
    "Welcome to my corner of the web!",
    "Greetings! I'm thrilled to have you here.",
    "Hi! Thanks for dropping by.",
    "It’s dangerous to go alone! Take this portfolio.",
    "Say hello to my little projects!",
    "Welcome to the dark side of my portfolio.",
    "One portfolio to rule them all.",
  ];

  const typewriterTexts = [
    "Software Developer",
    "SDE Intern @ Bell",
    "Co-Chair @ CUSEC",
    "Ethical Hacker",
    "AI Enthusiast",
    "Coffee Drinker",
    "Hackathon Fanatic"
  ];

  useEffect(() => {
    // Set a random top line once
    setTopLine(topLines[Math.floor(Math.random() * topLines.length)]);
  }, []);

  useEffect(() => {
    const typeWriter = () => {
      let i = 0;
      let textPos = 0;
      let currentString = typewriterTexts[i];
      const speed = 100;
      const deleteSpeed = 50;
      const waitTime = 2000;

      function type() {
        setCurrentText(currentString.substring(0, textPos) + '_');

        if (textPos++ === currentString.length) {
          setTimeout(() => deleteText(), waitTime);
        } else {
          setTimeout(type, speed);
        }
      }

      function deleteText() {
        setCurrentText(currentString.substring(0, textPos) + '_');

        if (textPos-- === 0) {
          i = (i + 1) % typewriterTexts.length;
          currentString = typewriterTexts[i];
          setTimeout(type, speed);
        } else {
          setTimeout(deleteText, deleteSpeed);
        }
      }

      type();
    };

    typeWriter();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (rightContainerRef.current) {
        const containerWidth = rightContainerRef.current.clientWidth;
        const containerHeight = rightContainerRef.current.clientHeight;

        const newCircles: CircleProps[] = Array.from({ length: 7 }).map(() => {
          const isVerticalEdge = Math.random() > 0.5;
          const left = isVerticalEdge 
            ? (Math.random() > 0.5 ? 0 : containerWidth - 10)  // Left or right edge
            : Math.random() * containerWidth;
          const top = !isVerticalEdge 
            ? (Math.random() > 0.5 ? 0 : containerHeight - 10)  // Top or bottom edge
            : Math.random() * containerHeight;

          return {
            id: Date.now() + Math.random(),
            left,
            top,
            size: Math.random() * 20 + 10,
            containerWidth,
            containerHeight,
          };
        });

        setCircles(prevCircles => [...prevCircles, ...newCircles]);
        setTimeout(() => {
          setCircles(prevCircles =>
            prevCircles.filter(circle => !newCircles.some(newCircle => newCircle.id === circle.id))
          );
        }, 2000);
      }
    }, 333);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer>
      <LeftContainer>
        <h1>{topLine}</h1>
        <GradientText>I'm TJ Klint.</GradientText>
        <TypewriterText>{currentText}</TypewriterText>
      </LeftContainer>
      <RightContainer ref={rightContainerRef}>
        <Spaceship src={spaceship} alt="Spaceship" />
        {circles.map(circle => (
          <Circle
            key={circle.id}
            left={circle.left}
            top={circle.top}
            size={circle.size}
            containerWidth={circle.containerWidth}
            containerHeight={circle.containerHeight}
          />
        ))}
      </RightContainer>
    </HeroContainer>
  );
};

export default Hero;
