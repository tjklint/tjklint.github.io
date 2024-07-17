import React from 'react';
import Header from './components/header/header';
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
