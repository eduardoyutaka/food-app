import * as React from 'react';
import Navbar from './components/Navbar';
import DiscountBanner from './components/DiscountBanner';
import CuisinesMenu from './components/CuisinesMenu';

const App = () => {
  return (
    <div>
      <Navbar />
      <DiscountBanner />
      <CuisinesMenu />
    </div>
  );
};

export default App;
