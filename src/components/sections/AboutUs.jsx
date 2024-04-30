import React from 'react';
import img1 from '../../assets/img/restaurant chef B.jpg';
import img2 from '../../assets/img/restaurant.jpg';

const AboutUs = () => {
  return (
    <div className='py-16'>
      <div className='container font-display'>
        <section className='flex justify-center items-center flex-col md:flex-row md:justify-between'>
          <h2 className='text-6xl font-body text-primary-main text-center md:text-left'>
            About Us
          </h2>
        </section>
        <section className='grid grid-cols-12 gap-y-5 gap-x-2 mt-8'>
          <div className='col-span-12 md:col-span-6 rounded-lg overflow-hidden text-primary-main '>
            <div className='flex flex-col mb-8'>
              <h3 className='text-5xl text-primary-second font-body font-bold'>
                Little Lemon
              </h3>
              <h4 className='text-3xl leading-3 font-bold'>Chicago</h4>
            </div>
            <p>
              Welcome to Little Lemon, a family-owned Mediterranean restaurant
              where tradition meets innovation. Our passion lies in crafting
              traditional recipes with a modern twist, using the freshest
              ingredients to create a dining experience that delights the
              senses. Join us on a culinary journey where every dish tells a
              story of heritage and flavor.
            </p>
          </div>
          <div className='col-span-12 md:col-span-6 rounded-lg overflow-hidden cursor-default grid place-items-center'>
            <div className='w-full h-[400px] relative'>
              <img
                src={img2}
                alt='Example image 2'
                className='absolute w-[80%] h-[80%] object-cover object-center right-0 top-0 rounded-sm shadow-md'
              />
              <img
                src={img1}
                alt='Example image 1'
                className='absolute w-[80%] h-[80%] object-cover object-center left-0 top-8 rounded-sm shadow-md'
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
