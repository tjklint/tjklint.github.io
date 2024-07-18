import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// @ts-ignore
import Header from './components/header/header.tsx';
// @ts-ignore
import Hero from './components/hero/hero.tsx';
// @ts-ignore
import SocialLinks from './components/social_links/social_links.tsx';
// @ts-ignore
import Resume from './components/resume/resume.tsx';


const AppContainer = styled.div`
  background-color: #1e1e1e; /* Match the background color of the hero section */
  min-height: 100vh;
  padding: 20px 0;
`;

const MainContent = styled.div`
  padding-top: 60px; /* Adjust padding to accommodate header height */
`;

const App: React.FC = () => {
  return (
    <div>
      <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<><Hero /><SocialLinks /></>} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </AppContainer>
    </Router>
    </div>
  );
}

export default App;
