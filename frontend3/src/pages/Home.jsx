import React from 'react';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsLetter from '../components/NewsLetter';
import FragranceJourney from '../components/FragranceJourney';
import Testimonials from '../components/Testimonials';
import SummerOffer from '../components/SummerOffer';
import InstagramGallery from '../components/InstagramGallery';

const Home = () => {
  return (
    <>
        <Hero />
        <OurPolicy />
        <Collections />
        <FragranceJourney />
        <BestSeller />
        <Testimonials />
        <SummerOffer />
        <NewsLetter />
        <InstagramGallery />
    </>
  )
}

export default Home;