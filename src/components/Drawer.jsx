import React from 'react';

const Drawer = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className='bg-black/85 backdrop-blur-sm w-lvw h-lvh fixed top-0 left-0 z-50'></div>
      <div className='fixed top-0 left-0 w-lvw h-lvh z-[51]'>
        <div className='h-full w-[50vw] bg-white relative'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='rounded absolute top-4 right-4 bg-primary-main hover:bg-secondary-main'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <ul className='font-body text-primary-main flex flex-col gap-2 text-5xl font-bold py-8 px-7'>
            <li
              className='hover:text-primary-second'
              onClick={() => setIsOpen(!isOpen)}
            >
              <a href='#specials'>Specials</a>
            </li>
            <li
              className='hover:text-primary-second'
              onClick={() => setIsOpen(!isOpen)}
            >
              <a href='#testimonials'>Testimonials</a>
            </li>
            <li
              className='hover:text-primary-second'
              onClick={() => setIsOpen(!isOpen)}
            >
              <a href='#aboutUs'>About Us</a>
            </li>
            <li
              className='hover:text-primary-second'
              onClick={() => setIsOpen(!isOpen)}
            >
              <a href='#reservation'>Reserve a Table</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
