import React, { useReducer } from 'react';
import img2 from '../../assets/img/restaurant.jpg';
import BookingForm from '../BookingForm';

const Reservation = () => {
  // Available times for reservation with reducer hook for updating state

  const updatesTimes = (state, action) => {
    switch (action.type) {
      case 'SET_TIMES':
        const date = new Date(action.payload);
        const day = date.getDay() + 1;
        const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

        if (day === 7 || day === 6) {
          return times.filter((time) => time !== '17:00');
        }

        return times;

      default:
        return state;
    }
  };

  const initializeTimes = () => [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];

  const [availableTimes, dispatch] = useReducer(
    updatesTimes,
    [],
    initializeTimes
  );

  return (
    <div className='py-16 bg-highlight-main'>
      <div className='container font-display'>
        <section className='flex justify-center items-center flex-col md:flex-row md:justify-between'>
          <h2 className='text-6xl font-body text-primary-main text-center md:text-left'>
            Reserve a Table
          </h2>
        </section>
        <section className='grid grid-cols-12 gap-y-5 gap-x-4 mt-8'>
          <div className='col-span-12 md:col-span-6 rounded-lg cursor-default place-items-center hidden md:grid'>
            <div className='w-full h-full relative'>
              <img
                src={img2}
                alt='Example image 2'
                className='w-full h-full object-cover object-center rounded-sm shadow-md'
              />
            </div>
          </div>
          <div className='col-span-12 md:col-span-6 rounded-lg text-primary-main '>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reservation;
