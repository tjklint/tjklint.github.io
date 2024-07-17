import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import spaceship from '../../assets/spaceship.png';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #1e1e1e;
  color: #fff;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;

  @media (max-width: 768px) {
    padding-top: 0; 
    flex: 0 0 25%;
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

  @media (min-width: 768px) {
    flex: 0 0 65%;
  }

  @media (max-width: 768px) {
    flex: 0 0 75%;
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
  width: 50%;
  z-index: 1;
  animation: ${floatAnimation} 3s infinite;
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
  const rightContainerRef = useRef<HTMLDivElement>(null);

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
        <h1>Welcome to TJ KLINT's Portfolio</h1>
        <p>Check out my projects, resume, and more!</p>
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
