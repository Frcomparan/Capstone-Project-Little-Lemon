import React from 'react';
import bruchetta from '../../assets/icons/bruchetta.svg';
import lemmonDessert from '../../assets/img/lemon-dessert.jpg';
import greekSalad from '../../assets/img/greek-salad.jpg';
import deliveryIcon from '../../assets/icons/Recent.svg';

const Specials = () => {
  return (
    <div className='py-8 lg:pt-16'>
      <div className='container font-display' id='specials'>
        <section className='flex justify-center items-center flex-col'>
          <h2 className='text-4xl'>This weeks specials</h2>
          <button className='bg-primary-second rounded-xl text-highlight-second px-6 py-1 text-xl mt-3 hover:bg-secondary-main w-full sm:w-auto'>
            Online Menu
          </button>
        </section>
        <section className='grid grid-cols-12 gap-y-5 sm:gap-x-2 md:gap-x-4 lg:gap-x-8 mt-8'>
          <div className='col-span-12 sm:col-span-6 lg:col-span-4 rounded-lg overflow-hidden bg-highlight-main hover:shadow-xl'>
            <figure className='w-full h-[40%]'>
              <img
                src={greekSalad}
                alt='Bruchetta dish'
                className='object-cover object-center w-full h-full'
              />
            </figure>
            <div className='px-6 py-4 flex flex-col justify-between h-[60%]'>
              <div className='flex justify-between'>
                <h3 className='font-body text-lg font-bold text-black'>
                  Greek Salad
                </h3>
                <span className='text-secondary-main'>$12.99</span>
              </div>
              <div className='py-4'>
                <p className='text-primary-main text-sm'>
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago feta cheese, garnished with garlic and rosemary
                  croutons.
                </p>
              </div>
              <div className='flex gap-1 items-center'>
                <p className='text-black font-bold text-sm'>Order a delivery</p>
                <figure>
                  <img src={deliveryIcon} alt='Clock icon' className='w-6' />
                </figure>
              </div>
            </div>
          </div>
          <div className='col-span-12 sm:col-span-6 lg:col-span-4 rounded-lg overflow-hidden bg-highlight-main hover:shadow-xl'>
            <figure className='w-full h-[40%]'>
              <img
                src={bruchetta}
                alt='Bruchetta dish'
                className='object-cover object-center w-full h-full'
              />
            </figure>
            <div className='px-6 py-4 flex flex-col justify-between h-[60%]'>
              <div className='flex justify-between'>
                <h3 className='font-body text-lg font-bold text-black'>
                  Bruchetta
                </h3>
                <span className='text-secondary-main'>$5.99</span>
              </div>
              <div className='py-4'>
                <p className='text-primary-main text-sm'>
                  Our Bruschetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil.
                </p>
              </div>
              <div className='flex gap-1 items-center'>
                <p className='text-black font-bold text-sm'>Order a delivery</p>
                <figure>
                  <img src={deliveryIcon} alt='Clock icon' className='w-6' />
                </figure>
              </div>
            </div>
          </div>
          <div className='col-span-12 sm:col-span-6 lg:col-span-4 rounded-lg overflow-hidden bg-highlight-main hover:shadow-xl'>
            <figure className='w-full h-[40%]'>
              <img
                src={lemmonDessert}
                alt='Bruchetta dish'
                className='object-cover object-center w-full h-full'
              />
            </figure>
            <div className='px-6 py-4 flex flex-col justify-between h-[60%]'>
              <div className='flex justify-between'>
                <h3 className='font-body text-lg font-bold text-black'>
                  Lemmon Dessert
                </h3>
                <span className='text-secondary-main'>$12.99</span>
              </div>
              <div className='py-4'>
                <p className='text-primary-main text-sm'>
                  This comes straight from grandma's recipe books, every last
                  ingredient has been sourced and is as authentic as can be
                  imagined.
                </p>
              </div>
              <div className='flex gap-1 items-center'>
                <p className='text-black font-bold text-sm'>Order a delivery</p>
                <figure>
                  <img src={deliveryIcon} alt='Clock icon' className='w-6' />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Specials;
