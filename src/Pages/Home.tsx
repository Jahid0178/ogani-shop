import React from 'react';
import Banner from '../components/Home/Banner/Banner';
import Offer from '../components/Home/Offer/Offer';

const Home = () => {
  return (
    <div>
      <div className="container mx-auto px-2 py-1">
        <Banner/>
        <Offer/>
      </div>
    </div>
  );
};

export default Home;
