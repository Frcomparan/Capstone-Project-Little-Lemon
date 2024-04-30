import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch }) => {
  const [formState, setFormState] = useState({
    customerName: '',
    resDate: '',
    resTime: '17:00',
    guests: 1,
    occasion: 'Other',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'resDate') {
      dispatch({
        type: 'SET_TIMES',
        payload: value,
      });
    }

    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the server
    console.log(formState);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <form className='flex flex-col font-display gap-2' onSubmit={handleSubmit}>
      {/* Confirmation Message */}
      {submitted && (
        <div className='field-container w-full'>
          <h3 className='text-2xl font-body text-primary-main inline-block mr-2'>
            Your reservation is confirmed for:
          </h3>
          <p className='text-2xl inline-block font-bold font-body'>
            {formState.resDate} at {formState.resTime}
          </p>
        </div>
      )}
      <div className='field-container w-full flex flex-col '>
        <label htmlFor='customerName' className='font-body text-2xl'>
          Customer Name
        </label>
        <input
          type='text'
          name='customerName'
          placeholder='Type your name'
          onChange={handleChange}
          value={formState.name}
          required
          className='px-2 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent'
        />
      </div>
      <div className='field-container w-full flex flex-col'>
        <label htmlFor='resDate' className='font-body text-2xl'>
          Reservation date
        </label>
        <input
          type='date'
          name='resDate'
          min={new Date().toISOString().split('T')[0]}
          onChange={handleChange}
          value={formState.resDate}
          required
          className='px-2 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent'
        />
      </div>
      <div className='field-container w-full flex flex-col'>
        <label htmlFor='resTime' className='font-body text-2xl'>
          Reservation time
        </label>
        <select
          name='resTime'
          onChange={handleChange}
          value={formState.time}
          required
          className='px-2 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent'
        >
          {availableTimes.map((time) => (
            <option key={time} value={time} className='time-slot'>
              {time}
            </option>
          ))}
        </select>
      </div>
      <div className='field-container w-full flex flex-col'>
        <label htmlFor='guests' className='font-body text-2xl'>
          Total guests
        </label>
        <select
          name='guests'
          onChange={handleChange}
          value={formState.guests}
          required
          className='px-2 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent'
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
        </select>
      </div>
      <div className='field-container w-full flex flex-col'>
        <label htmlFor='ocassion' className='font-body text-2xl'>
          Occasion
        </label>
        <select
          name='ocassion'
          onChange={handleChange}
          value={formState.occasion}
          required
          className='px-2 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent'
        >
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
          <option value='Other'>Other</option>
        </select>
      </div>
      <div className='submit-container w-full flex flex-col'>
        <button
          type='submit'
          className='bg-primary-second text-primary-main font-body text-2xl py-3 rounded-md hover:bg-secondary-main focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent disabled:bg-primary-main disabled:text-gray-300 disabled:cursor-not-allowed'
          disabled={isLoading}
        >
          Save Reservation
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
