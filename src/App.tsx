import React from 'react';
import styled from 'styled-components';

// @ts-ignore
import Header from './components/header/header.tsx';
// @ts-ignore
import Hero from './components/hero/hero.tsx';
// @ts-ignore
import SocialLinks from './components/social_links/social_links.tsx';

const AppContainer = styled.div`
  background-color: #1e1e1e;
  min-height: 100vh;
  padding: 20px 0;
`;

const App: React.FC = () => {
  return (
    <div>
      <AppContainer>
        <Header />
        <Hero />
        <SocialLinks />
        {/* Other components go here */}
      </AppContainer>
    </div>
  );
}

export default App;
