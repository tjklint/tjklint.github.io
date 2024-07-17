import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import spaceship from '../../assets/spaceship.png';

const HeroContainer = styled.section`
  display: flex;
  height: 100vh;
  background-color: #1e1e1e;
  color: #fff;
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
`;

const RightContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spaceship = styled.img`
  width: 50%;
  z-index: 1;
`;

const shrinkAndMove = keyframes`
  0% {
    transform: scale(1) translate(0, 0);
    opacity: 1;
  }
  100% {
    transform: scale(0) translate(-50%, -50%);
    opacity: 0;
  }
`;

const Circle = styled.div<{ left: number; top: number; size: number }>`
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  opacity: 0.8;
  z-index: 0;
  ${({ left, top, size }) => css`
    width: ${size}px;
    height: ${size}px;
    left: ${left}%;
    top: ${top}%;
    animation: ${css`${keyframes`
      0% {
        transform: translate(0, 0) scale(1);
        opacity: 1;
      }
      100% {
        transform: translate(calc(50% - ${left}%), calc(50% - ${top}%)) scale(0);
        opacity: 0;
      }
    `}`} 2s linear forwards;
  `}
`;

interface CircleProps {
  id: number;
  left: number;
  top: number;
  size: number;
}

const Hero: React.FC = () => {
  const [circles, setCircles] = useState<CircleProps[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newCircles: CircleProps[] = Array.from({ length: 15 }).map(() => ({
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 20 + 10,
      }));
      setCircles(prevCircles => [...prevCircles, ...newCircles]);
      setTimeout(() => {
        setCircles(prevCircles =>
          prevCircles.filter(circle => !newCircles.some(newCircle => newCircle.id === circle.id))
        );
      }, 2000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer>
      <LeftContainer>
        <h1>Welcome to TJ KLINT's Portfolio</h1>
        <p>Check out my projects, resume, and more!</p>
      </LeftContainer>
      <RightContainer>
        <Spaceship src={spaceship} alt="Spaceship" />
        {circles.map(circle => (
          <Circle
            key={circle.id}
            left={circle.left}
            top={circle.top}
            size={circle.size}
          />
        ))}
      </RightContainer>
    </HeroContainer>
  );
};

export default Hero;
