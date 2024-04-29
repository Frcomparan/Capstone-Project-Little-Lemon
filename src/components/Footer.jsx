import React from 'react';
import logo from '../assets/icons/Logo.svg';

const Footer = () => {
  return (
    <div className='bg-primary-main pt-8 pb-4'>
      <div className='container font-body font-bold '>
        <div className='flex flex-col-reverse justify-between text-highlight-second text-2xl md:text-lg md:flex-row'>
          <ul className='flex flex-col items-center md:items-start py-2'>
            <li className='hover:text-highlight-main'>
              <a href='#specials'>Specials</a>
            </li>
            <li className='hover:text-highlight-main'>
              <a href='#testimonials'>Testimonials</a>
            </li>
            <li className='hover:text-highlight-main'>
              <a href='#testimonials'>About Us</a>
            </li>
          </ul>
          <hr className='md:hidden' />
          <ul className='flex flex-col items-center justify-center py-2'>
            <li className='text-primary-second text-3xl md:text-xl'>
              Little Lemon
            </li>
            <li className=''>Chicago</li>
            <li className=''>123-456-7890</li>
          </ul>
        </div>
        <hr />
        <div className='flex flex-col gap-4 md:flex-row justify-between items-center py-3 font-body'>
          <figure className='bg-white rounded p-1 overflow-hidden'>
            <img src={logo} alt='Little Lemon icon' />
          </figure>
          <span className='text-center md:text-left font-bold text-highlight-second text-xl'>
            {`© ${new Date().getFullYear()} `} Little Lemon. All Rights
            Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
