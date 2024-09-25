import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import spaceship from '../../assets/spaceship/webp/spaceship.webp'; // Importing spaceship image

// Main container for the hero section
const HeroContainer = styled.section`
  display: flex;
  flex-direction: column; /* Stack items vertically by default */
  min-height: 100vh; /* Full viewport height */
  background-color: #1e1e1e; /* Dark background */
  color: #fff; /* White text */
  overflow: hidden; /* Prevent overflow */
  font-family: 'RobotoMono', sans-serif; /* Use RobotoMono font */

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

  @media (max-width: 768px) {
    padding-top: 0; /* Remove padding for smaller screens */
    margin-top: 0; /* Remove negative margin for mobile */
  }

  @media (min-width: 768px) {
    flex: 0 0 35%; /* Take up 35% of the space on larger screens */
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
  0% {
    transform: translateY(0); /* Start at original position */
  }
  50% {
    transform: translateY(-10px); /* Move 10px up */
  }
  100% {
    transform: translateY(0); /* Return to original position */
  }
`;

// Styling for the spaceship image with floating animation
const Spaceship = styled.img`
  width: 80%; /* Set spaceship width to 80% of the container */
  z-index: 1; /* Ensure it stays above any background elements */
  animation: ${floatAnimation} 3s infinite; /* Apply floating animation */

  @media (min-width: 768px) {
    width: 50%; /* Make it smaller on larger screens */
  }
`;

// Animation for shrinking and moving circles
const shrinkAndMove = (left: number, top: number, containerWidth: number, containerHeight: number) => keyframes`
  0% {
    transform: translate(0, 0) scale(1); /* Start at full size and original position */
    opacity: 1; /* Fully visible */
  }
  100% {
    transform: translate(${containerWidth / 2 - left}px, ${containerHeight / 2 - top}px) scale(0); /* Move and shrink */
    opacity: 0; /* Fade out */
  }
`;

// Circle styling with animation based on position and size
const Circle = styled.div<{ left: number; top: number; size: number; containerWidth: number; containerHeight: number }>`
  position: absolute; /* Absolute positioning for floating circles */
  background-color: #fff; /* White background for the circles */
  border-radius: 50%; /* Make the div a circle */
  opacity: 0.8; /* Slight transparency */

  ${({ left, top, size, containerWidth, containerHeight }) => css`
    width: ${size}px; /* Set width based on random size */
    height: ${size}px; /* Set height to match width */
    left: ${left}px; /* Set horizontal position */
    top: ${top}px; /* Set vertical position */
    animation: ${shrinkAndMove(left, top, containerWidth, containerHeight)} 2s linear forwards; /* Animate shrinking */
  `}
`;

// Styling for the gradient text (title)
const GradientText = styled.h2`
  background: linear-gradient(90deg, #8a2be2, #d4a1ff); /* Purple gradient */
  -webkit-background-clip: text; /* Clip background to text */
  -webkit-text-fill-color: transparent; /* Make text transparent to show gradient */
  font-size: 4em; /* Large font size */
  font-weight: bold; /* Bold text */
  margin: 0.5em 0; /* Space around the text */
`;

// Styling for the typewriter effect text
const TypewriterText = styled.div`
  color: #d4a1ff; /* Light purple color */
  font-size: 1.5em; /* Medium font size */
  margin-top: 0.5em; /* Space above the text */
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide overflowing text */
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
        setCurrentText(currentString.substring(0, textPos) + '_'); // Add typing cursor

        if (textPos++ === currentString.length) {
          setTimeout(() => deleteText(), waitTime); // Wait and start deleting
        } else {
          setTimeout(type, speed); // Continue typing
        }
      }

      // Function to handle deleting the text
      function deleteText() {
        setCurrentText(currentString.substring(0, textPos) + '_'); // Add typing cursor while deleting

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
        <h1>{topLine}</h1> {/* Display random headline */}
        <GradientText>I'm TJ Klint.</GradientText> {/* Display name with gradient effect */}
        <TypewriterText>{currentText}</TypewriterText> {/* Display typewriter effect text */}
      </LeftContainer>
      <RightContainer ref={rightContainerRef}>
        <Spaceship src={spaceship} alt="Spaceship" /> {/* Display the floating spaceship */}
        {circles.map(circle => (
          <Circle
            key={circle.id} /* Key for each circle */
            left={circle.left} /* Horizontal position */
            top={circle.top} /* Vertical position */
            size={circle.size} /* Circle size */
            containerWidth={circle.containerWidth} /* Width of the container */
            containerHeight={circle.containerHeight} /* Height of the container */
          />
        ))}
      </RightContainer>
    </HeroContainer>
  );
};

export default Hero;
