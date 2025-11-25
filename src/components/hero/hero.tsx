import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import spaceship from '../../assets/spaceship/webp/spaceship.webp'; // Importing spaceship image

// Animated gradient background
const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Main container for the hero section
const HeroContainer = styled.section`
  display: flex;
  flex-direction: column; /* Stack items vertically by default */
  min-height: 100vh; /* Full viewport height */
  padding-top: 80px; /* Account for fixed header */
  background: linear-gradient(135deg, #1e1e1e 0%, #2a1a3d 50%, #1e1e1e 100%);
  background-size: 200% 200%;
  animation: ${gradientShift} 15s ease infinite;
  color: #fff; /* White text */
  overflow: hidden; /* Prevent overflow */
  font-family: 'RobotoMono', sans-serif; /* Use RobotoMono font */
  position: relative;

  @media (max-width: 768px) {
    padding-top: 70px; /* Slightly less padding on mobile */
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(212, 161, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (min-width: 768px) {
    flex-direction: row; /* On larger screens, layout side by side */
  }
`;

// Left container for text and main title
const LeftContainer = styled.div`
  flex: 1; /* Take up equal space */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center text vertically */
  padding: 40px; /* Padding around the text */
  text-align: left; /* Left-align the text */
  margin-top: -10%; /* Adjust to move text slightly up */
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 24px; /* Reduced padding for smaller screens */
    margin-top: 0; /* Remove negative margin for mobile */
  }

  @media (min-width: 768px) {
    flex: 0 0 35%; /* Take up 35% of the space on larger screens */
    padding: 60px 40px; /* More padding on larger screens */
  }
`;

// Styling for the headline
const Headline = styled.h1`
  font-size: 1.25em;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5em;
  letter-spacing: 0.05em;
  line-height: 1.6;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    font-size: 1.5em;
  }
`;

// Right container for the spaceship and animations
const RightContainer = styled.div`
  flex: 1; /* Take up equal space */
  position: relative; /* Needed for absolute positioning of circles */
  display: flex;
  justify-content: center; /* Center the spaceship horizontally */
  align-items: center; /* Center the spaceship vertically */
  overflow: hidden; /* Prevent overflow of elements */
  min-height: 50vh; /* Minimum height for smaller screens */

  @media (min-width: 768px) {
    flex: 0 0 65%; /* Take up 65% of the space on larger screens */
  }
`;

// Floating animation for the spaceship (smooth up and down motion)
const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  33% {
    transform: translateY(-15px) rotate(1deg);
  }
  66% {
    transform: translateY(-5px) rotate(-1deg);
  }
`;

// Styling for the spaceship image with floating animation
const Spaceship = styled.img`
  width: 80%; /* Set spaceship width to 80% of the container */
  z-index: 1; /* Ensure it stays above any background elements */
  animation: ${floatAnimation} 4s ease-in-out infinite; /* Apply floating animation */
  filter: drop-shadow(0 20px 40px rgba(138, 43, 226, 0.3));
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    width: 50%; /* Make it smaller on larger screens */
  }
`;

// Animation for shrinking and moving circles
const shrinkAndMove = (left: number, top: number, containerWidth: number, containerHeight: number) => keyframes`
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0.6;
  }
  100% {
    transform: translate(${containerWidth / 2 - left}px, ${containerHeight / 2 - top}px) scale(0);
    opacity: 0;
  }
`;

// Circle styling with animation based on position and size
const Circle = styled.div<{ left: number; top: number; size: number; containerWidth: number; containerHeight: number }>`
  position: absolute;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(212, 161, 255, 0.6) 100%);
  border-radius: 50%;
  backdrop-filter: blur(2px);

  ${({ left, top, size, containerWidth, containerHeight }) => css`
    width: ${size}px;
    height: ${size}px;
    left: ${left}px;
    top: ${top}px;
    animation: ${shrinkAndMove(left, top, containerWidth, containerHeight)} 2s ease-out forwards;
    box-shadow: 0 0 ${size / 2}px rgba(212, 161, 255, 0.5);
  `}
`;

// Styling for the gradient text (title)
const GradientText = styled.h2`
  background: linear-gradient(135deg, #a855f7 0%, #d4a1ff 50%, #f0abfc 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: clamp(2.5em, 8vw, 5em);
  font-weight: 700;
  margin: 0.3em 0;
  letter-spacing: -0.02em;
  line-height: 1.1;
  animation: ${gradientShift} 8s ease infinite;
  filter: drop-shadow(0 4px 12px rgba(138, 43, 226, 0.3));

  @media (min-width: 768px) {
    font-size: clamp(3.5em, 6vw, 5.5em);
  }
`;

// Blinking cursor animation
const blink = keyframes`
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
`;

// Styling for the typewriter effect text
const TypewriterText = styled.div`
  color: #d4a1ff;
  font-size: clamp(1.1em, 3vw, 1.75em);
  margin-top: 1em;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 500;
  letter-spacing: 0.02em;
  
  &::after {
    content: '_';
    animation: ${blink} 1s infinite;
    color: #a855f7;
    font-weight: 300;
  }
`;

// Interface for circle properties
interface CircleProps {
  id: number; /* Unique ID for each circle */
  left: number; /* Horizontal position */
  top: number; /* Vertical position */
  size: number; /* Circle size */
  containerWidth: number; /* Width of the container */
  containerHeight: number; /* Height of the container */
}

// Main Hero component
const Hero: React.FC = () => {
  const [circles, setCircles] = useState<CircleProps[]>([]); // State to manage circles
  const [topLine, setTopLine] = useState(''); // State for random headline
  const [currentText, setCurrentText] = useState(''); // State for typewriter text
  const rightContainerRef = useRef<HTMLDivElement>(null); // Ref to get the right container's dimensions

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
  ]; // Array of possible headline texts

  const typewriterTexts = [
    "Software Developer",
    "Ex-SDE Intern @ Bell",
    "Co-Chair @ CUSEC",
    "Ethical Hacker",
    "AI Enthusiast",
    "Coffee Drinker",
    "Hackathon Fanatic"
  ]; // Array of texts for the typewriter effect

  useEffect(() => {
    // Pick a random top line for the header when the component mounts
    setTopLine(topLines[Math.floor(Math.random() * topLines.length)]);
  }, []);

  useEffect(() => {
    // Typewriter effect
    const typeWriter = () => {
      let i = 0;
      let textPos = 0;
      let currentString = typewriterTexts[i];
      const speed = 100; // Typing speed
      const deleteSpeed = 50; // Deleting speed
      const waitTime = 2000; // Time before deleting starts

      // Function to handle typing the text
      function type() {
        setCurrentText(currentString.substring(0, textPos));

        if (textPos++ === currentString.length) {
          setTimeout(() => deleteText(), waitTime); // Wait and start deleting
        } else {
          setTimeout(type, speed); // Continue typing
        }
      }

      // Function to handle deleting the text
      function deleteText() {
        setCurrentText(currentString.substring(0, textPos));

        if (textPos-- === 0) {
          i = (i + 1) % typewriterTexts.length; // Cycle through text array
          currentString = typewriterTexts[i]; // Get next string
          setTimeout(type, speed); // Start typing again
        } else {
          setTimeout(deleteText, deleteSpeed); // Continue deleting
        }
      }

      type(); // Start the typewriter effect
    };

    typeWriter(); // Invoke the typewriter function on component mount
  }, []);

  useEffect(() => {
    // Create new circles every 333 milliseconds for the spaceship animation
    const interval = setInterval(() => {
      if (rightContainerRef.current) {
        const containerWidth = rightContainerRef.current.clientWidth; // Get container width
        const containerHeight = rightContainerRef.current.clientHeight; // Get container height

        const newCircles: CircleProps[] = Array.from({ length: 7 }).map(() => {
          const isVerticalEdge = Math.random() > 0.5; // Randomly decide if circle spawns at vertical edge
          const left = isVerticalEdge 
            ? (Math.random() > 0.5 ? 0 : containerWidth - 10)  // Either the left or right edge
            : Math.random() * containerWidth; // Random horizontal position

          const top = !isVerticalEdge 
            ? (Math.random() > 0.5 ? 0 : containerHeight - 10)  // Either the top or bottom edge
            : Math.random() * containerHeight; // Random vertical position

          return {
            id: Date.now() + Math.random(), // Generate unique ID
            left,
            top,
            size: Math.random() * 20 + 10, // Random size for the circle
            containerWidth,
            containerHeight,
          };
        });

        setCircles(prevCircles => [...prevCircles, ...newCircles]); // Add new circles to state

        // Remove the new circles after 2 seconds
        setTimeout(() => {
          setCircles(prevCircles =>
            prevCircles.filter(circle => !newCircles.some(newCircle => newCircle.id === circle.id))
          );
        }, 2000);
      }
    }, 333); // Create circles every 333ms

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <HeroContainer>
      <LeftContainer>
        <Headline>{topLine}</Headline>
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
