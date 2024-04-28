import React from 'react';
import headerImg from '../assets/img/header-img.jpg';

const Header = () => {
  return (
    <div className='font-body bg-primary-main text-highlight-main sm:mb-14 w-full'>
      <div className='container py-8 grid grid-cols-12'>
        <section className='col-span-12 sm:col-span-6'>
          <h1 className='text-6xl text-primary-second text-center sm:text-left'>
            Little Lemon
          </h1>
          <h3 className='text-4xl leading-3 text-center sm:text-left'>
            Chicago
          </h3>
          <p className='w-full text-2xl leading-5 mt-6 sm:leading-6 sm:w-[70%] md:w-[50%] text-center sm:text-left px-8 sm:px-0'>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className='bg-primary-second rounded-xl text-highlight-second px-6 py-1 text-xl mt-3 hover:bg-secondary-main w-full sm:w-auto'>
            Reserve a Table
          </button>
        </section>

        <figure className='w-full h-[350px] sm:h-auto mt-5 col-span-12 sm:col-span-6 relative flex justify-center '>
          <div className='w-full sm:w-[70%]'>
            <img
              src={headerImg}
              alt='Recipe image example'
              className='w-full  h-full object-cover object-center rounded-md sm:absolute sm:h-[320px] sm:w-[70%]'
            />
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Header;
