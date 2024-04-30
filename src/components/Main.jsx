import React from 'react';
import Specials from './sections/Specials';
import Testiomonials from './sections/Testimonials';
import AboutUs from './sections/AboutUs';
import Reservation from './sections/Reservation';

const Main = () => {
  return (
    <div>
      <Specials />
      <Testiomonials />
      <AboutUs />
      <Reservation />
    </div>
  );
};

export default Main;
