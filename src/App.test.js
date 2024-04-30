import { render, screen } from '@testing-library/react';
import Reservation from './components/sections/Reservation';

describe('BookingForm', () => {
  test('renders BookingForm component', () => {
    render(<Reservation />);
    const formElement = screen.getByText('Customer Name');
    expect(formElement).toBeInTheDocument();

    const dateElement = screen.getByText('Reservation date');
    expect(dateElement).toBeInTheDocument();

    const timeElement = screen.getByText('Reservation time');
    expect(timeElement).toBeInTheDocument();

    const guestsElement = screen.getByText('Total guests');
    expect(guestsElement).toBeInTheDocument();

    const buttonElement = screen.getByText('Save Reservation');
    expect(buttonElement).toBeInTheDocument();
  });

  test('validate initial time options', () => {
    const { container } = render(<Reservation />);

    const timeElements = container.querySelectorAll('.time-slot');

    // By default, the available times are 17:00, 18:00, 19:00, 20:00, 21:00, 22:00
    expect(timeElements.length).toBe(6);
  });

  test('validate updateTimes reducer', () => {
    // Test for a weekend day, where only 18:00, 19:00, 20:00, 21:00, 22:00 are available

    const { container } = render(<Reservation />);

    const resDateElement = container.querySelector('input[name="resDate"]');

    const stringDate = '2024-05-04';

    // Set the date to a Saturday
    resDateElement.value = stringDate;

    // Dispatch the event to update the available times
    resDateElement.dispatchEvent(new Event('change'));

    const timeElements = container.querySelectorAll('.time-slot');

    // Only 18:00, 19:00, 20:00, 21:00, 22:00 should be available
    expect(timeElements.length).toBe(6);
  });
});
