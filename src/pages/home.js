import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <h1>Notedly</h1>
      <p>This is the home page</p>
    </div>
  );
};

export default Home;
