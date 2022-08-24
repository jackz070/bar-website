import React from "react";
import "./Booking.css";

const Booking = () => {
  const [bookings, setBookings] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[2].value);
    setBookings((current) => [
      ...current,
      {
        name: e.target[0].value,
        date: e.target[1].value,
        time: e.target[2].value,
      },
    ]);
  };

  return (
    <div className="app__booking">
      <div>
        <form onSubmit={handleSubmit} className="app__booking-form">
          <input type="text" name="name" />
          <input type="date" name="date" />
          <select name="time">
            <option value="0900">09:00</option>
            <option value="1000">10:00</option>
            <option value="1100">11:00</option>
          </select>
          <input
            type="submit"
            value="Book Now!"
            className="app__booking-button custom__button"
          />
        </form>
      </div>
      <div>
        <ul>
          {bookings.map((booking) => (
            <li>
              {booking.name} {booking.date} {booking.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Booking;
