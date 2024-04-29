import React, { useState } from 'react';
import logo from '../assets/icons/Logo.svg';
import basketIcon from '../assets/icons/Basket.svg';
import burgerIcon from '../assets/icons/🦆 icon _hamburger menu.svg';
import Drawer from './Drawer';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='sticky top-0 left-0 w-[vw] bg-white z-[100]'>
        <div className='container flex justify-between items-center py-3'>
          <figure
            className='cursor-pointer md:hidden'
            onClick={() => setIsOpen(true)}
          >
            <img src={burgerIcon} alt='logo' />
          </figure>
          <figure>
            <img src={logo} alt='logo' />
          </figure>
          <ul className='hidden md:flex font-body text-primary-main gap-2 lg:gap-4 text-xl lg:text-2xl font-bold py-2 '>
            <li className='hover:text-primary-second'>
              <a href='#specials'>Specials</a>
            </li>
            <li className='hover:text-primary-second'>
              <a href='#testimonials'>Testimonials</a>
            </li>
            <li className='hover:text-primary-second'>
              <a href='#aboutUs'>About Us</a>
            </li>
            <li className='hover:text-primary-second'>
              <a href='#reservation'>Reserve a Table</a>
            </li>
          </ul>
          <figure className='cursor-pointer md:hidden'>
            <img src={basketIcon} alt='logo' />
          </figure>
        </div>
      </nav>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Nav;
