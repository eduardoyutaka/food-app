import * as React from 'react';
import Navbar from './components/Navbar';
import DiscountBanner from './components/DiscountBanner';
import CuisinesMenu from './components/CuisinesMenu';
import PopularMenu from './components/PopularMenu';

const App = () => {
  return (
    <div>
      <Navbar />
      <DiscountBanner />
      <CuisinesMenu />
      <PopularMenu />
    </div>
  );
};

export default App;
