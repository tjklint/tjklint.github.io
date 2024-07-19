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
// @ts-ignore
import Projects from './components/projects/projects.tsx';

const AppContainer = styled.div`
  background-color: #1e1e1e; /* Match the background color of the hero section */
  min-height: 100vh;
  padding: 20px 0;
`;

const MainContent = styled.div`
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<><Hero /><SocialLinks /></>} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;
