import React from 'react'
import Feature from './components/Feature'
import Hero from './components/Hero'
import Service from './components/Service';
import Trusted from './components/Trusted';
const Home = () => {
  return (
    <>
      <Hero />
      <Feature />
      <Service />
      <Trusted />
    </>
  );
}

export default Home