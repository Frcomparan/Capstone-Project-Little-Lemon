import React from 'react';
import customer1 from '../../assets/img/costumer_1.jpg';
import customer2 from '../../assets/img/costumer_2.jpeg';
import customer3 from '../../assets/img/costumer_3.jpg';
import customer4 from '../../assets/img/costumer_4.jpg';

const Testiomonials = () => {
  return (
    <div className='py-8 lg:pt-16 bg-highlight-main' id='specials'>
      <div className='container font-display'>
        <section className='flex justify-center items-center flex-col md:flex-row md:justify-between'>
          <h2 className='text-4xl'>Customer Testimonials</h2>
        </section>
        <section className='grid grid-cols-12 gap-y-5 gap-x-2 md:gap-x-4 mt-8'>
          <div className='col-span-12 sm:col-span-6 lg:col-span-3 rounded-lg overflow-hidden bg-primary-main hover:shadow-xl cursor-default'>
            <div className='px-6 py-4 flex flex-col justify-between h-[60%]'>
              <div className='flex items-center gap-3 mb-1'>
                <img
                  src={customer1}
                  alt='Customer Image Example'
                  className='w-[40%] rounded-full max-w-[80px]'
                />
                <span className='text-secondary-main text-xl font-bold font-body'>
                  John Smith
                </span>
              </div>
              <div className='w-full h-[40%]'>
                {/* Display a random number o stars between 2 and 5 with a map */}
                {Array.from({ length: Math.floor(Math.random() * 4) + 2 }).map(
                  (_, index) => (
                    <i
                      className='fa-solid fa-star text-primary-second text-xl'
                      key={index}
                    ></i>
                  )
                )}
              </div>
              <div className='py-4'>
                <p className='text-highlight-main text-sm '>
                  {/* Example test for dish comentary */}
                  "Amazing flavor! I'll definitely be back for more. This dish
                  made me feel like I was in culinary heaven."
                </p>
              </div>
            </div>
          </div>

          <div className='col-span-12 sm:col-span-6 lg:col-span-3 rounded-lg overflow-hidden bg-primary-main hover:shadow-xl cursor-default'>
            <div className='px-6 py-4 flex flex-col justify-between h-[60%]'>
              <div className='flex items-center gap-3 mb-1'>
                <img
                  src={customer2}
                  alt='Customer Image Example'
                  className='w-[40%] rounded-full max-w-[80px]'
                />
                <span className='text-secondary-main text-xl font-bold font-body'>
                  Jennifer Brown
                </span>
              </div>
              <div className='w-full h-[40%]'>
                {/* Display a random number o stars between 2 and 5 with a map */}
                {Array.from({ length: Math.floor(Math.random() * 4) + 2 }).map(
                  (_, index) => (
                    <i
                      className='fa-solid fa-star text-primary-second text-xl'
                      key={index}
                    ></i>
                  )
                )}
              </div>
              <div className='py-4'>
                <p className='text-highlight-main text-sm '>
                  {/* Example test for dish comentary */}
                  "I was a bit disappointed with the presentation of the dish.
                  Although the taste was decent, I expected more in terms of the
                  food's aesthetics."
                </p>
              </div>
            </div>
          </div>

          <div className='col-span-12 sm:col-span-6 lg:col-span-3 rounded-lg overflow-hidden bg-primary-main hover:shadow-xl cursor-default'>
            <div className='px-6 py-4 flex flex-col justify-between h-[60%]'>
              <div className='flex items-center gap-3 mb-1'>
                <img
                  src={customer4}
                  alt='Customer Image Example'
                  className='w-[40%] rounded-full max-w-[80px]'
                />
                <span className='text-secondary-main text-xl font-bold font-body'>
                  David Johnson
                </span>
              </div>
              <div className='w-full h-[40%]'>
                {/* Display a random number o stars between 2 and 5 with a map */}
                {Array.from({ length: Math.floor(Math.random() * 4) + 2 }).map(
                  (_, index) => (
                    <i
                      className='fa-solid fa-star text-primary-second text-xl'
                      key={index}
                    ></i>
                  )
                )}
              </div>
              <div className='py-4'>
                <p className='text-highlight-main text-sm '>
                  {/* Example test for bad dish comentary */}
                  "This dish brought back nostalgic memories of my childhood.
                  Every bite was infused with familiar flavors that made me feel
                  comforted and happy."
                </p>
              </div>
            </div>
          </div>

          <div className='col-span-12 sm:col-span-6 lg:col-span-3 rounded-lg overflow-hidden bg-primary-main hover:shadow-xl cursor-default'>
            <div className='px-6 py-4 flex flex-col justify-between h-[60%]'>
              <div className='flex items-center gap-3 mb-1'>
                <img
                  src={customer3}
                  alt='Customer Image Example'
                  className='w-[40%] rounded-full max-w-[80px]'
                />
                <span className='text-secondary-main text-xl font-bold font-body'>
                  Sarah Davis
                </span>
              </div>
              <div className='w-full h-[40%]'>
                {/* Display a random number o stars between 2 and 5 with a map */}
                {Array.from({ length: Math.floor(Math.random() * 4) + 2 }).map(
                  (_, index) => (
                    <i
                      className='fa-solid fa-star text-primary-second text-xl'
                      key={index}
                    ></i>
                  )
                )}
              </div>
              <div className='py-4'>
                <p className='text-highlight-main text-sm '>
                  {/* Example test for dish comentary */}
                  "A unique culinary experience! This dish awakened all my
                  senses, from the tempting aroma to the explosion of flavors in
                  every bite. Definitely a gastronomic masterpiece."
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testiomonials;
