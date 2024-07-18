import React from 'react';
// @ts-ignore
import Header from './components/header/header.tsx';
// @ts-ignore
import Hero from './components/hero/hero.tsx';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* Other components go here */}
    </div>
  );
}

export default App;
