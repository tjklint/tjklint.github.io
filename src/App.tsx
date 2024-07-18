import React from 'react';
import Header from './components/header/header';
import Hero from './components/hero/hero';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      {/* Other components go here */}
    </div>
  );
}

export default App;
